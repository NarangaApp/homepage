
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {

  return (
    <footer className="bg-[#111111] text-gray-400 pt-24 pb-12 font-sans border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Logo (Left) + Menus (Right) */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          
          {/* Left Side: Company Brand & Logo */}
          <div className="lg:w-1/4 flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <Link to="/" className="flex items-center gap-3 cursor-pointer group w-fit">
                <img
                  src="/images/naranga_logo_light.svg"
                  alt="NARANGA"
                  className="h-10 w-auto drop-shadow-[0_10px_30px_rgba(255,255,255,0.08)] transition-transform group-hover:scale-105"
                />
              </Link>
            </div>
            <p className="text-[12px] text-gray-500 leading-relaxed font-medium mt-2">
              배터리 AI 기술의 글로벌 리더,<br />
              지속 가능한 에너지를 위한 혁신을 만듭니다.
            </p>
          </div>

          {/* Right Side: Multi-column Navigation */}
          <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Column 1: 회사소개 */}
            <div>
              <h4 className="text-white font-bold text-sm mb-8">회사소개</h4>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><Link to="/company/greeting" className="hover:text-white transition-colors">인삿말</Link></li>
                <li><Link to="/company/history" className="hover:text-white transition-colors">회사 연혁</Link></li>
                <li><Link to="/company/press" className="hover:text-white transition-colors">보도자료</Link></li>
                <li><Link to="/location" className="hover:text-white transition-colors">오시는길</Link></li>
              </ul>
            </div>

            {/* Column 2: 프로덕트 */}
            <div>
              <h4 className="text-white font-bold text-sm mb-8">프로덕트</h4>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><Link to="/products/problem" className="hover:text-white transition-colors">문제 인식</Link></li>
                <li><Link to="/products/hardware" className="hover:text-white transition-colors">하드웨어</Link></li>
                <li><Link to="/products/software" className="hover:text-white transition-colors">소프트웨어</Link></li>
                <li><Link to="/products/ai" className="hover:text-white transition-colors">AI 솔루션</Link></li>
              </ul>
            </div>

            {/* Column 3: 기술 및 인증 */}
            <div>
              <h4 className="text-white font-bold text-sm mb-8">기술 및 인증</h4>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><Link to="/tech" className="hover:text-white transition-colors">보유 기술</Link></li>
                <li><Link to="/patents" className="hover:text-white transition-colors">특허 현황</Link></li>
              </ul>
            </div>

            {/* Column 4: 고객지원 */}
            <div>
              <h4 className="text-white font-bold text-sm mb-8">고객지원</h4>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><Link to="/support/faq" className="hover:text-white transition-colors">자주하는 질문</Link></li>
                <li><Link to="/support/contact" className="hover:text-white transition-colors">고객 문의</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Section: Business Info Bar & Social Icons */}
        <div className="border-t border-white/5 pt-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            {/* Business Registration & Contact */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-medium text-gray-500">
              <span className="flex gap-2"><span className="opacity-40">사업자 등록번호</span> 123-86-19086</span>
              <span className="w-px h-3 bg-white/10 hidden sm:block"></span>
              <span className="flex gap-2"><span className="opacity-40">문의전화</span> 070-8633-8278</span>
              <span className="w-px h-3 bg-white/10 hidden sm:block"></span>
              <span className="flex gap-2"><span className="opacity-40">이메일</span> sales_kr@naranga.com</span>
            </div>

            {/* SNS Icons */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-all text-xl font-black">B</a>
              <a href="#" className="text-gray-500 hover:text-white transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright & Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-600 font-bold uppercase tracking-widest">
            <p>© 2025 NARANGA. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
