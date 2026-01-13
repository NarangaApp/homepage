
import React from 'react';

const CERTIFICATIONS = [
  {
    id: 'CERT-2024-RND',
    title: '기업부설연구소 인정서',
    issuer: '과학기술정보통신부 / 한국산업기술진흥협회',
    date: '2025.11.27',
    summary: '나랑가 주식회사의 자체 부설 연구소가 미래 모빌리티 및 AI 판단 엔진 개발 역량을 공식 인정받았습니다.',
    imageUrl: '/images/certificate-rnd-lab.png'
  }
];

const AWARD_PORTFOLIO = [
  {
    id: 'AWARD-01',
    title: '방송통신대학 비즈니스모델 경진대회 대상',
    category: 'Grand Prize',
    issuer: '한국방송통신대학교',
    imageUrl: '/images/award-broadcasting-model.png'
  },
  {
    id: 'AWARD-02',
    title: '부울경 창업아이디어 경진대회 최우수상',
    category: 'Top Excellence',
    issuer: '부울경 창업협력협의체',
    imageUrl: '/images/award-buulgyeong-idea.png'
  },
  {
    id: 'AWARD-03',
    title: '울산 중구 창업아이디어 경진대회 최우수상',
    category: 'Top Excellence',
    issuer: '울산광역시 중구청',
    imageUrl: '/images/award-ulsan-junggu-idea.png'
  },
  {
    id: 'AWARD-04',
    title: '울산 북구 창업아이디어 경진대회 성인부 최우수상',
    category: 'Top Excellence',
    issuer: '울산광역시 북구청',
    imageUrl: '/images/award-ulsan-bukgu-idea.png'
  }
];

const TechPage: React.FC = () => {
  return (
    <div className="bg-[#F8F9FB] min-h-screen pt-40 pb-32 font-sans">
      <div className="container mx-auto px-6">
        
        {/* 1. Official Certifications Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full mb-4">
            <span className="text-[#0066ff] font-black tracking-[0.2em] uppercase text-[9px] block">Certificates</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter italic uppercase">공인 인증 현황</h1>
          <div className="w-16 h-1 bg-[#0066ff] mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-28">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="bg-white rounded-2xl shadow-[0_18px_45px_-18px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col md:flex-row border border-gray-100">
              <div className="md:w-[32%] bg-gray-50 p-8 flex items-center justify-center border-r border-gray-100">
                <div className="relative w-full aspect-[210/297] bg-white shadow-xl border border-gray-200 overflow-hidden">
                  <img src={cert.imageUrl} className="w-full h-full object-cover" alt={cert.title} />
                  <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply pointer-events-none" />
                </div>
              </div>
              <div className="md:w-[68%] p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-4 flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#0066ff] text-white text-[10px] font-black rounded-lg uppercase tracking-widest shadow-lg shadow-blue-100">Official</span>
                  <span className="text-gray-400 font-bold text-[11px]">{cert.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight leading-snug">{cert.title}</h3>
                <p className="text-gray-500 font-medium text-base leading-relaxed mb-6">{cert.summary}</p>
                <div className="mt-auto flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-[#0066ff] rounded-full" />
                   <p className="text-[#0066ff] font-black text-sm uppercase tracking-wider">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Contest Awards Portfolio Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full mb-4">
            <span className="text-[#0066ff] font-black tracking-[0.2em] uppercase text-[9px] block">Honors & Awards</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter italic uppercase">경진대회 수상 내역</h1>
          <div className="w-16 h-1 bg-[#0066ff] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {AWARD_PORTFOLIO.map((award, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-[0_14px_36px_-12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col border border-gray-100/80">
              <div className="h-[240px] bg-gray-50 flex items-center justify-center relative overflow-hidden p-6">
                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                 <div className="relative h-full aspect-[210/297] bg-white shadow-[0_16px_38px_-12px_rgba(0,0,0,0.12)] border border-gray-200 overflow-hidden">
                    <img src={award.imageUrl} className="w-full h-full object-cover opacity-90" alt={award.title} />
                 </div>
              </div>
              <div className="p-3 md:p-4 flex flex-col">
                <div className="mb-2.5 flex items-center justify-between">
                  <span className={`px-3 py-[6px] text-[9px] font-black rounded-lg uppercase tracking-[0.2em] border bg-blue-50 text-[#0066ff] border-blue-100`}>
                    {award.category === 'Grand Prize' ? '🏆 대상' : '🥈 최우수상'}
                  </span>
                  <span className="text-gray-300 font-black text-[9px] uppercase tracking-widest">{award.id}</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-black text-gray-950 mb-3.5 leading-tight">
                  {award.title}
                </h3>

                <div className="pt-3.5 border-t border-gray-50 flex items-center">
                  <div className="flex flex-col">
                    <span className="text-gray-300 text-[8px] font-black uppercase tracking-widest mb-1">Organized By</span>
                    <span className="text-gray-900 font-black text-sm tracking-tight">{award.issuer}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechPage;
