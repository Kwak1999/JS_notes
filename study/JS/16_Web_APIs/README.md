# JavaScript 브라우저 API & History 예제 모음

이 폴더에는 JavaScript의 **콘솔, 쿠키·스토리지, Location, History, 해시 기반 라우팅** 예제가 포함돼 있습니다.

## 파일 목록

- **01_console.js**  
  콘솔 메서드:
    - `console.log` / `warn` / `error` / `dir`
    - `console.count` / `countReset`
    - `console.time` / `timeEnd`
    - `console.trace` / `console.clear`
    - 서식문자 `%s` `%o` `%c`로 문자열·객체·스타일 출력:contentReference[oaicite:0]{index=0}

- **02_cookie_storage.js**  
  브라우저 저장소:
    - `document.cookie`로 쿠키 설정·조회·파싱
    - `localStorage` / `sessionStorage`로 데이터 저장·조회·삭제:contentReference[oaicite:1]{index=1}

- **03_Location.js**  
  `location.href` / `protocol` / `hostname` / `pathname` / `hash` 등 현재 페이지 URL 정보, `assign` / `replace` / `reload` 예제:contentReference[oaicite:2]{index=2}

- **04_History.js**  
  `history.length` / `back` / `forward` / `go` / `pushState` / `replaceState` 등 브라우저 히스토리 제어:contentReference[oaicite:3]{index=3}

- **05_History.js**  
  해시 기반 라우팅 구현:
    - `pages` 배열과 `render()` 함수로 페이지 템플릿 변경
    - `window.addEventListener('popstate', render)`로 뒤로가기/앞으로가기 처리
    - `history.pushState`로 페이지 이동 및 데이터 전달:contentReference[oaicite:4]{index=4}

---

이 폴더는 JavaScript의 **브라우저 API·URL/히스토리 관리·간단한 SPA 라우팅**을 빠르게 복습할 수 있도록 구성돼 있습니다.
