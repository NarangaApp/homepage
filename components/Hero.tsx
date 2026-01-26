
import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const [showSpline, setShowSpline] = useState(false);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = bgRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowSpline(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative w-full overflow-hidden bg-white min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh]">
      {/* Background: show Spline only */}
      <div className="absolute inset-0 z-0 overflow-hidden" ref={bgRef}>
        {showSpline ? (
          <iframe
            src="https://my.spline.design/nexbotrobotcharacterconcept-QMwdx0JoZmtgvqXdisWBe31s/"
            // src="https://my.spline.design/interactive3dparallaxscene-4a15by3SAzPB979ldns3quOJ/"
            title="Naranga Hero"
            className="absolute"
            style={{
              width: '120%',
              height: '120%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%) scale(1.05)',
              transformOrigin: 'center',
            }}
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 bg-white" />
        )}
      </div>

      {/* Hero Content Area */}
      <div className="relative h-full container mx-auto px-6 flex flex-col items-center justify-center text-center z-20 pointer-events-none">
        {/* Minimal content to maintain focus on visual impact */}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2 backdrop-blur-sm bg-white/10">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
