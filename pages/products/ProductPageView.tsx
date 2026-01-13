import React from 'react';
import { SERVICES } from '../../constants';

export type ProductId = 'hardware' | 'software' | 'ai';

interface ProductPageViewProps {
  serviceId: ProductId;
}

const ProductPageView: React.FC<ProductPageViewProps> = ({ serviceId }) => {
  const service = SERVICES.find(s => s.id === serviceId);
  const isSoftware = serviceId === 'software';
  const isAI = serviceId === 'ai';
  const isHardware = serviceId === 'hardware';

  if (!service) return null;

  const technicalSpecs = {
    hardware: [
      { label: 'Sampling Rate', value: '1,000Hz (1ms)', detail: 'High-speed simultaneous multi-channel sampling' },
      { label: 'Accuracy', value: '±0.1mV / ±0.01A', detail: 'Medical-grade precision sensors for noise filtering' },
      { label: 'Connectivity', value: 'CAN-FD / 5G / LTE', detail: 'Global roaming supported wireless connectivity' },
      { label: 'Operating Temp', value: '-40°C to 85°C', detail: 'Designed for extreme automotive environments' },
      { label: 'Protection', value: 'IP6K9K / IK10', detail: 'Highest dust, water, and impact protection' },
      { label: 'Certification', value: 'ISO 26262 ASIL-D', detail: 'Functional safety compliant architecture' }
    ],
    software: [
      { label: 'Scalability', value: '1M+ Assets', detail: 'Distributed MSA handling massive data influx' },
      { label: 'Refresh Rate', value: '1.0s Real-time', detail: 'Ultra-low latency dashboard updates' },
      { label: 'Data Security', value: 'AES-256 / SSL', detail: 'End-to-end encrypted military-grade security' },
      { label: 'API Protocols', value: 'REST / gRPC', detail: 'Modern enterprise system integration support' },
      { label: 'SLA Guarantee', value: '99.99%', detail: 'Mission-critical cloud infrastructure availability' },
      { label: 'User Management', value: 'RBAC / SSO', detail: 'Granular access control and enterprise login' }
    ],
    ai: [
      { label: 'Error Rate', value: '< 0.2% SOH', detail: 'World-leading prediction precision' },
      { label: 'Model Type', value: 'Transformer-Base', detail: 'Advanced time-series deep learning architecture' },
      { label: 'Processing', value: 'Edge-Cloud Hybrid', detail: 'Local inference and global batch training' },
      { label: 'Detection Speed', value: 'Real-time', detail: 'Instant anomaly identification and reporting' },
      { label: 'Training Data', value: '10M+ Cycles', detail: 'Robust model trained on diverse global datasets' },
      { label: 'Early Warning', value: 'Max 30 mins', detail: 'Advance notice for thermal runaway events' }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section with dynamic background */}
      <section className={`relative ${isSoftware || isAI || isHardware ? 'h-[80vh] md:h-[85vh]' : 'pt-48 pb-32'} overflow-hidden bg-slate-50`}>
        {isSoftware ? (
          <>
            <iframe
              src="https://my.spline.design/infinity-nRoVLsc3U7iMCl4ArwLPPZzz/"
              title="Naranga Software 3D"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
              style={{ transform: 'scale(1.05)', transformOrigin: 'center' }}
            />
            {/* Prevent Spline from capturing wheel events while remaining visible */}
            <div className="absolute inset-0 z-10 bg-transparent" aria-hidden="true" />
          </>
        ) : isAI ? (
          <>
            <iframe
              src="https://my.spline.design/jennyai-yodEOwi9qXgXUTaaNCUImaCt/"
              title="Naranga AI 3D"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              width="100%"
              height="100%"
            />
          </>
        ) : isHardware ? (
          <iframe
            src="https://my.spline.design/interactive3dparallaxscene-4a15by3SAzPB979ldns3quOJ/"
            title="Naranga Hardware 3D"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
            style={{ transform: 'scale(1.15)', transformOrigin: 'center' }}
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px]" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8">
                <span className="text-blue-600 font-black tracking-widest uppercase text-xs">Innovation SBU</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
                {serviceId === 'hardware' && <><span className="text-blue-600">Naranga Edge</span><br />데이터의 본질을 담는 정밀 진단</>}
                {serviceId === 'software' && <><span className="text-blue-600">Naranga BaaS</span><br />지능형 관제로 가치를 연결하다</>}
                {serviceId === 'ai' && <><span className="text-blue-600">Naranga Brain</span><br />예측을 넘어 사고를 차단하다</>}
              </h1>
              <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
                {service.description}. 나랑가의 원천 기술이 집약된 {service.title} 솔루션을 통해 더 나은 에너지 생태계를 구축하세요.
              </p>
            </div>
          </>
        )}
      </section>

      {/* 2. Overview Section: Detailed Text and Image */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl aspect-[4/3] border-8 border-gray-50 group">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                <div className="absolute bottom-10 left-10 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/50">
                   <p className="text-[10px] text-blue-600 font-black tracking-widest uppercase mb-1">Standard Reference</p>
                   <p className="text-2xl font-black text-gray-950 italic">{service.title}</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                About the Solution
              </h2>
              <div className="space-y-6 text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-12">
                <p>{service.longDescription}</p>
                <p className="text-base text-gray-400">나랑가는 단순한 제품 공급을 넘어, 고객사의 비즈니스 모델에 최적화된 커스텀 통합 프로세스를 지원합니다. 데이터의 수집부터 분석, 최종 의사결정에 이르는 모든 단계를 당사의 솔루션이 함께합니다.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-lg transition-all">
                     <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                     </div>
                     <span className="text-gray-900 font-bold text-sm leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Technical Specifications (The \"More Detailed\" Part) */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Technical Specifications</h3>
             <div className="w-16 h-1 bg-blue-600 mx-auto" />
             <p className="text-gray-400 font-bold mt-4 uppercase text-[10px] tracking-widest">Enterprise Engineering Standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSpecs[serviceId].map((spec, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-xl group">
                 <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-2">{spec.label}</p>
                 <h4 className="text-2xl font-black text-gray-950 mb-3 group-hover:text-blue-600 transition-colors">{spec.value}</h4>
                 <p className="text-gray-400 text-sm font-medium leading-relaxed">{spec.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPageView;
