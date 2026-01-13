import React, { useEffect, useRef, useState } from 'react';

interface KakaoMapProps {
  lat: number;
  lng: number;
  level?: number;
  className?: string;
  showMarker?: boolean;
  onError?: (message: string | null) => void;
}

let kakaoScriptPromise: Promise<void> | null = null;

const loadKakaoScript = (apiKey: string) => {
  if ((window as any).kakao?.maps) {
    return Promise.resolve();
  }

  if (kakaoScriptPromise) {
    return kakaoScriptPromise;
  }

  kakaoScriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById('kakao-map-script') as HTMLScriptElement | null;

    const handleLoad = () => {
      if ((window as any).kakao?.maps) {
        resolve();
      } else {
        reject(new Error('Kakao maps SDK loaded but is unavailable.'));
      }
    };

    const handleError = (err?: Event) => {
      kakaoScriptPromise = null;
      reject(err || new Error('Failed to load Kakao maps SDK.'));
    };

    if (existing) {
      existing.addEventListener('load', handleLoad, { once: true });
      existing.addEventListener('error', handleError, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = 'kakao-map-script';
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    script.async = true;
    script.onload = handleLoad;
    script.onerror = handleError;
    document.head.appendChild(script);
  });

  return kakaoScriptPromise;
};

const getApiKey = () => {
  // Use direct access so Vite can statically replace the value at build time.
  const envKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;
  const windowKey = (window as any)?.VITE_KAKAO_MAP_API_KEY || (window as any)?.__KAKAO_MAP_API_KEY;
  return (envKey || windowKey || '').toString().trim();
};

const KakaoMap: React.FC<KakaoMapProps> = ({ lat, lng, level = 3, className, showMarker = true, onError }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;
    const key = getApiKey();

    if (!key) {
      const message = 'Kakao 지도 키가 없습니다. .env.local에 VITE_KAKAO_MAP_API_KEY를 설정해주세요.';
      setError(message);
      onError?.(message);
      return () => {
        isCancelled = true;
      };
    }

    const initializeMap = () => {
      if (!containerRef.current || isCancelled) return;
      const { kakao } = window as any;

      kakao.maps.load(() => {
        if (isCancelled || !containerRef.current) return;

        const latNum = Number(lat);
        const lngNum = Number(lng);

        if (!isFinite(latNum) || !isFinite(lngNum)) {
          const message = '좌표가 올바르지 않습니다. 숫자 형태의 위도/경도를 확인해주세요.';
          console.error('[KakaoMap] Invalid coords:', { lat, lng });
          setError(message);
          onError?.(message);
          return;
        }

        if (!kakao?.maps?.LatLng) {
          const message = '카카오 지도 SDK를 불러오지 못했습니다. 앱 키와 도메인을 확인해주세요.';
          console.error('[KakaoMap] LatLng unavailable on kakao.maps');
          setError(message);
          onError?.(message);
          return;
        }

        const center = new kakao.maps.LatLng(latNum, lngNum);

        if (mapInstanceRef.current) {
          mapInstanceRef.current.setCenter(center);
          if (typeof mapInstanceRef.current.relayout === 'function') {
            mapInstanceRef.current.relayout();
          }
          if (showMarker && markerRef.current) {
            markerRef.current.setPosition(center);
          }
          onError?.(null);
          setError(null);
          return;
        }

        try {
          const map = new kakao.maps.Map(containerRef.current, { center, level });
          mapInstanceRef.current = map;

          if (showMarker) {
            markerRef.current = new kakao.maps.Marker({ position: center, map });
          }

          onError?.(null);
          setError(null);
        } catch (err) {
          const message = '지도 초기화 중 오류가 발생했습니다.';
          console.error(message, err);
          setError(message);
          onError?.(message);
        }
      });
    };

    loadKakaoScript(key)
      .then(() => {
        if (!(window as any).kakao?.maps) {
          const message = '카카오 지도 SDK를 불러오지 못했습니다. 앱 키와 도메인을 확인해주세요.';
          setError(message);
          onError?.(message);
          return;
        }
        initializeMap();
      })
      .catch((err) => {
        const message = '지도를 불러오지 못했습니다. 키 설정을 확인해주세요.';
        console.error('Failed to load Kakao Map script', err);
        setError(message);
        onError?.(message);
      });

    return () => {
      isCancelled = true;
    };
  }, [lat, lng, level, showMarker, onError]);

  return (
    <div className={className}>
      <div ref={containerRef} className="w-full h-full" />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm text-center px-8">
          <p className="text-gray-600 font-bold">{error}</p>
        </div>
      )}
    </div>
  );
};

export default KakaoMap;
