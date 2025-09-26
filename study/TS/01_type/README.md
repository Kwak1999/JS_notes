
# TypeScript 타입 & 타입 추론 예제 모음

이 폴더에는 TypeScript의 **타입 지정, 타입 확장, 타입 추론** 예제가 포함돼 있습니다.

## 파일 목록

- **01_Types.ts**
    - 기본 타입(`string`, `number`, `boolean`, `null`, `undefined`) 선언
    - JS와 차이점: TypeScript에서는 변수 선언 시 타입을 명시할 수 있음
    - **예문:**
        - JS: `let name = 'Alice'`
        - TS: `let name: string = 'Alice'`

- **02_Types.ts**
    - 배열 타입(`string[]`, `number[]`), 튜플, 유니언(`|`), `any`, `unknown`, `void`, `never` 등 확장된 타입
    - JS와 차이점: `unknown` / `never` 같은 안전성 보장 타입 존재
    - **예문:**
        - JS: `let arr = [1, 2, 3]`
        - TS: `let arr: number[] = [1, 2, 3]`

- **Inference.ts**
    - 타입 추론(Type Inference) 기본 원리
    - 변수에 초기값을 지정하면 TS가 자동으로 타입을 추론함
    - JS와 차이점: JS는 런타임까지 타입을 알 수 없지만, TS는 컴파일 단계에서 추론함
    - **예문:**
        - TS: `let age = 20` → `age`는 자동으로 `number` 타입으로 추론됨
        - JS: 타입 정보 없음

---

이 폴더는 JavaScript 대비 **TypeScript의 타입 지정·타입 안정성·추론 기능**을 빠르게 복습할 수 있도록 구성돼 있습니다.
