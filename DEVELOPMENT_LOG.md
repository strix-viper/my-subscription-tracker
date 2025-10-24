rm -rf node_modules/.vite# 월간 구독 서비스 트래커 개발 일지

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
- `src/components/SubscriptionList.tsx`에 `onDeleteSubscription` prop 추가 및 삭제 버튼 기능 구현 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `src/components/SubscriptionList.tsx 파일을 수정해 줘. 1. props 인터페이스에 'onDeleteSubscription' 함수를 추가해 줘...`
- `App.tsx`에 `editingSubscriptionId` state 추가 및 `SubscriptionList`에 `onEditClick` prop으로 전달 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `src/App.tsx 파일을 수정해 줘. 1. 'editingSubscriptionId'라는 새 React state를 추가해 줘...`
- `src/components/SubscriptionList.tsx`에 `onEditClick` prop 추가 및 수정 버튼 기능 구현 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `src/components/SubscriptionList.tsx 파일을 수정해 줘. 1. props 인터페이스에 'onEditClick' 함수를 추가해 줘...`
- `App.tsx`의 `onAddSubscription` 함수를 `handleSaveSubscription`으로 리팩토링하여 추가/수정 로직 통합 및 `SubscriptionForm` props 업데이트 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `src/App.tsx 파일을 수정해 줘. 1. 'onAddSubscription' 함수의 이름을 'handleSaveSubscription'으로 변경해 줘...`
- `src/components/SubscriptionForm.tsx` 수정: `useEffect`를 이용한 폼 초기화/데이터 로드, `onSaveSubscription` 및 `onCancelEdit` prop 추가, 조건부 버튼 렌더링 및 스타일링 구현 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `src/components/SubscriptionForm.tsx 파일을 수정해 줘. 1. React의 'useEffect'를 임포트해 줘...`
- `App.tsx`에 `sortOrder` state 및 `sortedSubscriptions` `useMemo` 훅 추가, `SubscriptionList`에 정렬된 구독 목록 전달 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `src/App.tsx 파일을 수정해 줘. 1. React에서 'useMemo'를 임포트해 줘...`
- `App.tsx`에 정렬 기준 선택 (`select` 태그) UI 추가 및 `sortOrder` state와 연동 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `src/App.tsx 파일을 수정해 줘. 1. 'SubscriptionForm'과 'SubscriptionList' 컴포넌트 렌더링 **사이**에 'div' 태그를 추가해 줘...`
- 반응형 인터페이스 개선 (AI-assisted) (2025-10-24 00:00:00 KST)
  - `App.tsx`: `h1` 태그 반응형 레이아웃 적용 (모바일 세로, sm 이상 가로)
    - Gemini CLI 사용 프롬프트: `src/App.tsx 파일을 수정해 줘. 1. 'h1' 태그의 'flex justify-between items-center' 클래스를 'flex flex-col sm:flex-row sm:justify-between sm:items-center'로 변경해 줘...`
  - `src/components/SubscriptionForm.tsx`: 입력 필드 및 버튼 그룹 반응형 레이아웃 적용
    - Gemini CLI 사용 프롬프트: `src/components/SubscriptionForm.tsx 파일을 수정해 줘. 1. 폼 내부의 입력 필드들을 감싸는 'div' 태그가 'flex'나 'grid'로 되어 있다면...`
  - `src/components/SubscriptionList.tsx`: 리스트 아이템 내부 반응형 레이아웃 적용
    - Gemini CLI 사용 프롬프트: `src/components/SubscriptionList.tsx 파일을 수정해 줘. 1. 리스트 아이템 내부(bg-gray-800)의 'name', 'cost', 'date'와 '버튼 그룹'을 감싸는 'div' 태그에 'flex flex-col sm:flex-row sm:justify-between sm:items-center' 클래스를 적용해 줘...`
- 프로젝트 루트에 `README.md` 파일 생성 및 프로젝트 정보, 기능, 기술 스택, 설치/실행 방법, AI 활용 방법 등 작성 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `프로젝트 루트에 README.md 파일을 생성해 줘...`
- `src/components/Button.tsx` 컴포넌트 생성 및 `variant` prop에 따른 동적 스타일링 구현 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `src/components 폴더 안에 'Button.tsx' 파일을 새로 생성해 줘...`
- `src/components/Button.tsx`에 `success` variant 추가 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `src/components/Button.tsx 파일을 수정해 줘. 1. 'variant' prop의 타입을 'primary', 'secondary', 'danger', 'warning'에 'success'를 추가해 줘...`
- `src/components/SubscriptionForm.tsx`의 버튼들을 `Button` 컴포넌트로 교체 (AI-assisted) (2025-10-24 00:00:00 KST)
  - Gemini CLI 사용 프롬프트: `src/components/SubscriptionForm.tsx 파일을 수정해 줘. 1. './Button'에서 'Button' 컴포넌트를 임포트해 줘...`
- 재사용 가능한 Button 컴포넌트 생성 및 적용, 깔끔한 카드(Card) 디자인 적용으로 사용자 경험 개선 (AI-assisted) (2025-10-24 14:34:57 KST)
- UX 개선: 금액 입력 필드 컴포넌트 분리 및 적용 완료. (AI-assisted) (2025-10-24 14:37:52 KST)
  - 결과 및 수정사항: CurrencyInput 컴포넌트를 생성하여 월간 비용 입력 시 쉼표 포맷팅 및 숫자 관리를 개선함 (AI-assisted).
- 코드 품질 개선: React DOM 경고 수정 완료. (AI-assisted) (2025-10-24 14:42:53 KST)
  - 결과 및 수정사항: JSX에서 잘못 사용된 'class' 속성을 'className'으로 일괄 변경하여 콘솔 경고를 제거함 (AI-assisted).
- UI 리팩토링: 인스타그램 스타일의 현대적 디자인 적용 완료. (AI-assisted) (2025-10-24 14:55:34 KST)
  - 결과 및 수정사항: 컨테이너 축소 및 중앙 정렬, 목록 아이템을 피드 카드처럼 보이게 디자인하여 시각적 매력을 높임 (AI-assisted).
- 문서화 개선: GEMINI.md에 AI 활용 결과 기록 완료. (AI-assisted) (2025-10-24 15:15:00 KST)
  - 결과 및 수정사항: 실제 프로젝트에서 효과적이었던 프롬프트 패턴 및 검증 사례를 명시하여 문서 완성도를 높임 (AI-assisted).