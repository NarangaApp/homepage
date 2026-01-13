import React from 'react';
import { SERVICES } from '../../../constants';

const BusinessRoutePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Page Header Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8">
            <span className="text-[#0066ff] font-black tracking-widest uppercase text-xs">Strategic Business Units</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            배터리 생태계의<br />
            <span className="text-[#0066ff]">새로운 질서를 설계합니다</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            데이터 수집부터 지능형 분석까지, 나랑가는 하드웨어와 소프트웨어를 아우르는 통합 솔루션으로 에너지의 가치를 재정의합니다.
          </p>
        </div>
      </section>

      {/* 2. Enhanced Business Value Chain: Data Pipeline Logic */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Decorative Line (Desktop) */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -translate-y-1/2 hidden lg:block" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">The Intelligence Pipeline</h2>
            <p className="text-gray-400 text-sm font-bold mt-2">데이터가 가치로 변하는 나랑가만의 독자적 프로세스</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
            
            {/* Step 1: Data Acquisition */}
            <div className="w-full lg:w-1/3 max-w-sm">
              <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-100/50 relative group hover:border-blue-200 transition-all text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-[#0066ff] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#0066ff]/5 animate-ping opacity-20" />
                  <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="mb-4">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] block mb-2">Input Stage</span>
                  <h3 className="text-2xl font-black text-gray-900">Precision Data</h3>
                </div>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  엣지 디바이스를 통한 초정밀 배터리<br />데이터의 실시간 수집 및 전송
                </p>
              </div>
            </div>

            {/* Central Connector: AI Engine Pulse */}
            <div className="w-full lg:w-auto flex flex-col items-center justify-center py-4 lg:px-8">
              <div className="w-px h-12 lg:w-32 lg:h-px bg-gradient-to-b lg:bg-gradient-to-r from-gray-200 via-[#0066ff] to-[#0066ff] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full animate-pipeline-flow bg-white/50" />
              </div>
              <div className="my-4 px-5 py-2 bg-[#0066ff] rounded-full shadow-lg shadow-blue-200">
                <span className="text-white text-[10px] font-black uppercase tracking-widest">Naranga AI Engine</span>
              </div>
              <div className="w-px h-12 lg:w-32 lg:h-px bg-gradient-to-b lg:bg-gradient-to-r from-[#0066ff] via-[#0066ff] to-blue-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full animate-pipeline-flow bg-white/50" />
              </div>
            </div>

            {/* Step 2: Intelligent Insight */}
            <div className="w-full lg:w-1/3 max-w-sm">
              <div className="bg-[#0066ff] p-10 rounded-[3rem] shadow-2xl shadow-blue-200 relative group text-center overflow-hidden">
                {/* Decorative Pattern inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10" />
                
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 text-white relative">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="mb-4">
                  <span className="text-[10px] font-black text-blue-200/60 uppercase tracking-[0.3em] block mb-2">Output Stage</span>
                  <h3 className="text-2xl font-black text-white">Actionable Insight</h3>
                </div>
                <p className="text-blue-100 text-sm font-medium leading-relaxed">
                  자체 배터리 AI 엔진을 통해 도출된<br />정밀한 수명 예측 및 사고 예방 가치
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Deep Dive Sections (Alternating) */}
      {SERVICES.map((service, index) => (
        <section key={service.id} className={`py-32 ${index % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-16 md:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-[3rem] overflow-hidden shadow-xl aspect-[4/3] border border-gray-100">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-gray-100">
                     <p className="text-[10px] text-[#0066ff] font-black tracking-widest uppercase mb-1">Division 0{index + 1}</p>
                     <p className="text-xl font-black text-gray-900">{service.title}</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                  {service.description}
                </h2>
                <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-10">
                  {service.longDescription}
                </p>
                
                <div className="space-y-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4 group/item">
                       <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0066ff]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                       </div>
                       <span className="text-gray-700 font-bold text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-12 px-8 py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-[#0066ff] transition-all flex items-center gap-3">
                  기술 백서 다운로드
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 4. Technology Roadmap Section */}
      <section className="py-32 bg-[#0f172a] overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
             <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Future Technology Roadmap</h3>
             <p className="text-slate-400 font-medium">나랑가는 단순한 분석을 넘어, 자율 주행과 스마트 시티의 에너지 허브를 꿈꿉니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { year: '2024', goal: 'Predictive SOH Engine v3.0', status: 'Completed' },
              { year: '2025', goal: 'Global Cloud BaaS Platform', status: 'In Progress' },
              { year: '2026', goal: 'Edge-AI Distributed Network', status: 'Planned' },
              { year: '2027', goal: 'Self-Healing Battery Arch.', status: 'Vision' }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 transition-all">
                 <div className="text-blue-400 font-black text-2xl mb-4">{step.year}</div>
                 <h4 className="text-white font-bold text-lg mb-2">{step.goal}</h4>
                 <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{step.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pipeline-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-pipeline-flow {
          animation: pipeline-flow 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BusinessRoutePage;
