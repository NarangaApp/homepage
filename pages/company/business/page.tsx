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
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            <span className="md:hidden">
              배터리 생태계의<br />
              <span className="text-[#0066ff]">새로운 질서</span>를<br />
              설계합니다
            </span>
            <span className="hidden md:inline">
              배터리 생태계의<br />
              <span className="text-[#0066ff]">새로운 질서</span>를 설계합니다
            </span>
          </h1>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            나랑가는 전기차 배터리 데이터를 중심으로
            수집–분석–예측–운영까지 연결하는<br />
            통합 AI 기술 기업입니다.
          </p>
        </div>
      </section>

      {/* 2. Enhanced Business Value Chain: Data Pipeline Logic */}
      <section className="pt-12 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-0 lg:hidden">
            <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter mt-3">The Intelligence Pipeline</h2>
            <p className="text-gray-400 text-lg font-bold mt-2">
              데이터가 가치로 변하는 나랑가만의<br />
              독자적 프로세스
            </p>
          </div>

          <div className="mt-0">
            <div className="hidden xl:block relative h-[440px]">
              <div className="absolute left-1/2 top-[100px] w-full -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">The Intelligence Pipeline</h2>
                <p className="text-gray-400 text-lg font-bold mt-2">데이터가 가치로 변하는 나랑가만의 독자적 프로세스</p>
              </div>
              <div className="absolute left-1/2 top-0 h-full w-[1320px] -translate-x-1/2">
                <div className="absolute left-0 top-[200px] w-[420px] h-[220px] border border-gray-200 bg-white px-6 pt-6">
                  <div className="grid grid-cols-[140px_1fr] gap-3 items-start">
                    <div>
                      <div className="w-14 h-14 bg-gray-50 rounded-none flex items-center justify-center mb-6 text-[#0066ff]">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] block mb-3 mt-2">Input Stage</span>
                      <h3 className="text-2xl font-black text-gray-900">Precision Data</h3>
                    </div>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed pt-6">
                      - 엣지 디바이스 기반 초정밀 배터리 데이터 수집<br />
                      - 전압, 전류, SOC, 온도, 운행 패턴 실시간 수집<br />
                      - 노이즈 제거 및 신뢰도 검증을<br />거친 고품질 원천 데이터 확보
                    </p>
                  </div>
                </div>

                <div className="absolute left-[444px] top-[200px] w-[420px] h-[220px] bg-[#eaf2ff] px-6 pt-6">
                  <div className="grid grid-cols-[140px_1fr] gap-3 items-start">
                    <div>
                  <div className="w-14 h-14 bg-white/80 rounded-none flex items-center justify-center mb-6 text-[#0066ff]">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.75 17L9 20l3-1 3 1-.75-3m-4.5-6h4.5m-4.5 0a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 019.75 4.5h4.5A2.25 2.25 0 0116.5 6.75v2.25A2.25 2.25 0 0114.25 11m-4.5 0h4.5" />
                    </svg>
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] block mb-2">Core Engine</span>
                    <h3 className="text-2xl font-black text-gray-900">Naranga AI Engine</h3>
                  </div>
                    </div>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed pt-6">
                      - 시계열 기반 배터리 상태 학습<br /><br />
                      - 이상 패턴 자동 인식 및 열화 진행 추적<br /><br />
                      - 물리 모델과 AI 결합 구조를 통한 예측 신뢰성 확보
                    </p>
                  </div>
                </div>

                <div className="absolute left-[888px] top-[200px] h-[220px] w-[420px] bg-[#0066ff] px-6 pt-6 text-white [clip-path:polygon(0_0,84%_0,100%_50%,84%_100%,0_100%)]">
                  <div className="grid grid-cols-[140px_1fr] gap-3 items-start">
                    <div className="shrink-0">
                      <div className="w-14 h-14 bg-white/10 rounded-none flex items-center justify-center mb-6 text-white">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-black text-blue-200/70 uppercase tracking-[0.3em] block mb-3 mt-2">Output Stage</span>
                      <h3 className="text-2xl font-black">Actionable<br />Insight</h3>
                    </div>
                    <p className="text-blue-100 text-sm font-medium leading-relaxed pt-6">
                      - 배터리 상태(SOH) 정밀 산출<br /><br />
                      - 고장 및 성능 저하 사전 경고<br /><br />
                      - 교체·정비·운영 의사결정에 바로<br />활용 가능한 인사이트 제공
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 xl:hidden">
              <div className="bg-gray-200 p-[1px] shadow-sm [clip-path:polygon(0_0,100%_0,100%_82%,50%_100%,0_82%)]">
                <div className="bg-white px-8 pt-16 pb-12 [clip-path:polygon(0_0,100%_0,100%_82%,50%_100%,0_82%)]">
                  <div className="max-w-[520px] mx-auto w-full">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#0066ff] shrink-0">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <div className="mb-4">
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] block mb-2">Input Stage</span>
                        <h3 className="text-2xl font-black text-gray-900">Precision Data</h3>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">
                      - 엣지 디바이스 기반 초정밀 배터리 데이터 수집<br />
                      - 전압, 전류, SOC, 온도, 운행 패턴 실시간 수집<br />
                      - 노이즈 제거 및 신뢰도 검증을<br />거친 고품질 원천 데이터 확보
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#eaf2ff] border border-blue-100 shadow-sm px-8 pt-16 pb-12 [clip-path:polygon(0_0,50%_18%,100%_0,100%_82%,50%_100%,0_82%)]">
                <div className="max-w-[520px] mx-auto w-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/80 rounded-2xl flex items-center justify-center text-[#0066ff] shrink-0">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.75 17L9 20l3-1 3 1-.75-3m-4.5-6h4.5m-4.5 0a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 019.75 4.5h4.5A2.25 2.25 0 0116.5 6.75v2.25A2.25 2.25 0 0114.25 11m-4.5 0h4.5" />
                      </svg>
                    </div>
                    <div className="mb-4">
                      <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] block mb-2">Core Engine</span>
                      <h3 className="text-2xl font-black text-gray-900">Naranga AI Engine</h3>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    - 시계열 기반 배터리 상태 학습<br />
                    - 이상 패턴 자동 인식 및 열화 진행 추적<br />
                    - 물리 모델과 AI 결합 구조를 통한 예측 신뢰성 확보
                  </p>
                </div>
              </div>

              <div className="bg-[#0066ff] text-white shadow-lg px-6 pt-16 pb-12 [clip-path:polygon(0_0,50%_18%,100%_0,100%_82%,50%_100%,0_82%)]">
                <div className="max-w-[520px] mx-auto w-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="mb-4">
                      <span className="text-[10px] font-black text-blue-200/70 uppercase tracking-[0.3em] block mb-2">Output Stage</span>
                      <h3 className="text-2xl font-black">Actionable Insight</h3>
                    </div>
                  </div>
                  <p className="text-blue-100 text-sm font-medium leading-relaxed">
                    - 배터리 상태(SOH) 정밀 산출<br />
                    - 고장 및 성능 저하 사전 경고<br />
                    - 교체·정비·운영 의사결정에 바로 활용 가능한 인사이트 제공
                  </p>
                </div>
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
                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl aspect-[4/3] border border-gray-100">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 md:top-8 md:left-8 bg-white/95 backdrop-blur-md px-3 py-2.5 md:px-6 md:py-4 rounded-2xl shadow-lg border border-gray-100 max-w-[60%] md:max-w-none">
                     <p className="text-[8px] md:text-[10px] text-[#0066ff] font-black tracking-[0.25em] uppercase mb-1">Division 0{index + 1}</p>
                     <p className="text-base md:text-xl font-black text-gray-900">{service.title}</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight whitespace-pre-line break-keep">
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
