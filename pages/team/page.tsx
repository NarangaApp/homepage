
import React from 'react';
import { TEAM_MEMBERS } from '../../constants';

const TeamPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />

        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 font-black tracking-[0.2em] uppercase text-[10px]">The Innovators</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
            혁신을 현실로 만드는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 italic">Naranga Visionaries</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            최고의 기술력과 뜨거운 열정을 가진 전문가들이 모여,<br /> 
            에너지 산업의 새로운 패러다임을 설계하고 있습니다.
          </p>
        </div>
      </section>

      {/* 2. Core Leadership Section: Alternating Layout with smaller photos */}
      <section className="py-24 bg-gray-50/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center gap-4 mb-32 justify-center">
            <div className="h-px bg-gray-200 flex-grow max-w-[100px]" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">Core Leadership</h2>
            <div className="h-px bg-gray-200 flex-grow max-w-[100px]" />
          </div>

          <div className="space-y-32 md:space-y-48">
            {TEAM_MEMBERS.map((member, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col lg:items-center gap-12 md:gap-20 ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Area: Reduced size to ~40% of container */}
                <div className="w-full lg:w-[40%] group">
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-blue-200/50 group-hover:-translate-y-2">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
                    
                    {/* Index Number Overlay */}
                    <div className="absolute top-8 left-8 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-blue-600 font-black text-xl italic">0{idx + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Text Area: Flexible width */}
                <div className="w-full lg:w-[50%] flex flex-col justify-center">
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'text-left' : 'lg:text-right lg:items-end'}`}>
                    <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[11px] mb-4">
                      {member.role}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                      {member.name}
                    </h3>
                    <div className={`w-20 h-1.5 bg-blue-600 rounded-full mb-8 ${idx % 2 === 1 ? 'lg:ml-auto' : ''}`} />
                    
                    <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-lg">
                      {member.bio}
                    </p>

                    <div className={`flex flex-wrap gap-3 ${idx % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      {['Strategic Mindset', 'Tech Excellence', 'Global Vision'].map((tag, tIdx) => (
                        <span key={tIdx} className="px-4 py-1.5 bg-white border border-gray-100 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className={`mt-12 flex gap-4 ${idx % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm">
                        <span className="font-black">in</span>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Culture Section */}
      <section className="py-32 mb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Naranga의 팀워크는<br />
                <span className="text-blue-600">수평적 대화</span>에서 시작됩니다.
              </h2>
              <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-10">
                우리는 직급에 상관없이 기술적 난제를 함께 토론하며 최선의 답을 찾습니다.<br />
                데이터는 거짓말을 하지 않으며, 우리의 결정은 언제나 근거 중심적입니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                  <div className="text-blue-600 font-black text-xl mb-2">Open Table</div>
                  <p className="text-gray-600 text-sm font-medium">자유로운 아이디어 피칭과 기술 검증 프로세스</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                  <div className="text-blue-600 font-black text-xl mb-2">Tech Focused</div>
                  <p className="text-gray-600 text-sm font-medium">엔지니어의 몰입을 위한 최적의 R&D 환경 지원</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
               <div className="aspect-square rounded-[2rem] overflow-hidden shadow-lg mt-12">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Team meeting" />
               </div>
               <div className="aspect-square rounded-[2rem] overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Office space" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
