# 월간 구독 서비스 트래커 개발 일지

## Day 1 (2025-10-23)

### 작업 내용
- Vite + React + TS + Tailwind 프로젝트 초기 설정 완료
- Subscription 타입 정의 (`types.ts`), `App.tsx` 기본 뼈대 및 LocalStorage 연동 로직 구현 (AI-assisted) (2025-10-23 23:35:59 KST)
  - 결과 및 수정사항: `App.css` 파일 수동 삭제, GitHub에 'feat: Add Subscription type...' 커밋 푸시 완료
- 구독 추가 폼 컴포넌트 (`SubscriptionForm.tsx`) 생성 (AI-assisted) (2025-10-23 23:42:41 KST)
  - Gemini CLI 사용 프롬프트: `SubscriptionForm.tsx 파일을 생성해 줘...`
- `App.tsx`에 `SubscriptionForm` 연동 및 구독 추가 로직 구현 (AI-assisted) (2025-10-23 23:46:11 KST)
  - Gemini CLI 사용 프롬프트: `src/App.tsx 파일을 수정해 줘...`
- 구독 목록 표시 컴포넌트 (`SubscriptionList.tsx`) 생성 (AI-assisted) (2025-10-23 23:55:00 KST)
  - Gemini CLI 사용 프롬프트: `src/components 폴더 안에 'SubscriptionList.tsx' 파일을 생성해 줘...`
  - `App.tsx`에 `SubscriptionList` 연동하여 구독 목록 표시 (AI-assisted) (2025-10-23 23:58:00 KST)
  - Gemini CLI 사용 프롬프트: `src/App.tsx 파일을 수정해 줘...`

### 작업 내용
- Create(폼) 및 Read(목록) 기능 완성.

### 주요 도전 과제 및 해결 방법
- 문제: Vite/WSL의 유령 캐시로 인해 types.ts import 오류가 무한 반복됨. 해결: types.ts 파일을 삭제하고, 각 컴포넌트 내부에 Subscription 인터페이스를 직접 정의하여 import/export 오류를 원천 차단함.

## Day 2 (2025-10-24)

### 작업 내용
- `App.tsx`에 `SubscriptionList` 컴포넌트 임포트 및 렌더링 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `src/App.tsx 파일을 수정해 줘. 1. 'SubscriptionList' 컴포넌트를 임포트해...`
- `App.tsx`에 구독 삭제 기능 (`handleDeleteSubscription`) 구현 및 `SubscriptionList`에 전달 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `src/App.tsx 파일을 수정해 줘. 1. 'handleDeleteSubscription'이라는 새 함수를 만들어 줘...`
- 개발 일지 업데이트 및 시간 기준 KST로 변경 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `자료 변경로그를 업데이트 해줘` 및 `그리고 모든 로그의 시간기준을 kst로 바꾸어`