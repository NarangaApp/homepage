
import React from 'react';

const REGISTERED_PATENTS = [
  {
    id: '제 10-0111369 호',
    title: '자동차 유전자 AI 지도를 이용한 중고차 문제 발생 예측 데이터 제공 시스템',
    date: '2025.03.31',
    summary: '개별 차량의 정비 데이터를 디지털 지도로 변환(유전자 지도)하여 향후 발생 가능한 고장을 사전에 예측하고 리포트하는 지능형 시스템입니다.',
    imageUrl: '/images/patent-10-2024-0111369.png'
  },
  {
    id: '제 10-0141562 호',
    title: '중고차 적정가격 산출 서비스 제공 서버 및 그 동작방법',
    date: '2025.11.28',
    summary: '인공지능을 활용하여 차량의 상태, 사고 이력, 시장 트렌드를 실시간 분석하고 가장 객관적인 잔존 가치를 도출하는 핵심 알고리즘 기술입니다.',
    imageUrl: '/images/patent-10-2023-0141562.png'
  }
];

const PENDING_PATENTS = [
  { 
    id: '특허-2023-0141562', 
    title: '중고차 적정가격 산출 서비스 제공 서버 및 그 동작방법', 
    category: 'Market Analytics',
    imageUrl: '/images/thumbs/app-proof-2025-01-thumb-v2.png'
  },
  { 
    id: '특허-2023-0171413', 
    title: 'AI기반의 중고차 허위매물 조회 서비스 제공 서버 및 그 동작방법', 
    category: 'Trust & Safety',
    imageUrl: '/images/thumbs/app-proof-2025-04-thumb-v2.png'
  },
  { 
    id: '특허-2023-0182953', 
    title: 'AI기반 차량 멀티 스캐너를 통한 실시간 차량진단 및 실시간 알림장치', 
    category: 'Diagnosis Hardware',
    imageUrl: '/images/thumbs/app-proof-2025-05-thumb-v2.png'
  },
  { 
    id: '특허-2024-0090904', 
    title: 'AI를 활용한 자동차 상태 기반 증강현실 인터페이스 제공 서버 및 그 동작방법', 
    category: 'AI Interface',
    imageUrl: '/images/thumbs/app-proof-2025-03-thumb-v2.png'
  },
  { 
    id: '특허-2025-0112372', 
    title: 'OCV 기반 배터리 진단 시스템', 
    category: 'Energy Tech',
    imageUrl: '/images/thumbs/app-proof-2025-02-thumb-v2.png'
  }
];

const PatentsPage: React.FC = () => {
  return (
    <div className="bg-[#F8F9FB] min-h-screen pt-40 pb-32 font-sans">
      <div className="container mx-auto px-6">
        
        {/* Title Section */}
        <div className="text-center mb-24">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full mb-4">
            <span className="text-blue-600 font-black tracking-[0.2em] uppercase text-[9px] block">Intellectual Property</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter italic uppercase">NARANGA IP Portfolio</h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* 1. Registered Patents Section */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shrink-0">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">특허 등록</h2>
            <div className="flex-grow h-px bg-gray-200" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {REGISTERED_PATENTS.map((patent, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-[0_12px_32px_-14px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row border border-gray-100">
                <div className="md:w-[34%] p-5 bg-gray-50 flex items-center justify-center border-r border-gray-100">
                   <div className="relative w-full max-w-[260px] aspect-[210/297] bg-white shadow-xl border border-gray-200 overflow-hidden">
                      <img src={patent.imageUrl} className="w-full h-full object-cover opacity-100" alt="Patent Certificate" />
                   </div>
                </div>
                <div className="md:w-[66%] p-5 md:p-6 flex flex-col justify-center">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[9px] font-black rounded-lg uppercase tracking-widest border border-blue-100">Certified</span>
                    <span className="text-gray-400 font-bold text-[11px] whitespace-nowrap">{patent.date} 등록</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4 leading-snug">{patent.title}</h3>
                  <div className="relative mb-6"><div className="absolute top-0 left-0 w-1 h-full bg-blue-100 rounded-full" /><p className="pl-5 text-gray-500 font-medium leading-relaxed text-sm">{patent.summary}</p></div>
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center">
                    <div className="flex flex-col"><span className="text-gray-300 text-[9px] font-black uppercase tracking-widest mb-1">Registry No.</span><span className="text-blue-600 font-black text-sm md:text-base tracking-tighter">{patent.id}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. R&D Pipeline (출원사실증명) Cards */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-md shrink-0">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">출원사실증명</h2>
            <div className="flex-grow h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {PENDING_PATENTS.map((patent) => (
              <div key={patent.id} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden flex flex-col">
                <div className="h-48 bg-gray-50 p-6 flex items-center justify-center border-b border-gray-50">
                  <div className="relative h-full aspect-[210/297] bg-white shadow-lg border border-gray-100">
                    <img src={patent.imageUrl} className="w-full h-full object-cover" alt="Application Proof" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-sm font-black text-gray-900 leading-snug line-clamp-3 flex-grow">
                    {patent.title}
                  </h4>
                  <div className="mt-8 pt-4 border-t border-gray-50 flex items-center">
                    <span className="text-[10px] font-black text-gray-300">{patent.id}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PatentsPage;
