
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: '기술' | '서비스' | '일반';
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    category: '기술',
    question: "배터리 수명 예측(SOH)은 어떤 원리로 이루어지나요?",
    answer: "나랑가의 AI 엔진은 배터리의 충·방전 전압 곡선, 임피던스, 온도 등 수만 개의 시계열 데이터를 실시간으로 분석합니다. 이를 디지털 트윈 모델과 결합하여 물리적 변화를 시뮬레이션함으로써 0.2% 미만의 극도로 낮은 오차율로 잔존 수명을 예측합니다."
  },
  {
    id: 2,
    category: '서비스',
    question: "Naranga Battery Brain v3.0의 도입 절차는 어떻게 되나요?",
    answer: "먼저 인프라 진단을 통해 최적의 센서 및 데이터 수집 방식을 설계합니다. 이후 현장 설치 및 데이터 보정 단계를 거치며, 최종적으로 기업 맞춤형 대시보드와 API 연동을 지원합니다. 전체 과정은 보통 4주에서 8주 정도 소요됩니다."
  },
  {
    id: 3,
    category: '일반',
    question: "국외 지역에서도 서비스를 이용할 수 있나요?",
    answer: "네, 현재 미국(북미), 독일(유럽)에 지사를 운영 중이며 글로벌 클라우드 서버를 통해 전 세계 어디서든 배터리 모니터링 및 진단 서비스를 이용하실 수 있습니다. 다국어 지원 및 각국의 안전 규제(ISO 26262 등)를 준수합니다."
  },
  {
    id: 4,
    category: '기술',
    question: "기존 운영 중인 BMS(Battery Management System)와 연동이 가능한가요?",
    answer: "물론입니다. 당사의 솔루션은 표준 CAN 통신 및 주요 클라우드 API를 지원하여 기존 하드웨어 교체 없이도 데이터 레이어에서 지능형 분석 기능을 추가할 수 있는 유연한 아키텍처를 가지고 있습니다."
  },
  {
    id: 5,
    category: '기술',
    question: "데이터 보안 및 개인정보 보호는 어떻게 관리되나요?",
    answer: "수집된 모든 배터리 데이터는 수집 즉시 비식별화 처리가 되며, 군사 등급의 AES-256 암호화를 적용하여 저장됩니다. 또한, 온프레미스(내부 서버) 구축 옵션을 선택하시면 외부 망과 완전히 격리된 환경에서 운영이 가능합니다."
  },
  {
    id: 6,
    category: '서비스',
    question: "유지보수 및 기술 지원 정책은 어떻게 되나요?",
    answer: "기본적으로 24/7 실시간 모니터링 지원이 포함되며, 소프트웨어 업데이트는 클라우드를 통해 정기적으로 무상 제공됩니다. 하드웨어 장애 발생 시 영업일 기준 48시간 이내에 현장 방문 또는 교체 서비스를 지원합니다."
  },
  {
    id: 7,
    category: '일반',
    question: "개인용 전기차 소유자도 앱을 사용할 수 있나요?",
    answer: "현재 나랑가는 기업간 거래(B2B) 및 정부(B2G) 솔루션에 집중하고 있습니다. 하지만 파트너 완성차 업체의 커넥티드 가이드 서비스를 통해 당사의 분석 엔진이 적용된 배터리 진단 리포트를 받아보실 수 있습니다."
  },
  {
    id: 8,
    category: '서비스',
    question: "BaaS(Battery as a Service) 솔루션이란 무엇인가요?",
    answer: "배터리를 단순히 구매하여 소유하는 것이 아니라, 구독 또는 렌탈 형태로 이용하면서 당사의 AI가 배터리의 상태를 관리하고 중고 거래 시 가치를 보증하며 재활용 단계까지 관리해주는 전주기 관리 서비스를 의미합니다."
  }
];

interface FAQPageProps {
  onNavigate?: (page: 'main' | 'greeting' | 'business' | 'history' | 'team' | 'press' | 'faq' | 'contact' | 'location') => void;
}

const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_DATA.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-50/50 -z-10" />
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 border border-blue-200 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 font-black tracking-[0.2em] uppercase text-[10px]">Customer Support</span>
          </div>
          <h1 className="text-4xl md:text-6xl max-[350px]:text-3xl font-black text-gray-900 mb-4 leading-tight whitespace-nowrap">
            무엇을 도와드릴까요?
          </h1>
          
          <p className="text-gray-500 text-base md:text-lg font-medium mb-4">
            궁금하신 내용을 입력해주세요
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="예: 배터리 수명, 보안..."
              className="w-full px-10 pr-16 max-[400px]:pr-20 py-6 bg-white rounded-[2rem] shadow-2xl shadow-blue-100 outline-none border-2 border-transparent focus:border-blue-600 transition-all text-lg max-[400px]:text-base font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAQ Accordion Section */}
      <section className="container mx-auto px-6 max-w-4xl mb-40">
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                openId === faq.id 
                  ? 'border-blue-600 shadow-xl shadow-blue-50' 
                  : 'border-gray-100 hover:border-blue-200'
              }`}
            >
              <button 
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-8 py-8 max-[350px]:px-5 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6 max-[380px]:gap-2 max-[380px]:min-w-0">
                  <span className={`min-w-[56px] h-8 inline-flex items-center justify-center px-3 rounded-lg text-[10px] font-black uppercase tracking-widest max-[350px]:min-w-[52px] max-[350px]:px-2 max-[350px]:text-[9px] max-[350px]:tracking-[0.2em] max-[350px]:whitespace-nowrap ${
                    faq.category === '기술' ? 'bg-blue-50 text-blue-600' :
                    faq.category === '서비스' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'
                  }`}>
                    {faq.category}
                  </span>
                  <h3 className="text-lg md:text-xl max-[420px]:text-sm font-black text-gray-900 leading-tight transition-colors group-hover:text-blue-600 whitespace-normal">
                    {faq.id === 1 ? (
                      <>
                        <span className="faq-q1-desktop">{faq.question}</span>
                        <span className="faq-q1-mobile">
                          <span className="faq-q1-line">배터리 수명 예측(SOH)은</span>
                          <span className="faq-q1-line">어떤 원리로 이루어지나요?</span>
                        </span>
                      </>
                    ) : (
                      faq.question
                    )}
                  </h3>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-500 ${
                  openId === faq.id ? 'rotate-180 bg-blue-600 text-white' : 'text-gray-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${
                openId === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-8 pt-2">
                  <div className="w-full h-px bg-gray-50 mb-6" />
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {filteredFaqs.length === 0 && (
            <div className="py-32 text-center">
              <div className="text-6xl mb-6 opacity-20">🔍</div>
              <p className="text-gray-400 font-bold">검색 결과가 없습니다. 다른 키워드로 검색해 보세요.</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. Help Desk Section */}
      <section className="container mx-auto px-6 mb-40">
        <div className="bg-blue-600 rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600" />
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-125" />
          
          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl max-[360px]:text-2xl max-[360px]:leading-tight font-black text-white mb-6">
              <span className="hidden sm:inline">원하는 답변을 찾지 못하셨나요?</span>
              <span className="sm:hidden">
                원하는 답변을
                <br />
                찾지 못하셨나요?
              </span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium opacity-80 max-w-xl break-keep">
              <span className="help-first">전문가 팀이 신속하게 답변해 드립니다.</span>
              <span className="mobile-br-space"> </span>
              <br className="desktop-br" />
              <span className="help-second">지금 바로 1:1 문의를 남겨주세요.</span>
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <Link 
              to="/support/contact"
              className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl shadow-xl hover:-translate-y-1 transition-all"
            >
              1:1 기술 문의하기
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .mobile-br-space { display: inline; }
        .desktop-br { display: none; }
        @media (min-width: 421px) {
          .mobile-br-space { display: none; }
          .desktop-br { display: block; }
        }
        @media (max-width: 420px) {
          .help-first {
            display: block;
            white-space: nowrap;
            font-size: 0.875rem;
          }
          .help-second {
            display: block;
            font-size: 0.875rem;
          }
        }
        .faq-q1-mobile {
          display: none;
        }
        @media (max-width: 420px) {
          .faq-q1-desktop {
            display: none;
          }
          .faq-q1-mobile {
            display: inline;
          }
          .faq-q1-line {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQPage;
