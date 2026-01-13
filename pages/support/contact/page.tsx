import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [inquirySource, setInquirySource] = useState<'individual' | 'corporate'>('corporate');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: '기술 문의',
    subject: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: [
            formData.company ? `회사명: ${formData.company}` : null,
            `문의 유형: ${formData.category}`,
            `제목: ${formData.subject}`,
            '',
            formData.message
          ].filter(Boolean).join('\n')
        })
      });

      if (!response.ok) {
        throw new Error('메일 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');
      }

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        category: '기술 문의',
        subject: '',
        message: '',
        consent: false
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error: any) {
      setErrorMessage(error.message || '메일 전송 중 문제가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen font-sans">
      {/* 1. Hero Section */}
      <section className="pt-56 pb-12 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 font-black tracking-[0.25em] uppercase text-[11px]">Direct Connection</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tighter">
            전문가와 <span className="text-blue-600">다이렉트</span>로 연결하세요
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            문의하신 내용은 기술지원 팀으로 즉시 전송되며,<br className="hidden md:block" /> 
            담당 엔지니어가 확인 후 신속하게 회신해 드립니다.
          </p>
        </div>
      </section>

      {/* 2. Unified Card Section - items-start로 변경하여 좌측 카드 늘어남 방지 */}
      <section className="container mx-auto px-6 pb-48">
        <div className="flex flex-col lg:flex-row gap-6 items-start max-w-7xl mx-auto">
          
          {/* Left: Info Side - 여백 대폭 삭제, padding 및 margin 최소화 */}
          <div className="lg:w-[340px] w-full flex flex-col gap-4 shrink-0">
            <div className="bg-blue-900 p-6 md:p-8 rounded-[2rem] shadow-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-white/10 transition-all" />
              
              <div className="mb-6">
                <h4 className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-3">Support Info</h4>
                <p className="text-2xl font-black mb-4 leading-tight">가장 빠른 응대,<br />다이렉트 채널</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-1 h-1 bg-blue-400 rounded-full" />
                    <span className="text-sm text-blue-100/80 font-bold">24시간 내 실시간 확인</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-1 h-1 bg-blue-400 rounded-full" />
                    <span className="text-sm text-blue-100/80 font-bold">전문 엔지니어 직접 회신</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-white/10">
                <p className="text-blue-300 text-[9px] font-black uppercase tracking-widest mb-1">Primary Email</p>
                <p className="text-base md:text-lg font-black text-white tracking-tighter truncate">business@naranga.com</p>
              </div>
            </div>
            
            <div className="p-6 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">운영 안내</h4>
              <p className="text-gray-600 text-sm font-bold leading-tight">
                <span className="block">평일 09:00 - 18:00</span>
                <span className="block text-gray-400 text-[11px] mt-0.5">주말 및 공휴일 휴무</span>
              </p>
            </div>
          </div>

          {/* Right: Form Side */}
          <div className="flex-grow bg-white p-8 md:p-14 rounded-[2.5rem] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
            {showSuccess && (
              <div className="absolute inset-0 bg-white/98 backdrop-blur-md z-50 flex items-center justify-center animate-fade-in px-6 text-center">
                <div className="max-w-md">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">문의 전송 완료</h3>
                  <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10">담당 전문가가 확인 후 메일로 회신 드리겠습니다.</p>
                  <button onClick={() => setShowSuccess(false)} className="px-14 py-4 bg-blue-600 text-white font-black text-base rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all">확인</button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[12px] font-black text-gray-900 uppercase tracking-widest block ml-1">문의 주체 <span className="text-blue-600">*</span></label>
                <div className="flex p-1 bg-gray-100 rounded-xl w-fit shadow-inner">
                  {['corporate', 'individual'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInquirySource(type as any)}
                      className={`px-8 py-2.5 rounded-[0.8rem] text-sm font-black transition-all duration-300 ${
                        inquirySource === type 
                          ? 'bg-white text-blue-600 shadow-md' 
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {type === 'corporate' ? '기업 문의' : '개인 문의'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-black text-gray-900 uppercase tracking-widest ml-1">
                    {inquirySource === 'corporate' ? '담당자 명' : '성함'} <span className="text-blue-600">*</span>
                  </label>
                  <input 
                    required 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder={inquirySource === 'corporate' ? '담당자 성함' : '성함'} 
                    className="w-full px-6 py-4 bg-gray-50 rounded-[1rem] border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all text-base font-medium placeholder:text-gray-300 shadow-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-black text-gray-900 uppercase tracking-widest ml-1">이메일 주소 <span className="text-blue-600">*</span></label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="example@company.com" className="w-full px-6 py-4 bg-gray-50 rounded-[1rem] border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all text-base font-medium placeholder:text-gray-300 shadow-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inquirySource === 'corporate' && (
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-gray-900 uppercase tracking-widest ml-1">회사명 <span className="text-blue-600">*</span></label>
                    <input required name="company" value={formData.company} onChange={handleChange} type="text" placeholder="소속 회사명" className="w-full px-6 py-4 bg-gray-50 rounded-[1rem] border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all text-base font-medium placeholder:text-gray-300 shadow-sm" />
                  </div>
                )}
                <div className={`space-y-2 ${inquirySource === 'individual' ? 'md:col-span-2' : ''}`}>
                  <label className="text-[12px] font-black text-gray-900 uppercase tracking-widest ml-1">문의 유형 <span className="text-blue-600">*</span></label>
                  <div className="relative">
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full px-6 py-4 bg-blue-50/50 rounded-[1rem] border-2 border-blue-100 focus:border-blue-600 focus:bg-white outline-none transition-all text-base font-bold text-blue-700 appearance-none cursor-pointer pr-14 shadow-sm">
                      <option>기술 문의</option><option>파트너십 제휴</option><option>보도 및 IR</option><option>채용 문의</option><option>기타</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-black text-gray-900 uppercase tracking-widest ml-1">제목 <span className="text-blue-600">*</span></label>
                <input required name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="문의 제목을 입력하세요" className="w-full px-6 py-4 bg-gray-50 rounded-[1rem] border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all text-base font-medium placeholder:text-gray-300 shadow-sm" />
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-black text-gray-900 uppercase tracking-widest ml-1">문의 내용 <span className="text-blue-600">*</span></label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="상세 문의 내용을 남겨주세요." className="w-full px-6 py-5 bg-gray-50 rounded-[1rem] border-2 border-transparent focus:border-blue-600 focus:bg-white outline-none transition-all text-base font-medium resize-none placeholder:text-gray-300 leading-relaxed shadow-sm" />
              </div>

              {errorMessage && (
                <div className="text-red-500 text-sm font-bold bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                  {errorMessage}
                </div>
              )}

              <div className="flex items-center gap-4 pt-2">
                <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer shadow-sm" />
                <label htmlFor="consent" className="text-sm text-gray-500 font-bold cursor-pointer select-none">개인정보 수집 및 이용 방침에 동의합니다. <span className="text-blue-600 underline underline-offset-4 ml-1">(필수)</span></label>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full py-5 rounded-[1.2rem] text-white font-black text-xl shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 shadow-blue-100'}`}>
                {isSubmitting ? (
                  <span className="flex items-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    전송 중...
                  </span>
                ) : '문의하기 전송'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ContactPage;
