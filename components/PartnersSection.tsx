
import React from 'react';
import { ROLLING_PARTNERS } from '../constants';

const PartnersSection: React.FC = () => {
  const marqueeLogos = [...ROLLING_PARTNERS, ...ROLLING_PARTNERS, ...ROLLING_PARTNERS, ...ROLLING_PARTNERS];

  return (
    <section className="py-32 bg-[#050508] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-widest">고객사 및 제휴사</h2>
          <div className="w-16 h-1 bg-[#0066ff] mx-auto mb-10" />
          <p className="text-[#94A3B8] max-w-2xl mx-auto font-medium text-lg">
            글로벌 선도 기업들과 함께 배터리 산업의 새로운 표준을 만들어가고 있습니다.
          </p>
        </div>

        {/* Infinite Rolling Logos */}
        <div className="relative py-16">
          <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#050508] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden group/marquee">
            <div className="flex animate-marquee-slow whitespace-nowrap items-center gap-24 md:gap-40">
              {marqueeLogos.map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`} 
                  className="flex-shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default px-6"
                >
                  <img 
                    src={partner.logoUrl} 
                    alt={partner.name} 
                    className="h-10 md:h-12 w-auto object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
