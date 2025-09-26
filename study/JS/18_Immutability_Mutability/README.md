# JavaScript 불변성·가변성 & 깊은 복사 예제 모음

이 폴더에는 JavaScript의 **불변성/가변성, 얕은 복사·깊은 복사**를 다루는 예제가 포함돼 있습니다.

## 파일 목록

- **Immutability_Mutability.js**
    - 원시값은 불변성(Immutability), 참조값은 가변성(Mutability) 설명
    - 같은 객체/배열을 참조할 때 값이 함께 바뀌는 동작 확인
    - 서로 다른 객체는 생김새가 같아도 `===` 비교 시 `false` 나오는 예제:contentReference[oaicite:0]{index=0}

- **CloneDeep.js**
    - `Object.assign`, 전개 연산자(`...`)로 얕은 복사
    - `lodash/cloneDeep`으로 깊은 복사하여 중첩 객체·배열 완전 분리
    - 얕은 복사와 깊은 복사의 차이점 시연:contentReference[oaicite:1]{index=1}

---

이 폴더는 JavaScript의 **데이터 복사·참조·불변성/가변성**을 빠르게 복습할 수 있도록 구성돼 있습니다.
