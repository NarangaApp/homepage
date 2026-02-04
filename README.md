<div align="center">
  <img width="1200" height="475" alt="Naranga Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 나랑가 홈페이지 제작
나랑가의 브랜드 가치를 전달하고, 방문자가 서비스 소개를 빠르게 이해하고 문의할 수 있게 만든 랜딩 페이지입니다.

## 기술 스택 (Tech Stack)
**Frontend**
- React 19
- Vite
- TypeScript
- React Router
- Spline (3D)

**Backend (Serverless)**
- Vercel Serverless Functions (Node.js)
- SendGrid Mail API

**DevOps**
- Vercel (배포)

## 주요 기능 (Key Features)
- 제품/서비스 섹션 소개용 랜딩 페이지 구성
- 3D Spline 씬을 활용한 비주얼 히어로 영역
- 문의 폼 제출 시 SendGrid로 메일 전송

## 시작하기 (Getting Started)
**Prerequisites**
- Node.js v18 이상

**Installation**
```bash
npm install
```

**Environment Variables**
`.env.local` 예시:
```bash
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_TO_EMAIL=team@example.com
SENDGRID_FROM_EMAIL=no-reply@example.com
```

**Execution**
```bash
npm run dev
```

## 프로젝트 구조 (Project Structure)
```plaintext
api/
  send-contact.ts       # 문의 메일 전송 API (Vercel 함수)
components/             # 재사용 컴포넌트
pages/                  # 페이지 섹션/라우팅 구성
public/                 # 정적 자산
src/
  index.css             # 글로벌 스타일
utils/
  sendGrid.ts           # SendGrid 연동 유틸
```

## 아키텍처 및 설계 (Optional)
- 클라이언트는 문의 폼을 제출하면 `api/send-contact.ts`로 요청을 보냅니다.
- 서버리스 함수는 SendGrid를 통해 메일을 발송합니다.
- 배포는 Vercel 환경을 기준으로 동작합니다.

## 기여 방법 및 라이선스 (Contributing & License)
**Contributing**
- 이슈 등록 후 PR을 보내주세요.
- 가능한 한 작은 단위의 변경으로 제안해주세요
