
import React, { useState, useEffect } from 'react';
import { PRESS_RELEASES } from '../../../constants';

const PressPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('전체');
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  
  const categories = ['전체', '기술', '수상', '파트너십', '투자', '사회공헌', '이벤트'];

  const filteredReleases = activeTab === '전체' 
    ? PRESS_RELEASES 
    : PRESS_RELEASES.filter(release => release.category === activeTab);

  const featured = PRESS_RELEASES[0];
  const selectedNews = PRESS_RELEASES.find(news => news.id === selectedNewsId);

  // 모달 열릴 때 스크롤 방지
  useEffect(() => {
    if (selectedNewsId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedNewsId]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-44 pb-32 overflow-visible bg-slate-900">
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0066ff]/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 font-black tracking-[0.2em] uppercase text-[10px]">Press Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1]">
            NARANGA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400 italic">Newsroom</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            나랑가 주식회사의 혁신적인 기술 소식과<br />
            글로벌 시장에서의 성장 기록을 전해드립니다.
          </p>
        </div>
      </section>

      {/* 2. Featured News */}
      <section className="container mx-auto px-6 max-w-6xl -mt-12 mb-28 relative z-20">
        <div 
          onClick={() => setSelectedNewsId(featured.id)}
          className="bg-white rounded-[2.8rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 group cursor-pointer"
        >
          <div className="lg:w-[42%] bg-gray-50 flex items-center justify-center p-6 md:p-10">
            <img 
              src={featured.imageUrl} 
              alt={featured.title} 
              className="w-full max-w-[320px] h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="lg:w-[58%] p-9 md:p-14 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-5">
              <span className="px-4 py-1 bg-[#0066ff] text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                Latest News
              </span>
              <span className="text-gray-400 text-xs font-bold">{featured.date}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight group-hover:text-[#0066ff] transition-colors">
              {featured.title}
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10">
              {featured.excerpt}
            </p>
            <button className="w-fit px-8 py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-[#0066ff] transition-all flex items-center gap-3">
              자세히 보기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 3. News Feed Section */}
      <section className="container mx-auto px-6 mb-40 pt-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === cat 
                  ? 'bg-[#0066ff] text-white shadow-lg shadow-blue-100' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReleases.map((news) => (
            <div 
              key={news.id} 
              onClick={() => setSelectedNewsId(news.id)}
              className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-blue-100 transition-all hover:shadow-2xl hover:shadow-blue-50/50 cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black text-[#0066ff] uppercase tracking-widest shadow-lg">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-gray-400 text-xs font-bold mb-4">{news.date}</span>
                <h3 className="text-xl font-black text-gray-900 mb-4 leading-snug group-hover:text-[#0066ff] transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <button className="text-[#0066ff] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    Read More 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredReleases.length === 0 && (
          <div className="py-32 text-center">
            <div className="text-6xl mb-6 opacity-20">📰</div>
            <p className="text-gray-400 font-bold">해당 카테고리의 새로운 소식이 준비 중입니다.</p>
          </div>
        )}
      </section>

      {/* 4. News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gray-950/80 backdrop-blur-md"
            onClick={() => setSelectedNewsId(null)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-modal-slide-up">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedNewsId(null)}
              className="absolute top-8 right-8 w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-all z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="overflow-y-auto hide-scrollbar">
              <div className="relative h-[300px] md:h-[450px]">
                <img src={selectedNews.imageUrl} className="w-full h-full object-cover" alt={selectedNews.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 md:left-20">
                  <span className="px-4 py-1.5 bg-[#0066ff] text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-xl">
                    {selectedNews.category}
                  </span>
                </div>
              </div>
              
              <div className="px-10 md:px-20 py-16">
                <span className="text-gray-400 text-sm font-bold mb-4 block">{selectedNews.date}</span>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 leading-tight tracking-tight">
                  {selectedNews.title}
                </h2>
                
                <div className="w-12 h-1 bg-[#0066ff] rounded-full mb-12" />
                
                <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-[2]">
                  {(selectedNews.content || selectedNews.excerpt)
                    .split('\n')
                    .filter(Boolean)
                    .map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  {selectedNews.sourceUrl && (
                    <p className="mt-6 text-sm font-semibold">
                      출처:{' '}
                      <a
                        href={selectedNews.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0066ff] underline underline-offset-4 hover:text-[#0052cc]"
                      >
                        {selectedNews.sourceName || '스타트업 데일리'}
                      </a>
                    </p>
                  )}
                </div>
                
                <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-gray-300 text-[10px] font-black uppercase tracking-widest mb-1">Source</span>
                    <span className="text-gray-900 font-black">{selectedNews.sourceName || '나랑가 홍보팀'}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedNewsId(null)}
                    className="px-10 py-4 bg-gray-100 text-gray-900 font-black rounded-2xl hover:bg-[#0066ff] hover:text-white transition-all"
                  >
                    목록으로 돌아가기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
        .animate-modal-slide-up {
          animation: modal-slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default PressPage;
