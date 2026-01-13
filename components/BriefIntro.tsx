
import React from 'react';

const BriefIntro: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-10">
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
          <span className="text-blue-600 text-[10px] font-black tracking-widest uppercase">Naranga AI & Data</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#050508] mb-10 leading-tight tracking-tight">
          데이터는 말하고,<br />
          <span className="text-blue-600">AI는 판단합니다</span>
        </h2>
        <p className="text-[#94A3B8] text-lg md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed">
          나랑가는 AI와 데이터로 의미 있는 판단을 만드는 소프트웨어 기업입니다.<br />
          우리는 기술의 본질에 집중하며, 실제 환경에서 가치를 발휘하는 지능형 솔루션을 제안합니다.
        </p>
      </div>
    </section>
  );
};

export default BriefIntro;
