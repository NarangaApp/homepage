import React from 'react';

const GreetingRoutePage: React.FC = () => {
  return (
    <div className="bg-white pt-48 pb-24">
      {/* CEO Message Content */}
      <section className="container mx-auto px-6 mb-32 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-lg mb-4">
              <span className="w-1.5 h-1.5 bg-[#0066ff] rounded-full" />
              <span className="text-[#0066ff] font-black tracking-[0.2em] uppercase text-[10px] block">CEO Greeting</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">CEO 인사말</h2>
            <div className="w-12 h-1.5 bg-[#0066ff] rounded-full" />
          </div>
          
          <div className="space-y-10 text-gray-800 text-lg md:text-xl font-medium leading-[2.2] tracking-tight">
            <p className="font-bold text-2xl text-gray-950 mb-12">안녕하세요.</p>
            
            <p className="font-bold text-2xl text-gray-950 mb-10">
              <span className="text-[#0066ff]">나랑가 주식회사</span> 대표이사 <span className="underline decoration-blue-200 underline-offset-8">이충현</span>입니다.
            </p>

            <p>
              나랑가는 AI와 데이터 기술을 기반으로 신뢰할 수 있는 판단 기준을 연구·개발하는 기술 기업입니다.
            </p>
            
            <p>
              데이터를 단순히 분석하는 데 그치지 않고, 실제 환경에서 의미 있게 작동하는 검증 가능한 AI 기술을 만드는 데 집중하고 있습니다.
            </p>

            <p>
              모든 연구개발 과정에서<br />
              데이터의 정확성, 모델의 해석 가능성, 현장 적용성을 중요하게 생각합니다.
            </p>

            <p>
              이러한 기준은 기술의 완성도를 높이고, 다양한 문제 상황에서도 일관된 가치를 제공하는 기반이 됩니다.
            </p>

            <p>
              나랑가는 책임 있는 연구개발을 통해<br />
              산업과 사회가 신뢰할 수 있는 기술을 꾸준히 만들어가고자 합니다.
            </p>

            <p>
              앞으로도 본질에 집중하며, 기술로 답하는 기업이 되겠습니다.
            </p>

            <p className="pt-10">감사합니다.</p>
          </div>

          {/* Bottom Name Area */}
          <div className="mt-32 flex flex-col items-end pr-4">
            <div className="mb-4">
              <img 
                src="/images/signature.ai" 
                alt="Signature of CEO Chunghyun Lee" 
                className="w-52 md:w-64 object-contain"
              />
            </div>
            <div className="text-right">
              <p className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter">
                대표이사 <span className="ml-4">이충현</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default GreetingRoutePage;
