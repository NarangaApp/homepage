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
            나랑가는 전기차 배터리 데이터를 중심으로<br />
            수집–분석–예측–운영까지 연결하는 통합 AI 기술 기업입니다.
          </p>
        </div>
      </section>

      {/* 2. Enhanced Business Value Chain: Data Pipeline Logic */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">The Intelligence Pipeline</h2>
            <p className="text-gray-400 text-lg font-bold mt-2">데이터가 가치로 변하는 나랑가만의 독자적 프로세스</p>
          </div>

            <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_140px_minmax(0,1fr)_140px_minmax(0,1fr)] lg:items-stretch lg:gap-6">
            
            {/* Step 1: Data Acquisition */}
            <div className="w-full max-w-sm mx-auto">
              <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-100/50 relative group hover:border-blue-200 transition-all text-center h-full">
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
                  - 엣지 디바이스 기반 초정밀 배터리 데이터 수집<br />
                  - 전압, 전류, SOC, 온도, 운행 패턴 실시간 수집<br />
                  - 노이즈 제거 및 신뢰도 검증을 거친<br />고품질 원천 데이터 확보
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden lg:block" aria-hidden="true" />

            {/* Center: Naranga AI Engine */}
            <div className="w-full max-w-sm mx-auto">
              <div className="bg-[#eaf2ff] p-10 rounded-[3rem] border border-blue-100 shadow-xl shadow-blue-100/40 relative group hover:border-blue-200 transition-all text-center h-full">
                <div className="w-16 h-16 bg-white/70 rounded-2xl flex items-center justify-center mx-auto mb-8 text-[#0066ff] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#0066ff]/5 animate-ping opacity-20" />
                  <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.75 17L9 20l3-1 3 1-.75-3m-4.5-6h4.5m-4.5 0a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 019.75 4.5h4.5A2.25 2.25 0 0116.5 6.75v2.25A2.25 2.25 0 0114.25 11m-4.5 0h4.5" />
                  </svg>
                </div>
                <div className="mb-4">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] block mb-2">Core Engine</span>
                  <h3 className="text-2xl font-black text-gray-900">Naranga AI Engine</h3>
                </div>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  - 시계열 기반 배터리 상태 학습<br />
                  - 이상 패턴 자동 인식 및 열화 진행 추적<br />
                  - 물리 모델과 AI 결합 구조를 통한 예측 신뢰성 확보
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden lg:block" aria-hidden="true" />

            {/* Step 2: Intelligent Insight */}
            <div className="w-full max-w-sm mx-auto">
              <div className="bg-[#0066ff] p-10 rounded-[3rem] shadow-2xl shadow-blue-200 relative group text-center overflow-hidden h-full">
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
                  - 배터리 상태(SOH) 정밀 산출<br />
                  - 고장 및 성능 저하 사전 경고<br />
                  - 교체·정비·운영 의사결정에 바로 활용 가능한<br />인사이트 제공
                </p>
              </div>
            </div>

          </div>
          <div className="relative hidden lg:grid lg:grid-cols-[minmax(0,1fr)_140px_minmax(0,1fr)_140px_minmax(0,1fr)] lg:gap-6 mt-10 items-center">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[6px] rounded-full z-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-500" />
            <div className="flex justify-center relative">
              <span className="absolute left-1/2 -top-10 h-10 w-px -translate-x-1/2 bg-blue-200" />
              <span className="w-3 h-3 rounded-full bg-blue-300 relative z-10" />
            </div>
            <div />
            <div className="flex justify-center relative">
              <span className="absolute left-1/2 -top-10 h-10 w-px -translate-x-1/2 bg-blue-200" />
              <span className="w-3 h-3 rounded-full bg-blue-300 relative z-10" />
            </div>
            <div />
            <div className="flex justify-center relative">
              <span className="absolute left-1/2 -top-10 h-10 w-px -translate-x-1/2 bg-blue-200" />
              <span className="w-3 h-3 rounded-full bg-blue-300 relative z-10" />
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
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight whitespace-pre-line">
                  {service.description}
                </h2>
                <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-10 whitespace-pre-line">
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
             <p className="text-slate-400 font-medium">나랑가는 단순 진단을 넘어, 전기차와 에너지 인프라를 연결하는 지능형 데이터 허브를 지향합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { year: '2024', goal: 'Predictive SOH Engine v3.0', status: '배터리 상태·수명 예측 엔진 고도화 완료' },
              { year: '2025', goal: 'Global Cloud BaaS Platform', status: '다차량 운영 법인 대상 글로벌 클라우드 플랫폼 확장' },
              { year: '2026', goal: 'Edge-AI Distributed Network', status: '엣지 단 분석과 분산 AI 구조 본격 적용' },
              { year: '2027', goal: 'Self-Healing Battery Architecture.', status: '자가 판단·자율 대응 배터리 운영 구조 비전' }
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
