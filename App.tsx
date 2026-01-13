
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BriefIntro from './components/BriefIntro';
import ServiceSection from './components/ServiceSection';
import AwardsSection from './components/AwardsSection';
import UnifiedLocationTeam from './components/UnifiedLocationTeam';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import GreetingRoutePage from './pages/company/greeting/page';
import BusinessRoutePage from './pages/company/business/page';
import HistoryRoutePage from './pages/company/history/page';
import PressRoutePage from './pages/company/press/page';
import ProblemRoutePage from './pages/products/problem/page';
import FaqRoutePage from './pages/support/faq/page';
import ContactRoutePage from './pages/support/contact/page';
import PatentsRoutePage from './pages/patents/page';
import CertificateRoutePage from './pages/certificate/page';
import TeamRoutePage from './pages/team/page';
import LocationRoutePage from './pages/location/page';
import ProductAiRoutePage from './pages/products/ai/page';
import ProductSoftwareRoutePage from './pages/products/software/page';
import ProductHardwareRoutePage from './pages/products/hardware/page';
import ProductPageView, { ProductId } from './pages/products/ProductPageView';

const ProblemSplinePreload: React.FC = () => (
  <iframe
    title="preload-problem-spline"
    src="https://my.spline.design/zerogravityphysicslandingpage-BSA3fsEvj2zl7K6LAonsNDmc/"
    loading="eager"
    aria-hidden="true"
    tabIndex={-1}
    style={{
      position: 'absolute',
      width: '1px',
      height: '1px',
      opacity: 0,
      pointerEvents: 'none',
      border: 0,
      inset: 0
    }}
  />
);

const MainLanding = () => (
  <>
    <Hero />
    <BriefIntro />
    <ServiceSection />
    <AwardsSection />
    <UnifiedLocationTeam />
    <PartnersSection />
  </>
);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ProductRoute: React.FC = () => {
  const { productId } = useParams();
  const allowed: ProductId[] = ['ai', 'software', 'hardware'];
  const fallback: ProductId = 'ai';
  const id = allowed.includes(productId as ProductId) ? (productId as ProductId) : fallback;
  return <ProductPageView serviceId={id} />;
};

const AppShell: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <Header isScrolled={isScrolled} />
      <ProblemSplinePreload />
      <main className="flex-grow transition-all duration-500">
        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/company/greeting" element={<GreetingRoutePage />} />
          <Route path="/company/business" element={<BusinessRoutePage />} />
          <Route path="/company/history" element={<HistoryRoutePage />} />
          <Route path="/products/problem" element={<ProblemRoutePage />} />
          <Route path="/company/press" element={<PressRoutePage />} />
          <Route path="/support/faq" element={<FaqRoutePage />} />
          <Route path="/support/contact" element={<ContactRoutePage />} />
          <Route path="/patents" element={<PatentsRoutePage />} />
          <Route path="/certificate" element={<CertificateRoutePage />} />
          <Route path="/team" element={<TeamRoutePage />} />
          <Route path="/products/:productId" element={<ProductRoute />} />
          <Route path="/products/ai" element={<ProductAiRoutePage />} />
          <Route path="/products/software" element={<ProductSoftwareRoutePage />} />
          <Route path="/products/hardware" element={<ProductHardwareRoutePage />} />
          <Route path="/location" element={<LocationRoutePage />} />
          <Route path="*" element={<MainLanding />} />
        </Routes>
      </main>
      <div className="relative z-30 bg-[#111111] mt-auto">
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  );
};

export default App;
