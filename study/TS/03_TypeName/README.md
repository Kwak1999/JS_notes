# TypeScript 고급 타입 & 함수 예제 모음 (2)

이 폴더에는 TypeScript의 **함수 오버로딩, this 타입, 타입 별칭** 예제가 포함돼 있습니다.

## 파일 목록

- **Oveloading.ts**
    - 함수 오버로딩(Function Overloading): 하나의 함수가 여러 시그니처를 가질 수 있음
    - JS와 차이점: JS에는 오버로딩 개념이 없으며 TS에서만 컴파일 시점에 체크
    - **예문:**
        - TS:
          ```ts
          function greet(name: string): string
          function greet(age: number): string
          function greet(value: any): string {
            return `Hello ${value}`
          }
          ```

- **thisType.ts**
    - `this` 타입 지정: 함수 내부 `this`를 명확히 선언 가능
    - JS와 차이점: TS에서만 `this` 타입을 명시해 안정성 확보
    - **예문:**
        - TS:
          ```ts
          function say(this: {name: string}) {
            console.log(this.name)
          }
          ```

- **TypeAlias.ts**
    - 타입 별칭(Type Alias): `type` 키워드로 새로운 타입 정의
    - JS와 차이점: TS에서만 가능, 여러 타입을 조합하거나 간결하게 재사용 가능
    - **예문:**
        - TS:
          ```ts
          type User = { name: string; age: number }
          const u: User = { name: 'Neo', age: 30 }
          ```

---

이 폴더는 JavaScript 대비 **TypeScript의 함수 오버로딩·this 타입·타입 별칭**을 빠르게 복습할 수 있도록 구성돼 있습니다.
