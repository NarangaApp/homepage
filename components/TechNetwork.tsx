import React, { useEffect, useMemo, useState } from 'react';
import { TechNode } from '../types';

interface TechNetworkProps {
  isActive: boolean;
}

const TechNetwork: React.FC<TechNetworkProps> = ({ isActive }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [showNodes, setShowNodes] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    if (isActive) {
      timer = window.setTimeout(() => setShowNodes(true), 1200);
    } else {
      setShowNodes(false);
      setHoveredId(null);
    }
    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [isActive]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', update);
      return () => mediaQuery.removeEventListener('change', update);
    }
    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  const techNodes: TechNode[] = useMemo(() => {
    const desktopNodes = [
      { id: 6, title: '기업부설연구소 인정', desc: 'R&D Center Certification', x: 50, y: 50, img: '/images/certificate-rnd-lab.png', conn: [1, 2, 3, 4, 5, 7, 8], status: 'OFFICIAL', badgeDetail: '인증서 보유' },
      { id: 1, title: '실시간 멀티 스캐너', desc: 'Real-time Multi Scanner', x: 28, y: 28, img: '/images/thumbs/app-proof-2025-05-thumb-v2.png', conn: [6, 5, 2], status: 'RUNNING', badgeDetail: '출원 2023-0182953' },
      { id: 2, title: '허위매물 조회 서비스', desc: 'Fake Listing Detection', x: 72, y: 28, img: '/images/thumbs/app-proof-2025-04-thumb-v2.png', conn: [6, 1, 3], status: 'ACTIVE', badgeDetail: '출원 2023-0171413' },
      { id: 3, title: '차량 상태 증강현실', desc: 'AR Condition Viewer', x: 80, y: 50, img: '/images/thumbs/app-proof-2025-03-thumb-v2.png', conn: [6, 2, 4], status: 'BETA', badgeDetail: '출원 2024-0090904' },
      { id: 4, title: 'OCV 배터리 진단', desc: 'OCV Battery Diagnostics', x: 72, y: 72, img: '/images/thumbs/app-proof-2025-02-thumb-v2.png', conn: [6, 3, 7], status: 'ANALYZING', badgeDetail: '출원 2025-0112372' },
      { id: 7, title: '중고차 가격산출 서버', desc: 'AI Price Estimation Server', x: 50, y: 76, img: '/images/patent-10-2023-0141562.png', conn: [6, 4, 8], status: 'REGISTERED', badgeDetail: '등록 제 10-0141562 호' },
      { id: 8, title: '가격산출 동작 알고리즘', desc: 'Pricing Algorithm Logic', x: 28, y: 72, img: '/images/thumbs/app-proof-2025-01-thumb-v2.png', conn: [6, 7, 5], status: 'PENDING', badgeDetail: '출원 2023-0141562' },
      { id: 5, title: '자동차 유전자 AI 지도', desc: 'Automotive DNA AI Map', x: 24, y: 50, img: '/images/patent-10-2024-0111369.png', conn: [6, 8, 1], status: 'REGISTERED', badgeDetail: '등록 제 10-0111369 호' }
    ];

    const mobileNodes = [
      { id: 1, title: '실시간 멀티 스캐너', desc: 'Real-time Multi Scanner', x: 14, y: 14, img: '/images/thumbs/app-proof-2025-05-thumb-v2.png', conn: [6, 5, 2], status: 'RUNNING', badgeDetail: '출원 2023-0182953' },
      { id: 2, title: '허위매물 조회 서비스', desc: 'Fake Listing Detection', x: 86, y: 22, img: '/images/thumbs/app-proof-2025-04-thumb-v2.png', conn: [6, 1, 3], status: 'ACTIVE', badgeDetail: '출원 2023-0171413' },
      { id: 5, title: '자동차 유전자 AI 지도', desc: 'Automotive DNA AI Map', x: 12, y: 44, img: '/images/patent-10-2024-0111369.png', conn: [6, 8, 1], status: 'REGISTERED', badgeDetail: '등록 제 10-0111369 호' },
      { id: 3, title: '차량 상태 증강현실', desc: 'AR Condition Viewer', x: 88, y: 50, img: '/images/thumbs/app-proof-2025-03-thumb-v2.png', conn: [6, 2, 4], status: 'BETA', badgeDetail: '출원 2024-0090904' },
      { id: 6, title: '기업부설연구소 인정', desc: 'R&D Center Certification', x: 50, y: 62, img: '/images/certificate-rnd-lab.png', conn: [1, 2, 3, 4, 5, 7, 8], status: 'OFFICIAL', badgeDetail: '인증서 보유' },
      { id: 8, title: '가격산출 동작 알고리즘', desc: 'Pricing Algorithm Logic', x: 12, y: 74, img: '/images/thumbs/app-proof-2025-01-thumb-v2.png', conn: [6, 7, 5], status: 'PENDING', badgeDetail: '출원 2023-0141562' },
      { id: 4, title: 'OCV 배터리 진단', desc: 'OCV Battery Diagnostics', x: 88, y: 82, img: '/images/thumbs/app-proof-2025-02-thumb-v2.png', conn: [6, 3, 7], status: 'ANALYZING', badgeDetail: '출원 2025-0112372' },
      { id: 7, title: '중고차 가격산출 서버', desc: 'AI Price Estimation Server', x: 50, y: 94, img: '/images/patent-10-2023-0141562.png', conn: [6, 4, 8], status: 'REGISTERED', badgeDetail: '등록 제 10-0141562 호' }
    ];

    return (isMobile ? mobileNodes : desktopNodes).map(node => ({
      ...node,
      imageUrl: node.img,
      satellites: [],
      connections: node.conn
    }));
  }, [isMobile]);

  return (
    <div className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-700 ${showNodes ? 'opacity-100' : 'opacity-0'}`}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#0066ff" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {hoveredId && (
          <g className="pointer-events-none">
            {techNodes.flatMap(node => {
              const targetIds = node.id === 6 ? node.connections! : node.connections!.slice(0, 3);
              return targetIds.map(targetId => {
                const target = techNodes.find(t => t.id === targetId);
                if (!target) return null;
                if (node.id > targetId && node.id !== 6) return null;
                const isHoverLine = hoveredId === node.id || hoveredId === targetId;
                if (!isHoverLine) return null;
                return (
                  <line
                    key={`hover-${node.id}-${targetId}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    stroke="rgba(102,163,255,0.35)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="opacity-70 drop-shadow-[0_0_8px_rgba(102,163,255,0.25)]"
                  />
                );
              });
            })}
          </g>
        )}
      </svg>

      {techNodes.map((node, i) => {
        const isAbsCenter = node.x === 50 && node.y === 50;
        const isBottomCenter = node.x === 50 && node.y > 80;
        const isRight = node.x > 60;

        const delay = isAbsCenter ? 0 : i * 100 + 300;

        let slideTransform = '';
        let textContainerClass = '';
        let cardAlignmentClass = '';
        let titleAlignClass = '';
        let dotSizeClass = 'w-3 h-3 md:w-4 md:h-4';

        if (isAbsCenter) {
          slideTransform = 'scale(0.8)';
          textContainerClass = 'top-full mt-6 left-1/2 -translate-x-1/2 items-center';
          cardAlignmentClass = 'items-center';
          titleAlignClass = 'text-center';
          dotSizeClass = 'w-5 h-5 md:w-6 md:h-6';
        } else if (isBottomCenter) {
          slideTransform = 'translate(0, 30px)';
          textContainerClass = 'bottom-full mb-4 left-1/2 -translate-x-1/2 items-center';
          cardAlignmentClass = 'items-center';
          titleAlignClass = 'text-center';
        } else if (isRight) {
          slideTransform = 'translate(30px, 0)';
          textContainerClass = 'right-full mr-5 items-end';
          cardAlignmentClass = 'items-end ml-auto';
          titleAlignClass = 'text-right';
        } else {
          slideTransform = 'translate(-30px, 0)';
          textContainerClass = 'left-full ml-5 items-start';
          cardAlignmentClass = 'items-start mr-auto';
          titleAlignClass = 'text-left';
        }

        return (
          <div
            key={node.id}
            className="absolute w-0 h-0 flex items-center justify-center pointer-events-auto"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              zIndex: hoveredId === node.id ? 100 : 10,
              pointerEvents: showNodes ? 'auto' : 'none'
            }}
          >
            <div
              className="relative flex items-center z-20"
              style={{
                opacity: showNodes ? 1 : 0,
                transform: showNodes ? (isAbsCenter ? 'scale(1)' : 'translate(0,0)') : slideTransform,
                transition: `opacity 0.8s ease ${delay}ms, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`
              }}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`relative z-0 cursor-pointer group ${dotSizeClass}`}>
                <div
                  className={`absolute inset-0 bg-[#0066ff] rounded-full shadow-[0_0_15px_#0066ff] transition-all duration-300 ${
                    hoveredId === node.id ? 'scale-125 bg-white' : 'scale-100'
                  }`}
                />
                <div className="absolute -inset-3 border border-[#0066ff]/40 rounded-full animate-[spin_4s_linear_infinite]" />
                {isAbsCenter && <div className="absolute -inset-6 border border-[#0066ff]/20 rounded-full animate-ping" />}
              </div>

              <div className={`absolute flex flex-col w-64 pointer-events-none z-40 ${textContainerClass}`}>
                <div
                  className={`transition-all duration-300 ${
                    hoveredId === node.id ? 'opacity-100 translate-y-0' : isAbsCenter ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  <h3
                    className={`text-white font-bold text-sm md:text-base tracking-tight drop-shadow-lg ${titleAlignClass} ${
                      isAbsCenter ? 'text-[#0066ff] text-lg' : ''
                    }`}
                  >
                    {node.title}
                  </h3>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    hoveredId === node.id ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div
                  className={`bg-black/90 backdrop-blur-md border border-[#0066ff]/30 p-3 rounded-lg shadow-[0_0_20px_rgba(0,102,255,0.15)] flex flex-col gap-2 ${cardAlignmentClass} relative z-[120]`}
                >
                    {node.imageUrl && (
                      <div className="w-28 h-18 md:w-32 md:h-20 overflow-hidden rounded-md border border-white/10 shadow-inner bg-black/40 flex items-center justify-center">
                        <img src={node.imageUrl} alt={node.title} className="w-full h-full object-contain" />
                      </div>
                    )}
                    {node.badgeDetail && (
                      <p className={`text-[#9cc5ff] text-[9px] font-bold tracking-tight uppercase ${titleAlignClass} mb-1`}>
                        {node.badgeDetail}
                      </p>
                    )}
                    <p className={`text-gray-300 text-xs leading-relaxed font-medium ${titleAlignClass}`}>{node.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechNetwork;
