import React, { useEffect, useMemo, useState } from 'react';

interface Point {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface TechNode {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  x: number;
  y: number;
  mobileX: number;
  mobileY: number;
  satellites: Point[];
  connections: number[];
  status: string;
}

const AwardsSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const techNodes: TechNode[] = useMemo(() => {
    const rawNodes = [
      {
        id: 1,
        title: '기업부설연구소 인정',
        desc: '미래 모빌리티 및 AI 판단 엔진 개발 역량 공식 인증 (과기부)',
        x: 50,
        y: 50,
        mobileX: 50,
        mobileY: 50,
        img: '/images/certificate-rnd-lab.png',
        conn: [2, 3, 4, 8],
        status: 'OFFICIAL'
      },
      {
        id: 2,
        title: '중고차 가격산출 서버',
        desc: 'AI 기반 차량 상태 및 시장 트렌드 실시간 분석 특허 등록',
        x: 22,
        y: 24,
        mobileX: 22,
        mobileY: 32,
        img: '/images/patent-10-2023-0141562.png',
        conn: [1, 3, 8],
        status: 'REGISTERED'
      },
      {
        id: 3,
        title: '자동차 유전자 AI 지도',
        desc: '차량 정비 데이터 기반 고장 사전 예측 데이터 제공 시스템 특허',
        x: 78,
        y: 24,
        mobileX: 78,
        mobileY: 32,
        img: '/images/patent-kr-10-2024-0098432.png',
        conn: [1, 2, 4],
        status: 'REGISTERED'
      },
      {
        id: 4,
        title: 'OCV 배터리 진단',
        desc: 'OCV 기반 배터리 상태 진단 시스템 및 알고리즘 출원',
        x: 88,
        y: 52,
        mobileX: 82,
        mobileY: 58,
        img: '/images/patent-10-2024-0111369.png',
        conn: [3, 1, 5],
        status: 'PENDING'
      },
      {
        id: 5,
        title: '차량 상태 증강현실(AR)',
        desc: 'AI 활용 자동차 상태 기반 AR 시각화 동작방법 출원',
        x: 70,
        y: 70,
        mobileX: 62,
        mobileY: 82,
        img: '/images/patent-kr-10-2024-0123987.png',
        conn: [4, 6],
        status: 'PENDING'
      },
      {
        id: 6,
        title: '허위매물 조회 서비스',
        desc: 'AI 기반 중고차 허위매물 식별 및 실시간 조회 시스템 출원',
        x: 30,
        y: 70,
        mobileX: 38,
        mobileY: 82,
        img: '/images/patent-10-2023-0141562.png',
        conn: [5, 7],
        status: 'PENDING'
      },
      {
        id: 7,
        title: '실시간 멀티 스캐너',
        desc: 'AI 기반 차량 멀티 스캐너 실시간 차량진단 기술 출원',
        x: 12,
        y: 52,
        mobileX: 18,
        mobileY: 58,
        img: '/images/patent-kr-10-2024-0098432.png',
        conn: [6, 8],
        status: 'PENDING'
      },
      {
        id: 8,
        title: '가격산출 동작 알고리즘',
        desc: '중고차 적정가격 산출 서비스 동작 프로세스 기술 출원',
        x: 48,
        y: 18,
        mobileX: 50,
        mobileY: 18,
        img: '/images/patent-10-2024-0111369.png',
        conn: [1, 2, 7],
        status: 'PENDING'
      }
    ];

    return rawNodes.map((node) => {
      const satellites: Point[] = Array.from({ length: 18 + Math.floor(Math.random() * 10) }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const radius = 10 + Math.random() * 55;
        return {
          x: node.x + Math.cos(angle) * radius,
          y: node.y + Math.sin(angle) * radius,
          size: Math.random() * 0.18 + 0.05,
          opacity: Math.random() * 0.18 + 0.03
        };
      });
      return { ...node, imageUrl: node.img, satellites, connections: node.conn };
    });
  }, []);

  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
    if (!hasInteracted) setHasInteracted(true);
  };

  const activeNode = hoveredId ? techNodes.find((node) => node.id === hoveredId) : null;
  const activeNodeX = activeNode ? (isMobile ? activeNode.mobileX : activeNode.x) : 0;
  const activeNodeY = activeNode ? (isMobile ? activeNode.mobileY : activeNode.y) : 0;
  const activeIsRight = activeNodeX > 50;
  const activeCardLeft = isMobile ? `clamp(35%, ${activeNodeX}%, 65%)` : `${activeNodeX}%`;
  const isBottomNode = activeNode?.id === 5 || activeNode?.id === 6;
  const activeCardTop = isMobile
    ? isBottomNode
      ? `calc(${activeNodeY}% - 36px)`
      : `calc(${activeNodeY}% + 36px)`
    : `${activeNodeY}%`;
  const desktopGap = '72px';
  const activeCardTransform = isMobile
    ? isBottomNode
      ? 'translate(-50%, -100%)'
      : 'translate(-50%, 0)'
    : activeIsRight
      ? `translate(calc(-100% - ${desktopGap}), -50%)`
      : `translate(${desktopGap}, -50%)`;

  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-6 pt-8 pb-1 text-center">
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8 opacity-60">
            <div className="hidden sm:block w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-[#0066ff]" />
            <span className="text-gray-600 font-black text-[10px] md:text-xs tracking-[0.6em] md:tracking-[1.5em] uppercase">
              Core Expertise & IP
            </span>
            <div className="hidden sm:block w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-[#0066ff]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mb-0">
            독보적인 기술과
          </h2>
        </div>
      </div>

      <section id="tech-certification" className="pt-1 pb-4 bg-[#040406] relative overflow-hidden min-h-[460px] flex items-start justify-center">
        {/* Background Deep Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0C1222_0%,transparent_85%)] opacity-60 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col">
          <div className="flex justify-center pointer-events-none -mt-1">
            <h3 className="text-4xl md:text-6xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#0066ff] tracking-tight">
              특허 포트폴리오
            </h3>
          </div>

          <div className="relative w-full max-w-6xl mx-auto flex-1 min-h-[360px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-0 lg:aspect-[16/9] mt-6">
          {/* Interaction Hint */}
          <div
            className={`absolute top-0 right-0 z-[110] transition-all duration-700 pointer-events-none ${
              hasInteracted ? 'opacity-0 -translate-y-4 invisible' : 'opacity-100 translate-y-0 visible'
            }`}
          >
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-3xl animate-bounce-subtle">
              <div className="w-10 h-10 bg-[#0066ff] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white/60 font-bold text-[13px] leading-none">노드에 마우스를 올려 기술 내용을 확인하세요</span>
              </div>
            </div>
          </div>

          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {/* Neural Connections Layer */}
            {techNodes.map((node) =>
              node.connections.map((targetId) => {
                const target = techNodes.find((n) => n.id === targetId);
                if (!target || node.id > targetId) return null;

                const nodeX = isMobile ? node.mobileX : node.x;
                const nodeY = isMobile ? node.mobileY : node.y;
                const targetX = isMobile ? target.mobileX : target.x;
                const targetY = isMobile ? target.mobileY : target.y;
                const isPathActive = hoveredId === node.id || hoveredId === targetId;

                return (
                  <g key={`mesh-${node.id}-${targetId}`}>
                    <line
                      x1={nodeX}
                      y1={nodeY}
                      x2={targetX}
                      y2={targetY}
                      stroke={isPathActive ? 'rgba(0, 102, 255, 0.6)' : 'rgba(0, 102, 255, 0.04)'}
                      strokeWidth={isPathActive ? '0.3' : '0.06'}
                      className="transition-all duration-700"
                    />
                  </g>
                );
              })
            )}

            {/* Individual Node Satellite Edges */}
            {techNodes.map((node) => {
              const offsetX = (isMobile ? node.mobileX : node.x) - node.x;
              const offsetY = (isMobile ? node.mobileY : node.y) - node.y;
              const isActive = hoveredId === node.id;
              return node.satellites.map((sat, sIdx) => (
                <line
                  key={`line-${node.id}-${sIdx}`}
                  x1={node.x + offsetX}
                  y1={node.y + offsetY}
                  x2={sat.x + offsetX}
                  y2={sat.y + offsetY}
                  stroke={isActive ? '#0066ff' : 'rgba(0, 102, 255, 0.08)'}
                  strokeWidth={isActive ? '0.15' : '0.02'}
                  strokeOpacity={isActive ? 0.5 : 0.06}
                  className="transition-all duration-700 ease-out"
                />
              ));
            })}

            {/* Neural Satellites */}
            {techNodes.map((node) => {
              const offsetX = (isMobile ? node.mobileX : node.x) - node.x;
              const offsetY = (isMobile ? node.mobileY : node.y) - node.y;
              return node.satellites.map((sat, sIdx) => (
                <circle
                  key={`sat-${node.id}-${sIdx}`}
                  cx={sat.x + offsetX}
                  cy={sat.y + offsetY}
                  r={sat.size}
                  fill="white"
                  fillOpacity={hoveredId === node.id ? 0.75 : sat.opacity}
                  className="transition-opacity duration-700"
                />
              ));
            })}
          </svg>

          {/* Hub Nodes */}
          {techNodes.map((node) => {
            const isActive = hoveredId === node.id;
            const nodeX = isMobile ? node.mobileX : node.x;
            const isOnRightSide = nodeX > 50;
            const mobileCenterX = Math.min(70, Math.max(30, nodeX));

            return (
              <div
                key={node.id}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${
                  isActive ? 'z-[100]' : 'z-[50]'
                }`}
                style={{
                  left: `${isMobile ? node.mobileX : node.x}%`,
                  top: `${isMobile ? node.mobileY : node.y}%`
                }}
                onMouseEnter={() => handleMouseEnter(node.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative flex items-center justify-center">
                  {/* Glowing Aura */}
                  <div
                    className={`absolute inset-0 rounded-full blur-[50px] transition-all duration-1000 pointer-events-none ${
                      isActive ? 'bg-[#0066ff]/30 scale-[7]' : 'bg-transparent'
                    }`}
                  />

                  {/* Numbered Hub Circle */}
                  <div
                    className={`w-10 h-10 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-500 z-10 cursor-pointer ${
                      isActive
                        ? 'bg-[#0066ff] border-blue-300 scale-125 shadow-[0_0_80px_rgba(0,102,255,1)]'
                        : 'bg-blue-950/20 border-[#0066ff]/50 hover:border-blue-400 hover:scale-110 shadow-[0_0_25px_rgba(0,102,255,0.2)]'
                    }`}
                  >
                    <span
                      className={`text-[10px] md:text-lg font-black italic tracking-tighter transition-colors ${
                        isActive ? 'text-white' : 'text-blue-300'
                      }`}
                    >
                      0{node.id}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}

          {activeNode ? (
            <div
              className={`absolute w-[180px] md:w-[220px] max-w-[60vw] bg-white rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] transition-all duration-300 pointer-events-none z-[1000] border border-gray-100`}
              style={{
                left: activeCardLeft,
                top: activeCardTop,
                transform: activeCardTransform
              }}
            >
              <div className="flex items-center gap-3 px-4 py-6">
                <div className="h-20 w-20 overflow-hidden rounded-xl">
                  <img
                    src={activeNode.imageUrl}
                    alt={activeNode.title}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-950 font-black text-[11px] md:text-[12px] leading-snug break-keep">
                    {activeNode.title}
                  </h4>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        </div>

        <style>{`
        #tech-certification::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.01) 1px, transparent 0);
          background-size: 60px 60px;
          pointer-events: none;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
      </section>

      {/*
      Spline 버전 (복구용):
      import React, { useEffect, useRef, useState } from 'react';
      import TechNetwork from './TechNetwork';

      const AwardsSection: React.FC = () => {
        const [isActive, setIsActive] = useState(false);
        const iframeRef = useRef<HTMLIFrameElement | null>(null);

        useEffect(() => {
          const checkFocus = () => {
            if (document.activeElement === iframeRef.current && !isActive) {
              setTimeout(() => setIsActive(true), 2000);
            }
          };
          const intervalId = setInterval(checkFocus, 200);
          return () => clearInterval(intervalId);
        }, [isActive]);

        return (
          <section id="tech-certification" className="bg-white pt-16 md:pt-20">
            <div className="container mx-auto px-6 pt-12 pb-0 text-center">
              <div className="flex items-center justify-center gap-8 mb-4 opacity-70">
                <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#0066ff]" />
                <span className="text-gray-700 font-black text-xs tracking-[1.5em] uppercase">Core Expertise & IP</span>
                <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#0066ff]" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mt-3">독보적인 기술과</h2>
            </div>

            <div className="relative w-full min-h-[620px] md:min-h-[800px] overflow-hidden">
              <div className="absolute top-2 inset-x-0 z-20 flex justify-center pointer-events-none px-4">
                <h3 className="text-5xl md:text-6xl font-black italic tracking-tight leading-tight text-[#2d7bff] drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                  특허 포트폴리오
                </h3>
              </div>
              <div
                className="absolute inset-0 z-10 pointer-events-none opacity-90"
                style={{
                  backgroundImage:
                    'radial-gradient(2px 2px at 18px 22px, rgba(255,255,255,0.9), transparent 45%), radial-gradient(2.5px 2.5px at 92px 14px, rgba(255,255,255,0.8), transparent 55%), radial-gradient(2px 2px at 34px 96px, rgba(59,130,246,0.85), transparent 45%), radial-gradient(2px 2px at 118px 78px, rgba(255,255,255,0.75), transparent 45%)',
                  backgroundSize: '220px 220px, 240px 240px, 260px 260px, 280px 280px',
                  backgroundPosition: '0 0, 40px 30px, 80px 110px, 130px 70px'
                }}
                aria-hidden="true"
              />
              <iframe
                ref={iframeRef}
                src="https://my.spline.design/aidatamodelinteraction-a6BZOAmb8UsJ4StNJ68OQ1E8/"
                frameBorder="0"
                title="Tech Network 3D"
                className="absolute inset-0 w-[110%] h-[115%] -top-8 -left-[5%]"
                allowFullScreen
              />
              <TechNetwork isActive={isActive} />
            </div>
          </section>
        );
      };
      */}
    </>
  );
};

export default AwardsSection;
