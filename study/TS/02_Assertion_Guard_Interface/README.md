# TypeScript 고급 타입 & 인터페이스 예제 모음

이 폴더에는 TypeScript의 **타입 단언, 인터페이스, 타입 가드** 예제가 포함돼 있습니다.

## 파일 목록

- **Assertion.ts**
    - 타입 단언(Type Assertion): `as` 또는 `<타입>` 구문을 사용해 강제로 타입 지정
    - JS와 차이점: JS에는 타입 단언이 없으며 TS만의 문법
    - **예문:**
        - TS: `const el = document.querySelector('div') as HTMLDivElement`
        - JS: 타입 추론 불가

- **Interface_Basic.ts**
    - 인터페이스 기본 문법: `interface`로 객체 구조 정의
    - JS와 차이점: TS에서만 존재하는 개념, 객체의 형태를 강제 가능
    - **예문:**
        - TS:
          ```ts
          interface User { name: string; age: number }
          const u: User = { name: 'Alice', age: 20 }
          ```

- **Interface_Expansion.ts**
    - 인터페이스 확장(상속): `extends`로 기존 인터페이스 확장
    - **예문:**
        - TS:
          ```ts
          interface Animal { name: string }
          interface Dog extends Animal { bark(): void }
          ```

- **Interface_function.ts**
    - 함수 타입 인터페이스: 매개변수·리턴값 타입 지정
    - **예문:**
        - TS:
          ```ts
          interface Add { (a: number, b: number): number }
          const sum: Add = (x, y) => x + y
          ```

- **Interface_Indexable.ts**
    - 인덱서블(Indexable) 타입: 배열/객체 인덱스 타입 지정
    - **예문:**
        - TS:
          ```ts
          interface StringArray { [index: number]: string }
          const arr: StringArray = ['a', 'b']
          ```

- **TypeGuard.ts**
    - 타입 가드(Type Guard): `typeof`, `instanceof`, 사용자 정의 가드로 타입 분기 처리
    - JS와 차이점: JS는 런타임만 체크 가능하지만, TS는 컴파일 시점에 타입 분리
    - **예문:**
        - TS:
          ```ts
          function isString(value: unknown): value is string {
            return typeof value === 'string'
          }
          ```

---

이 폴더는 JavaScript 대비 **TypeScript의 타입 안전성·인터페이스 확장·타입 가드**를 빠르게 복습할 수 있도록 구성돼 있습니다.
