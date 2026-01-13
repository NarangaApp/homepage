import React, { useEffect, useRef, useState } from 'react';

interface NaverMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
  showMarker?: boolean;
  onError?: (message: string | null) => void;
}

let naverScriptPromise: Promise<void> | null = null;

const loadNaverScript = (clientId: string) => {
  if ((window as any).naver?.maps) {
    return Promise.resolve();
  }

  if (naverScriptPromise) {
    return naverScriptPromise;
  }

  naverScriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById('naver-map-script') as HTMLScriptElement | null;

    const handleLoad = () => {
      if ((window as any).naver?.maps) {
        resolve();
      } else {
        reject(new Error('Naver maps SDK loaded but is unavailable.'));
      }
    };

    const handleError = (err?: Event) => {
      naverScriptPromise = null;
      reject(err || new Error('Failed to load Naver maps SDK.'));
    };

    if (existing) {
      existing.addEventListener('load', handleLoad, { once: true });
      existing.addEventListener('error', handleError, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = 'naver-map-script';
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
    script.async = true;
    script.onload = handleLoad;
    script.onerror = handleError;
    document.head.appendChild(script);
  });

  return naverScriptPromise;
};

const getApiKey = () => {
  const envKey = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
  const windowKey = (window as any)?.VITE_NAVER_MAP_CLIENT_ID || (window as any)?.__NAVER_MAP_CLIENT_ID;
  return (envKey || windowKey || '').toString().trim();
};

const NaverMap: React.FC<NaverMapProps> = ({ lat, lng, zoom = 15, className, showMarker = true, onError }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;
    const key = getApiKey();

    if (!key) {
      const message = '네이버 지도 키가 없습니다. .env.local에 VITE_NAVER_MAP_CLIENT_ID를 설정해주세요.';
      setError(message);
      onError?.(message);
      return () => {
        isCancelled = true;
      };
    }

    const initializeMap = () => {
      if (!containerRef.current || isCancelled) return;
      const { naver } = window as any;

      const latNum = Number(lat);
      const lngNum = Number(lng);

      if (!isFinite(latNum) || !isFinite(lngNum)) {
        const message = '좌표가 올바르지 않습니다. 숫자 형태의 위도/경도를 확인해주세요.';
        console.error('[NaverMap] Invalid coords:', { lat, lng });
        setError(message);
        onError?.(message);
        return;
      }

      if (!naver?.maps?.LatLng) {
        const message = '네이버 지도 SDK를 불러오지 못했습니다. 앱 키와 도메인을 확인해주세요.';
        console.error('[NaverMap] LatLng unavailable on naver.maps');
        setError(message);
        onError?.(message);
        return;
      }

      const center = new naver.maps.LatLng(latNum, lngNum);

      if (mapInstanceRef.current) {
        mapInstanceRef.current.setCenter(center);
        if (typeof mapInstanceRef.current.setZoom === 'function') {
          mapInstanceRef.current.setZoom(zoom);
        }
        if (showMarker && markerRef.current) {
          markerRef.current.setPosition(center);
        }
        onError?.(null);
        setError(null);
        return;
      }

      try {
        const map = new naver.maps.Map(containerRef.current, { center, zoom });
        mapInstanceRef.current = map;

        if (showMarker) {
          markerRef.current = new naver.maps.Marker({ position: center, map });
        }

        onError?.(null);
        setError(null);
      } catch (err) {
        const message = '지도 초기화 중 오류가 발생했습니다.';
        console.error(message, err);
        setError(message);
        onError?.(message);
      }
    };

    loadNaverScript(key)
      .then(() => {
        if (!(window as any).naver?.maps) {
          const message = '네이버 지도 SDK를 불러오지 못했습니다. 앱 키와 도메인을 확인해주세요.';
          setError(message);
          onError?.(message);
          return;
        }
        initializeMap();
      })
      .catch((err) => {
        const message = '지도를 불러오지 못했습니다. 키 설정을 확인해주세요.';
        console.error('Failed to load Naver Map script', err);
        setError(message);
        onError?.(message);
      });

    return () => {
      isCancelled = true;
    };
  }, [lat, lng, zoom, showMarker, onError]);

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

export default NaverMap;
