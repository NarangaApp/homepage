
import React from 'react';

const HISTORY_DATA = [
  {
    year: '2025',
    events: [
      '울산 UNIST AI혁신파크 기업부설연구소 설립',
      '법인사업자 전환을 통한 사업 구조 고도화',
      '각종 정부지원사업 선정 및 수행',
      '다수 R&D 과제 선정 및 수행',
      '배터리 수명 예측 AI 모델 개발',
      '배터리 이상치 탐지 AI 모델 개발',
      'OCV 기반 배터리 진단 시스템 특허 출원',
      '유전자 AI 지도 관련 특허 등록 완료',
      '중고차 적정가격 산출 서비스 특허 등록 완료',
      '부울경 ICT 아이디어 경진대회 최우수상 수상'
    ]
  },
  {
    year: '2024',
    events: [
      '연구개발 전담부서 설립',
      '울산 청년창업사관학교 선정',
      '울산 청년 CEO 선정',
      'AI 기반 자동차 상태 인식 증강현실 인터페이스 기술 특허 출원',
      '다수 중고차·모빌리티 기업과 B2B 협력 파트너십 체결',
      '한국도로공사 협약',
      '국토교통부 협약',
      '울산대학교 하드웨어 공동연구 수행',
      'UNIST AI 공동연구 수행',
      '서비스 앱 개발 완료',
      '울산광역시 북구·중구 경진대회 최우수상 수상'
    ]
  },
  {
    year: '2023',
    events: [
      '나랑가 설립',
      '중고차 적정가격 산출 서비스 특허 출원',
      'AI 기반 중고차 허위매물 조회 서비스 특허 출원',
      'AI 기반 차량 멀티 스캐너를 통한 실시간 차량 진단 기술 특허 출원'
    ]
  }
];

const HistoryPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-sans">
      <div className="container mx-auto px-6">
        
        {/* Title Section: Matching the captured screenshot style with refined typography */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 tracking-tighter">연혁</h1>
          <div className="w-14 h-1 bg-[#0066ff] mx-auto" />
          <p className="mt-4 text-gray-400 font-bold tracking-[0.28em] uppercase text-[11px]">Innovation Journey</p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Central Vertical Line: Subtle tech-line feel */}
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-gradient-to-b from-blue-100 via-blue-200 to-transparent hidden lg:block" />

          <div className="space-y-14">
            {HISTORY_DATA.map((item) => (
              <div key={item.year} className="flex flex-col lg:flex-row items-start relative group">
                
                {/* Year Side: Left column with dynamic scaling effect */}
                <div className="w-full lg:w-[33%] text-center lg:text-right lg:pr-12 mb-6 lg:mb-0 transition-transform duration-500 group-hover:-translate-x-1">
                  <span className="text-4xl md:text-6xl font-black text-gray-950 tracking-tighter leading-none block">
                    {item.year}
                  </span>
                  <span className="text-[#0066ff] font-black text-[9px] uppercase tracking-[0.32em] mt-2 block">Archive_{item.year}</span>
                </div>

                {/* Marker: Center point with Blue Glow */}
                <div className="absolute left-[33%] top-9 -translate-x-1/2 z-10 hidden lg:block">
                  <div className="w-4 h-4 bg-[#0066ff] shadow-[0_0_15px_rgba(0,102,255,0.5)] group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300" />
                </div>

                {/* Events Side: Right column */}
                <div className="w-full lg:w-[67%] lg:pl-12 transition-opacity duration-500 group-hover:opacity-100 opacity-85">
                  <ul className="space-y-3">
                    {item.events.map((event, eIdx) => (
                      <li key={eIdx} className="text-gray-600 text-sm md:text-lg font-medium leading-tight flex items-start gap-3 group/item">
                        {/* Mobile/Small Screen Marker */}
                        <span className="lg:hidden w-2 h-2 bg-[#0066ff] mt-2 flex-shrink-0" />
                        
                        {/* Event Text */}
                        <span className="group-hover/item:text-gray-950 transition-colors">
                          {event}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Subtle divider line like screenshot */}
                  <div className="mt-12 h-px bg-gray-100 w-full" />
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .container {
          animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default HistoryPage;
