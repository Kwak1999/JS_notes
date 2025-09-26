# JavaScript 클로저·메모리 관리 예제 모음

이 폴더에는 JavaScript의 **클로저, 가비지 컬렉션, 메모리 누수**를 다루는 예제가 포함돼 있습니다.

## 파일 목록

- **Closuer.js**
    - **클로저(Closure)** 개념 및 사용 예시
    - 함수가 렉시컬 스코프를 기억해 상태를 유지하는 패턴
    - `createToggleHandler()`로 각 요소에 독립 상태를 가진 토글 핸들러 구현:contentReference[oaicite:0]{index=0}

- **Garbage_Collection.js**
    - 자바스크립트의 자동 메모리 관리(Garbage Collection) 개념
    - `delete`로 참조를 제거해 메모리에서 수거될 수 있도록 하는 예제:contentReference[oaicite:1]{index=1}

- **Memory_Leak.js**
    - 메모리 누수(Memory Leak)의 주요 원인:
        - 불필요한 전역 변수
        - 분리된 노드 참조
        - 해제하지 않은 타이머
        - 잘못된 클로저 사용
    - `setInterval`과 `clearInterval`로 누수 방지
    - 클로저 예제 및 주의사항:contentReference[oaicite:2]{index=2}

---

이 폴더는 JavaScript의 **클로저 동작·메모리 관리·누수 방지 패턴**을 빠르게 복습할 수 있도록 구성돼 있습니다.
