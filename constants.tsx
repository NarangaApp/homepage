
import { NavItem, Service, Award, Partner, TeamMember } from './types';

export const NAV_LINKS: NavItem[] = [
  { 
    label: '회사소개', 
    href: '/company/greeting',
    children: [
      { label: '인사말', href: '/company/greeting' },
      { label: '사업분야', href: '/company/business' },
      { label: '회사연혁', href: '/company/history' },
      { label: '보도자료', href: '/company/press' },
    ]
  },
  { 
    label: '프로덕트', 
    href: '/products/problem',
    children: [
      { label: '문제 인식', href: '/products/problem' },
      { label: 'AI 솔루션', href: '/products/ai' },
      { label: '소프트웨어', href: '/products/software' },
      { label: '하드웨어', href: '/products/hardware' },
    ]
  },
  { 
    label: '기술 및 인증', 
    href: '/certificate',
    children: [
      { label: '인증', href: '/certificate' },
      { label: '기술 및 특허', href: '/patents' },
    ]
  },
  { 
    label: '고객지원', 
    href: '/support/faq',
    children: [
      { label: '자주하는 질문', href: '/support/faq' },
      { label: '고객 문의', href: '/support/contact' },
    ]
  },
  { label: '오시는길', href: '/location' },
];

export const SERVICES: Service[] = [
  {
    id: 'ai',
    title: 'AI',
    description: '미래의 위험을 사전에 차단하는 지능형 판단 엔진',
    longDescription: 'Naranga Brain AI는 나랑가만의 원천 기술인 "Digital Twin Physics-AI" 모델이 탑재된 지능형 엔진입니다. 배터리 내부의 화학적 노화 과정을 가상 세계에 구현하여 99.8%의 정확도로 수명을 예측합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Transformer 기반 시계열 학습',
      '하이브리드 물리-AI 모델',
      '이상 징후 자동 탐지',
      '초정밀 SOH 예측 시스템'
    ]
  },
  {
    id: 'software',
    title: '소프트웨어',
    description: '데이터를 비즈니스 가치로 변환하는 클라우드 통합 소프트웨어',
    longDescription: 'Naranga BaaS Suite는 수백만 대의 배터리 자산을 실시간으로 관리할 수 있는 클라우드 네이티브 플랫폼입니다. 직관적인 대시보드를 통해 배터리 수명(SOH), 충전 상태(SOC) 및 이상 징후를 시각화합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    features: [
      'MSA 기반 무한 확장성',
      '실시간 분석 엔진 탑재',
      '엔터프라이즈 API 제공',
      'ISO/IEC 27001 보안 준수'
    ]
  },
  {
    id: 'hardware',
    title: '하드웨어',
    description: '실시간 데이터를 수집하는 초정밀 엣지 진단 하드웨어',
    longDescription: 'Naranga Edge-H1은 배터리 팩 내부의 물리적 변화를 0.1mV 단위로 감지하는 하이엔드 수집 장치입니다. 자동차 기능 안전 표준(ISO 26262)을 준수하며, 엣지 컴퓨팅을 통해 로우 데이터를 1차 가공하여 전송 효율을 극대화합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    features: [
      'CAN-FD / LIN 통신 지원',
      '고정밀 동시 샘플링 (1kHz)',
      'AEC-Q100 자동차 등급 인증',
      'IP6K9K 방진/방수 등급'
    ]
  }
];

export const AWARDS: Award[] = [
  { id: 1, year: '2024', title: 'CES 혁신상 수상', issuer: 'CTA', description: '차세대 AI 소프트웨어 부문' },
  { id: 2, year: '2023', title: '국가 산업 혁신 대상', issuer: '산업통상자원부', description: 'AI 솔루션 선도 기업 선정' },
  { id: 3, year: '2023', title: '보유기술 특허 50건 달성', issuer: '특허청', description: '원천 알고리즘 기술 경쟁력 확보' },
];

export const PARTNERS: Partner[] = [
  { id: 1, name: 'Samsung', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { id: 2, name: 'Hyundai', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg' },
  { id: 3, name: 'Google', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
];

export const ROLLING_PARTNERS: Partner[] = [
  { id: 5, name: 'Tesla', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
  { id: 6, name: 'Nvidia', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
  { id: 7, name: 'Microsoft', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { id: 8, name: 'Intel', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: '이충현',
    role: 'CEO & Founder',
    bio: 'AI와 데이터 기술을 기반으로 신뢰할 수 있는 판단 기준을 연구·개발하는 나랑가의 리더입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Sarah Chen',
    role: 'Technology Officer',
    bio: '나랑가의 핵심 AI 알고리즘 설계를 주도하며 기술의 완성도를 책임집니다.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Marcus Weber',
    role: 'Software Engineer',
    bio: '사용자 친화적이고 안정적인 소프트웨어 아키텍처를 구축합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRESS_RELEASES = [
  {
    id: 2,
    title: "나랑가, AI 중고차 혁신으로 창업 경진대회 2관왕 달성!",
    date: "2025.06.30",
    category: "수상",
    excerpt: "AI 기반 중고차 동행 서비스로 북구·중구 창업아이디어 경진대회에서 모두 최우수상을 수상했습니다.",
    content: `인공지능(AI) 기반 중고차 동행 서비스 스타트업 나랑가는 제4회 북구 창업아이디어 경진대회와 2024 중구 청년디딤터 제2회 창업 아이디어 경진대회에서 각각 최우수상을 수상했습니다. 나랑가는 AI를 활용해 차량 문제를 사전 예측하고 허위 매물을 예방하며, 전문가 동행 점검과 감가 금액 추천 기능을 제공하는 플랫폼입니다. 이충현 대표는 “기술력과 시장성을 공식적으로 인정받은 결과”라며 “AI 기반 동행 서비스를 고도화하고 R&D·정부 과제를 활용해 시장을 넓히겠다”고 밝혔습니다.`,
    imageUrl: "/images/naranga_thumbnail.png",
    sourceName: "스타트업 데일리",
    sourceUrl: "https://www.startupdaily.kr/news/articleView.html?idxno=7181"
  },
  {
    id: 1,
    title: "나랑가, 혁신적인 AI 기반 중고차 전문가 구매 동행 서비스 출범",
    date: "2024.05.22",
    category: "서비스",
    excerpt: "AI 동행으로 중고차 거래의 투명성과 안전성을 높이는 나랑가 서비스가 공식 출범했습니다.",
    content: `AI 기술을 활용한 중고차 구매 동행 서비스 '나랑가'가 새롭게 출범했습니다. 중고차 거래의 투명성과 안전성을 높이기 위한 기능을 제공하며 시장의 새로운 패러다임을 제시합니다.

나랑가는 2023년 설립 이후 AI 기반으로 중고차 시장의 문제점을 해결하고 신뢰할 수 있는 서비스를 제공해 왔습니다. 2024년 청년창업 사관학교 협약과 울산 청년 CEO 협약 등 다양한 지원을 통해 성장하고 있습니다.

중고차 적정 가격 산출, AI 기반 허위매물 조회 등 특허 출원을 진행하며 기술력을 인정받고 있습니다. 이충현 대표는 “AI로 거래의 투명성과 안전성을 획기적으로 향상시키겠다”며 “증강현실을 활용한 차량 점검 등 기술 고도화를 이어갈 것”이라고 밝혔습니다.`,
    imageUrl: "/images/naranga_thumbnail.png",
    sourceName: "스타트업 데일리",
    sourceUrl: "https://www.startupdaily.kr/news/articleView.html?idxno=7181"
  }
];
