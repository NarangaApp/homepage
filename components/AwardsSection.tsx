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
      {/* Header 영역을 별도 화이트 블록에 배치 */}
      <div className="container mx-auto px-6 pt-12 pb-0 text-center">
        <div className="flex items-center justify-center gap-8 mb-4 opacity-70">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#0066ff]" />
          <span className="text-gray-700 font-black text-xs tracking-[1.5em] uppercase">Core Expertise & IP</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#0066ff]" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mt-3">
          독보적인 기술과
        </h2>
      </div>

      {/* Spline 단독 배경 */}
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
        {/* 노드 오버레이: 클릭/포커스 시 활성화 */}
        <TechNetwork isActive={isActive} />
      </div>
    </section>
  );
};

export default AwardsSection;
