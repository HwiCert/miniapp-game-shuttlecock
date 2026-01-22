# Vird - Flappy Bird 웹 게임

React + TypeScript + Vite로 제작된 Flappy Bird 스타일 웹 게임입니다.
매일 동일한 난이도의 도전을 전 세계 플레이어와 공유하세요!

## 주요 기능

- 🐦 **Flappy Bird 스타일**: 귀여운 새와 파이프로 구성
- 🎲 **시드 기반 레벨 생성**: Mulberry32 PRNG 알고리즘 사용
- 📅 **데일리 챌린지**: 매일 자정(UTC) 동일한 레벨
- 🌍 **전 세계 동일 경험**: 모든 플레이어가 같은 장애물 배치
- ⚡ React 18 + TypeScript + Vite
- 📱 모바일 (Android, iOS) 완벽 지원
- 🎮 터치, 마우스, 키보드 입력 지원
- 🚀 메모리 최적화 및 성능 최적화
- 🎨 반응형 디자인
- 🔄 requestAnimationFrame 기반 부드러운 애니메이션

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 `http://localhost:3000`에서 실행됩니다.

모바일 테스트를 위해 네트워크 접근이 허용되어 있습니다. 같은 네트워크의 모바일 기기에서 접속 가능합니다.

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 게임 방법

- **시작**: 화면 클릭/터치 또는 스페이스바
- **조작**: 화면 클릭/터치 또는 스페이스바/위 화살표로 새 날갯짓
- **목표**: 파이프를 피하며 최대한 높은 점수 획득
- **챌린지**: 매일 새로운 레벨로 친구들과 점수 경쟁!

## 기술 스택

- **React 18**: 최신 React 기능 활용
- **TypeScript**: 타입 안정성
- **Vite**: 빠른 개발 환경
- **Mulberry32 PRNG**: 시드 기반 난수 생성 알고리즘
  - 빠르고 효율적인 32비트 PRNG
  - 동일 시드 → 동일 레벨 보장
  - 모바일 최적화
- **Custom Hooks**: 재사용 가능한 게임 로직
  - `useGameLoop`: requestAnimationFrame 기반 게임 루프
  - `useCollision`: 충돌 감지 로직

## 시드 기반 레벨 생성

### Mulberry32 알고리즘 선택 이유

1. **빠른 성능**: 모바일 환경에서도 빠른 난수 생성
2. **예측 가능성**: 동일 시드 입력 시 항상 동일한 시퀀스
3. **경량**: 메모리 사용량 최소화
4. **충분한 품질**: Flappy Bird 스타일 게임에 최적

### 데일리 시드

- **UTC 기준 자정**: 전 세계 동일 시간 기준
- **형식**: YYYYMMDD (예: 20260122)
- **자동 리셋**: 매일 자정에 새로운 레벨
- **재현 가능**: 같은 날짜 = 같은 레벨

```typescript
// 오늘의 시드 확인
const seedInfo = getTodaySeedInfo();
console.log(seedInfo); // { seed: 20260122, date: '2026-01-22' }
```

## 최적화

- `memo`를 통한 불필요한 리렌더링 방지
- `useCallback`을 통한 함수 메모이제이션
- `useRef`를 통한 불필요한 상태 업데이트 방지
- requestAnimationFrame cleanup으로 메모리 누수 방지
- CSS `will-change` 속성으로 애니메이션 최적화

## 모바일 지원

- 터치 이벤트 완벽 지원
- iOS Safari 주소창 대응
- 스크롤 방지 및 터치 피드백 제거
- 반응형 레이아웃

## 라이선스

MIT
