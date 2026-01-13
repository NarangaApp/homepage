
import React, { useState } from 'react';
import NaverMap from '../../components/NaverMap';

const LOCATIONS_DETAIL = {
  hq: {
    id: 'hq',
    title: 'NARANGA TOWER (본사)',
    type: 'Business & Management',
    address: '서울특별시 강남구 테헤란로 123 나랑가타워 45층',
    contact: '02-123-4567',
    email: 'biz@naranga.com',
    bus: '2호선 강남역 12번 출구 (도보 3분)',
    parking: '나랑가타워 지하 주차장 이용 (2시간 무료 지원)',
    coords: { lat: 37.4979, lng: 127.0276 },
    tag: 'Strategic Hub'
  },
  lab: {
    id: 'lab',
    title: 'NARANGA R&D CAMPUS (연구소)',
    type: 'Research & Innovation',
    address: '울산광역시 남구 테크노산업로 55번길 10 207호',
    contact: '031-987-6543',
    email: 'tech@naranga.com',
    bus: '산학융합지구캠퍼스 하차 후 도보 5분 ',
    parking: '캠퍼스 내 지상 주차장 이용 가능',
    coords: { lat: 35.512615049061, lng: 129.296740585159 },
    tag: 'Innovation Hub'
  }
};

const LocationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hq' | 'lab'>('hq');
  const loc = LOCATIONS_DETAIL[activeTab];

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-[#050507]">
        {/* Immersive Spline Background */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://my.spline.design/3dcitynavigation-4przltjR4sbPyI10WjO9WBVv/"
            title="Naranga 3D City"
            className="absolute inset-0 w-full h-full"
            style={{ transform: 'scale(1.25)', transformOrigin: 'center' }}
            frameBorder="0"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/82 via-[#050507]/65 to-[#050507]/88" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-blue-400 font-black tracking-widest uppercase text-[10px] mb-8 backdrop-blur-sm">
            <span className="w-1 h-1 bg-blue-400 rounded-full animate-ping" />
            Global Location Hub
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-16 tracking-tighter leading-tight">
            어디서든 나랑가를 <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">만나보세요</span>
          </h1>

          {/* New High-Visibility Tab Switcher */}
          <div className="flex justify-center">
            <div className="relative p-2 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl flex items-center gap-2">
              {/* Sliding Background Indicator */}
              <div 
                className="absolute top-2 bottom-2 bg-white rounded-[2rem] shadow-xl transition-all duration-500 ease-out z-0"
                style={{ 
                  left: activeTab === 'hq' ? '8px' : 'calc(50% + 4px)',
                  width: 'calc(50% - 12px)'
                }}
              />

              {/* HQ Tab Button */}
              <button 
                onClick={() => setActiveTab('hq')}
                className={`relative z-10 flex items-center justify-center gap-3 px-12 py-5 rounded-[2rem] transition-all duration-300 ${
                  activeTab === 'hq' ? 'text-blue-950 font-black' : 'text-white/40 font-bold hover:text-white/70'
                }`}
              >
                <svg className={`w-5 h-5 transition-colors ${activeTab === 'hq' ? 'text-blue-600' : 'text-white/30'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-base tracking-tight">본사</span>
              </button>

              {/* Lab Tab Button */}
              <button 
                onClick={() => setActiveTab('lab')}
                className={`relative z-10 flex items-center justify-center gap-3 px-12 py-5 rounded-[2rem] transition-all duration-300 ${
                  activeTab === 'lab' ? 'text-blue-950 font-black' : 'text-white/40 font-bold hover:text-white/70'
                }`}
              >
                <svg className={`w-5 h-5 transition-colors ${activeTab === 'lab' ? 'text-blue-600' : 'text-white/30'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.282a2 2 0 01-1.806 0l-.628-.282A6 6 0 005.24 14.4l-2.387.477a2 2 0 00-1.022.547m18.596 0l-3.328 3.328a2 2 0 01-2.828 0l-3-3a2 2 0 00-2.828 0l-3 3a2 2 0 01-2.828 0l-3.328-3.328" />
                </svg>
                <span className="text-base tracking-tight">연구소</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Content Section with Slide Animation */}
      <section className="container mx-auto px-6 py-24 relative overflow-hidden">
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start transition-all duration-700 transform"
          key={activeTab}
          style={{ animation: 'slideFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        >
          {/* Info Side */}
          <div className="space-y-16">
            <div>
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-blue-50 rounded-lg mb-6">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span className="text-blue-600 font-black tracking-[0.2em] uppercase text-[11px]">{loc.tag}</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{loc.title}</h2>
              <p className="text-gray-500 text-xl font-medium leading-relaxed max-w-xl">
                {activeTab === 'hq' 
                  ? '나랑가의 중추적인 비즈니스 전략과 글로벌 파트너십이 이루어지는 공간입니다. 테헤란로의 중심에서 에너지의 미래를 연결합니다.' 
                  : '차세대 배터리 진단 알고리즘과 AI 하드웨어 혁신이 시작되는 곳입니다. 최첨단 연구 설비와 최고의 엔지니어들이 함께합니다.'
                }
              </p>
            </div>

            {/* Icon Info Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex items-start gap-8 group hover:bg-white hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2}/></svg>
                </div>
                <div>
                  <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">Office Location</h4>
                  <p className="text-gray-900 font-bold text-2xl leading-snug">{loc.address}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex items-start gap-8 group hover:bg-white hover:shadow-2xl hover:shadow-blue-100/50 transition-all">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth={2.5}/></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Support</h4>
                    <p className="text-gray-900 font-black text-lg">{loc.contact}</p>
                  </div>
                </div>
                <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex items-start gap-8 group hover:bg-white hover:shadow-2xl hover:shadow-blue-100/50 transition-all">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth={2.5}/></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Official Email</h4>
                    <p className="text-gray-900 font-black text-lg">{loc.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transport Info */}
            <div className="pt-12 border-t border-gray-100">
               <h4 className="text-2xl font-black text-gray-900 mb-8">오시는 방법 안내</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="flex gap-5">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                      <img
                        src="/images/bus_icon.png"
                        alt="버스 아이콘"
                        className="w-6 h-6 object-contain"
                        style={{ filter: 'brightness(0) saturate(100%) invert(34%) sepia(81%) saturate(3294%) hue-rotate(206deg) brightness(101%) contrast(102%)' }}
                      />
                    </div>
                    <div className="text-gray-600 font-medium leading-relaxed">
                      <p className="text-gray-900 font-bold mb-1">대중교통 이용 시</p>
                      {loc.bus}
                    </div>
                 </div>
                 <div className="flex gap-5">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                      <img
                        src="/images/car_icon.png"
                        alt="자동차 아이콘"
                        className="w-6 h-6 object-contain"
                        style={{ filter: 'brightness(0) saturate(100%) invert(34%) sepia(81%) saturate(3294%) hue-rotate(206deg) brightness(101%) contrast(102%)' }}
                      />
                    </div>
                    <div className="text-gray-600 font-medium leading-relaxed">
                      <p className="text-gray-900 font-bold mb-1">자차 이용 시</p>
                      {loc.parking}
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Map Image Side - More Visual Weight */}
          <div className="relative group lg:sticky lg:top-32 w-full">
            <div className="relative w-full h-[500px] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-gray-50 bg-slate-100 group">
              <NaverMap 
                lat={loc.coords.lat} 
                lng={loc.coords.lng} 
                zoom={15}
                className="relative w-full h-full"
              />
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @keyframes slideFadeIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default LocationPage;
