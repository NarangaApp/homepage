
import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const currentView = location.pathname;
  // 메인 페이지가 아니거나 스크롤된 경우 검정색 텍스트와 흰색 배경 사용
  const isLightPage = currentView !== '/';
  const forceDark = isScrolled || isLightPage;
  
  const textColor = forceDark ? 'text-gray-900' : 'text-white';
  const subTextColor = forceDark ? 'text-gray-600' : 'text-white/90';
  const headerBg = forceDark ? 'bg-white shadow-md py-4' : 'bg-transparent py-6';
  const logoSrc = forceDark ? '/images/naranga_logo.svg' : '/images/naranga_logo_light.svg';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      {/* 투명 헤더일 때 텍스트 가독성을 위한 상단 그림자 (메인에서만) */}
      {!forceDark && <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent -z-10 h-32 pointer-events-none" />}
      
      <div className="container mx-auto px-6 flex items-center justify-between lg:grid lg:grid-cols-3">
        
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <img
              src={logoSrc}
              alt="NARANGA TECHNOLOGIES"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Center: Navigation Menu (Perfectly Centered) */}
        <nav className="hidden lg:flex items-center justify-center gap-10">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.label} 
              className="relative px-2"
              onMouseLeave={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
                closeTimer.current = setTimeout(() => setOpenMenu(null), 200);
              }}
              onMouseEnter={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
                setOpenMenu(link.label);
              }}
            >
              {link.children ? (
                <button
                  type="button"
                  className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${subTextColor} hover:text-[#0066ff] whitespace-nowrap`}
                  aria-haspopup="menu"
                  aria-expanded={openMenu === link.label}
                  onClick={() => setOpenMenu(link.label)}
                >
                  {link.label}
                  <svg className={`w-3.5 h-3.5 opacity-60 transition-transform duration-300 ${openMenu === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <Link 
                  to={link.href}
                  className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${subTextColor} hover:text-[#0066ff] whitespace-nowrap`}
                  onClick={() => setOpenMenu(null)}
                >
                  {link.label}
                </Link>
              )}
              
              {link.children && openMenu === link.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 pb-4 px-4 -mx-4 transition-all duration-300 transform translate-y-2 opacity-100 visible">
                  <div className="bg-white rounded-2xl shadow-2xl py-4 min-w-[170px] border border-gray-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="w-full block text-left px-6 py-2.5 text-sm text-gray-500 hover:text-[#0066ff] hover:bg-blue-50 font-bold transition-colors"
                        onClick={() => setOpenMenu(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Balance Space */}
        <div className="flex justify-end lg:pr-4">
          <button
            type="button"
            className={`lg:hidden ${textColor}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          />
          <div className="absolute top-0 right-0 h-full w-[82%] max-w-sm bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-gray-900 font-black">메뉴</span>
              <button
                type="button"
                className="text-gray-600"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-4">
              {NAV_LINKS.map(link => (
                <div key={link.label} className="border-b border-gray-100 py-3">
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between text-left text-gray-900 font-bold"
                        onClick={() => setMobileSection(mobileSection === link.label ? null : link.label)}
                        aria-expanded={mobileSection === link.label}
                      >
                        {link.label}
                        <svg className={`w-4 h-4 transition-transform ${mobileSection === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileSection === link.label && (
                        <div className="mt-3 flex flex-col gap-2">
                          {link.children.map(child => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="text-gray-600 font-semibold"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileSection(null);
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-900 font-bold"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
