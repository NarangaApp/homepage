
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="company" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-blue-50 rounded-lg mb-6">
              <span className="text-[#0066ff] font-black tracking-[0.2em] uppercase text-[10px] block">Next-Gen Battery Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050508] mb-10 leading-tight">
              전기차 배터리의 수명과<br />
              안전을 책임지는 지능형 AI
            </h2>
            <div className="space-y-8 text-gray-500 leading-relaxed text-lg font-medium">
              <p>
                나랑가는 전기차(EV) 배터리의 <span className="text-[#0066ff] font-bold">SOH(State of Health) 정밀 예측 및 이상치 탐색</span>을 위한 독자적인 AI 모델을 보유한 기술 선도 기업입니다. 
                수백만 건의 배터리 충·방전 사이클 데이터를 학습한 딥러닝 알고리즘을 통해 0.2% 미만의 오차율로 수명을 예측합니다.
              </p>
              <p>
                단순한 모니터링을 넘어, 배터리의 화학적 물리적 상태를 <span className="text-[#0066ff] font-bold">디지털 트윈</span>으로 구현하여 화재 예방부터 잔존 가치 산정까지 
                배터리 생애 주기 전반(BaaS)에 걸친 혁신적인 솔루션을 글로벌 시장에 공급하고 있습니다.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-3xl font-black text-[#0066ff] mb-1">99.8%</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Prediction Accuracy</div>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-3xl font-black text-[#0066ff] mb-1">200+</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Global Patents</div>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-3xl font-black text-[#0066ff] mb-1">10M+</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Processed Data</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl group border-[8px] border-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200" 
                alt="Battery Lab Research" 
                className="w-full h-[600px] object-cover transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
            </div>
            
            {/* Background Accents (Ice Blue Glow) */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#7DD3FC]/20 rounded-full -z-0 blur-3xl opacity-60" />
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-2xl z-20 border border-gray-100 hidden md:block">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#0066ff] rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Core AI Engine</div>
                  <div className="text-xl font-black text-[#050508]">Naranga Battery Brain v3.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
