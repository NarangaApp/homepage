
import React from 'react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <span className="text-blue-600 font-black tracking-widest uppercase text-xs">Connectivity</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
              언제든 방문하여<br />혁신을 경험하세요
            </h2>
            
            <div className="mt-12 space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-black text-lg mb-2">Headquarter Office</h4>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    서울특별시 강남구 테헤란로 123 나랑가타워 45층<br />
                    (우) 06236
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-black text-lg mb-2">Contact Channels</h4>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    Representative: 02-123-4567<br />
                    Email: business@naranga.com
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-black text-lg mb-2">Working Hours</h4>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    평일 09:00 - 18:00 (Lunch 12:00 - 13:00)<br />
                    주말 및 공휴일 휴무
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 20l-5.447-2.724A2 2 0 013 15.489V6.511a2 2 0 011.553-1.943L9 3m6 17l5.447-2.724A2 2 0 0021 15.489V6.511a2 2 0 00-1.553-1.943L15 3m-3 5v8" />
                </svg>
                네이버 지도로 길찾기
              </button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white bg-gray-200">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                   <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-4 animate-bounce">
                     <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <p className="font-black text-gray-400">Interactive Map Loading...</p>
                 </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Location Map" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
