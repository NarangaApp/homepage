import React, { useEffect, useRef, useState } from 'react';

const ProblemPage: React.FC = () => {
  const [splineReady, setSplineReady] = useState(false);
  const [unlockAfterDelay, setUnlockAfterDelay] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = heroRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadSpline(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  const problems = [
    {
      title: '중고차 정보 비대칭',
      desc: '차량 이력·상태·가격이 제각각 노출되어 소비자가 신뢰할 수 있는 기준을 찾기 어렵습니다.'
    },
    {
      title: '예측 불가능한 품질 리스크',
      desc: '단기 점검만으로는 숨겨진 문제를 발견하기 어려워, 거래 이후 예상치 못한 수리비와 안전 리스크가 발생합니다.'
    },
    {
      title: '분절된 서비스 경험',
      desc: '점검, 가격 산출, 거래, 사후 케어가 분리되어 있어 한 번의 여정에서 신뢰할 수 있는 통합 경험을 제공받기 어렵습니다.'
    }
  ];

  const solutions = [
    'AI 기반 허위매물 필터링과 가격 산출로 투명한 거래 기준 제공',
    '센서·데이터 기반 진단과 예측 모델로 숨겨진 리스크 사전 차단',
    '동행 점검부터 감가 추천, 사후 모니터링까지 이어지는 통합 여정'
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <div ref={heroRef} className="relative w-full min-h-[65vh] md:min-h-[75vh] pt-28 overflow-hidden mb-12">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0b0f1a]/90 to-[#0b0f1a]/70 transition-opacity duration-600 ${
            splineReady && unlockAfterDelay ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
          } z-10`}
        />
        {shouldLoadSpline ? (
          <iframe
            src="https://my.spline.design/zerogravityphysicslandingpage-BSA3fsEvj2zl7K6LAonsNDmc/"
            title="Naranga Problem Recognition 3D"
            className="absolute inset-0 w-full h-full z-0"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            onLoad={() => {
              setSplineReady(true);
              setTimeout(() => setUnlockAfterDelay(true), 400);
            }}
            style={{ transform: 'scale(1.22) translate(-2%, 4%)', transformOrigin: 'center', pointerEvents: splineReady && unlockAfterDelay ? 'auto' : 'none' }}
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full z-0 bg-[#0b0f1a]"
            style={{
              backgroundImage: 'linear-gradient(180deg, rgba(11,15,26,0.9) 0%, rgba(11,15,26,0.75) 60%, rgba(11,15,26,0.55) 100%), url(/images/naranga_thumbnail.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        )}
      </div>

      <div className="container mx-auto px-6 max-w-5xl pb-32">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <span className="text-blue-600 font-black tracking-[0.25em] uppercase text-[10px]">Problem Recognition</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">중고차 시장의 본질적 문제를 해결합니다</h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
            나랑가는 데이터·AI·현장 경험을 결합해 중고차 거래의 불확실성과 비대칭을 해소합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {problems.map((p, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-gray-100 shadow-sm bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-black flex items-center justify-center mb-4 text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-10 md:p-12 rounded-3xl border border-blue-100 bg-blue-50/60">
          <h2 className="text-2xl md:text-3xl font-black text-blue-900 mb-6">나랑가의 해결 방식</h2>
          <ul className="space-y-4 text-gray-800 text-base md:text-lg font-medium leading-relaxed list-disc list-inside">
            {solutions.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
