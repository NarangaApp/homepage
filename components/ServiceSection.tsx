
import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../constants';

const ServiceSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [showDiagram, setShowDiagram] = useState(false);
  const diagramRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = diagramRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowDiagram(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="business-areas" className="py-16 bg-white">
      <div className="container mx-auto px-6 mb-10">
        <div className="text-center">
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs">Our Core Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
            혁신을 지탱하는 세 가지 축
          </h2>
        </div>
      </div>

      <div className="h-[700px] w-full flex flex-col lg:flex-row gap-0 group/container">
        {SERVICES.map((service, index) => {
          const isHovered = hoveredId === service.id;
          const isAnythingHovered = hoveredId !== null;

          return (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative h-full transition-all duration-700 ease-in-out cursor-pointer overflow-hidden border-r border-white/10 last:border-0 ${
                isHovered 
                  ? 'flex-[8]' 
                  : isAnythingHovered 
                    ? 'flex-[1]' 
                    : 'flex-[1]'
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 scale-105"
                  style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                />
                <div className={`absolute inset-0 transition-opacity duration-700 ${
                  isHovered ? 'bg-blue-900/40' : 'bg-gray-900/70'
                }`} />
              </div>

              {/* Shrunken State: 명확한 서비스 제목 표시 */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 pointer-events-none px-4 ${
                isHovered ? 'opacity-0 scale-90 invisible' : 'opacity-100 scale-100 visible'
              }`}>
                <div className="flex flex-col items-center gap-6 text-center">
                  <span className="text-white font-black text-2xl italic opacity-30">0{index + 1}</span>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-[0.1em] whitespace-nowrap">
                      {service.title}
                    </h3>
                    <div className="w-8 h-1 bg-blue-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Expanded State: Full Content */}
              <div className={`absolute inset-0 flex flex-col justify-end p-12 md:p-20 transition-all duration-700 delay-100 ${
                isHovered ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
              }`}>
                <div className="w-full max-w-none">
                  <span className="inline-block px-4 py-1 bg-blue-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-6">
                    Division 0{index + 1}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl">
                    {service.description}
                  </p>
                  
                  <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(260px,1fr))] gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 min-h-[44px]">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        <span className="text-white text-[11px] font-bold leading-tight whitespace-normal">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-12 px-10 py-5 bg-white text-blue-900 font-black rounded-2xl hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3 group/btn">
                    상세 솔루션 보기
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Technology Logic Diagram Embed */}
      <div className="mt-28 md:mt-40 pb-24 md:pb-28">
        <div
          ref={diagramRef}
          className="relative w-screen aspect-[5/4] md:aspect-[16/7] overflow-hidden bg-black left-1/2 -translate-x-1/2"
        >
          {showDiagram ? (
            <iframe
              src='https://my.spline.design/webdiagram-tJFxlIXusSEzS2Kqn4WrA9oy/'
              title="Naranga Tech Logic"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
