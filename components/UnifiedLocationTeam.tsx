
import React, { useState } from 'react';
import NaverMap from './NaverMap';
import { TEAM_MEMBERS } from '../constants';

const LOCATIONS = {
  hq: {
    name: 'NARANGA TOWER (HQ)',
    type: 'Headquarter Office',
    address: '서울특별시 강남구 테헤란로 123 나랑가타워 45층',
    detail: '2호선 강남역 12번 출구 도보 3분',
    contact: '02-123-4567',
    email: 'business@naranga.com',
    mapUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200',
    coords: { lat: 37.4979, lng: 127.0276 },
    tag: 'Strategic Hub'
  },
  lab: {
    name: 'NARANGA R&D CAMPUS',
    type: 'Research & Development',
    address: '울산광역시 남구 테크노산업로 55번길 10 207호',
    detail: '산학융합지구캠퍼스 하차 후 도보 5분',
    contact: '031-987-6543',
    email: 'support@naranga.com',
    mapUrl: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&q=80&w=1200',
    coords: { lat: 35.512615049061, lng: 129.296740585159 },
    tag: 'Innovation Hub'
  }
};

const UnifiedLocationTeam: React.FC = () => {
  const [activeLoc, setActiveLoc] = useState<'hq' | 'lab'>('hq');
  const loc = LOCATIONS[activeLoc];

  return (
    <section id="location-team" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24 text-center lg:text-left">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-lg mb-4">
            <span className="text-blue-600 font-black tracking-[0.2em] uppercase text-[10px] block">Location & Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">오시는 길 & 팀원</h2>
        </div>

        {/* 6:6 Equal Grid System - lg:items-center for overall vertical balance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32 items-center">
          
          {/* LEFT: LOCATION (50%) */}
          <div className="flex flex-col gap-10">
            {/* 1. Interactive Tabs */}
            <div className="relative p-1.5 bg-gray-100 rounded-[2rem] w-fit flex items-center shadow-inner border border-gray-200/50 mx-auto lg:mx-0">
              <div 
                className="absolute top-1.5 bottom-1.5 bg-white rounded-[1.6rem] shadow-xl shadow-blue-200/40 transition-all duration-500 ease-out z-0"
                style={{ 
                  left: activeLoc === 'hq' ? '6px' : 'calc(50% + 2px)',
                  width: 'calc(50% - 8px)'
                }}
              />
              <button 
                onClick={() => setActiveLoc('hq')}
                className={`relative z-10 flex items-center gap-2 px-10 py-4 rounded-[1.6rem] text-sm font-black transition-all duration-300 ${
                  activeLoc === 'hq' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-500'
                }`}
              >
                본사
              </button>
              <button 
                onClick={() => setActiveLoc('lab')}
                className={`relative z-10 flex items-center gap-2 px-10 py-4 rounded-[1.6rem] text-sm font-black transition-all duration-300 ${
                  activeLoc === 'lab' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-500'
                }`}
              >
                연구소
              </button>
            </div>

            {/* 2. Address Detail */}
            <div key={`${activeLoc}-info`} className="animate-fade-in space-y-6">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black rounded-lg uppercase tracking-widest">{loc.tag}</span>
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">{loc.name}</h3>
              </div>
              <div className="space-y-4">
                <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                  <p className="text-gray-900 font-bold text-xl mb-2">{loc.address}</p>
                  <p className="text-sm text-gray-400 font-medium">{loc.detail}</p>
                </div>
                <div className="p-6 rounded-[2rem] bg-gray-50/50 border border-gray-100 flex justify-between items-center px-10">
                  <span className="text-blue-600 font-black text-[11px] uppercase tracking-widest">Contact Info</span>
                  <p className="text-gray-900 font-bold text-sm">{loc.contact} / {loc.email}</p>
                </div>
              </div>
            </div>

            {/* 3. Map Image */}
            <div 
              key={`${activeLoc}-map`}
              className="relative h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-gray-50 bg-slate-100 group animate-fade-in"
            >
              <NaverMap 
                lat={loc.coords.lat} 
                lng={loc.coords.lng} 
                zoom={15} 
                className="relative w-full h-full" 
              />
            </div>
          </div>

          {/* RIGHT: TEAM & OFFICE (50%) - Center content to match left visual height */}
          <div className="flex flex-col gap-10">
            {/* 1. Office View - Adjusted height for better vertical harmony */}
            <div className="relative h-[300px] rounded-[4rem] overflow-hidden shadow-2xl group border-4 border-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="Naranga Office View" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-black text-2xl mb-1 italic tracking-tight">NARANGA WORKSPACE</h4>
                  <p className="text-white/60 text-sm font-medium">에너지 혁신이 탄생하는 나랑가의 본사 공간입니다.</p>
                </div>
              </div>
            </div>

            {/* 2. Meet Our Leadership (Compact Vertical Stack) */}
            <div className="space-y-6 flex flex-col items-center lg:items-start w-full">
              <div className="flex items-center gap-3 ml-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <h4 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.25em]">Meet Our Leadership</h4>
              </div>
              
              {/* Profile Containers - Spacing and font sizes adjusted for balance */}
              <div className="flex flex-row justify-between w-full max-w-lg lg:max-w-none px-4 md:px-0">
                {TEAM_MEMBERS.map((member, idx) => (
                  <div key={`${member.name}-${idx}`} className="flex flex-col items-center gap-3.5 group">
                    
                    {/* Circle Image Wrapper - Visual center focus */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-blue-100/50 transition-all duration-500 group-hover:scale-105 group-hover:border-blue-600 group-hover:shadow-blue-200">
                      <img 
                        src={member.imageUrl} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                        alt={member.name} 
                      />
                    </div>

                    {/* Team Member Info - Refined typography to reduce vertical heaviness */}
                    <div className="text-center">
                      <h5 className="text-base font-black text-gray-900 leading-none mb-1">{member.name}</h5>
                      <p className="text-[8px] md:text-[9px] font-black text-blue-500 uppercase tracking-[0.15em] whitespace-nowrap">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slogan Text - Integrated closer to maintain central alignment */}
              <div className="pt-6 w-full border-t border-gray-100 text-center lg:text-left">
                <p className="text-gray-400 font-bold italic text-[13px] leading-relaxed">
                  "우리의 리더십은 기술을 통해 인류의 가능성을 확장하는 데 전념합니다."
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default UnifiedLocationTeam;
