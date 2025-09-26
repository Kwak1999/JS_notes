# TypeScript 설정 & 제네릭·모듈 예제 모음

이 폴더에는 TypeScript의 **컴파일러 설정(tsconfig.json)**과 **모듈·제네릭·패키지 선언** 예제가 포함돼 있습니다.

## 설정 파일

- **tsconfig.json**
    - TypeScript 컴파일러 설정 파일
    - 주요 옵션:
        - `"target": "ES3"` → 컴파일 후 JS 버전 (ES2015 이상 권장):contentReference[oaicite:0]{index=0}
        - `"module": "CommonJS"` → 모듈 시스템
        - `"strict": false` → 엄격한 타입 검사 비활성화 (학습용)
        - `"include"` / `"exclude"` → 컴파일할 파일·제외할 파일 경로
    - JS와 차이점: JS는 트랜스파일이 필요 없지만 TS는 `tsconfig.json`으로 JS로 변환·타입 체크

---

## 파일 목록

- **export_import.ts**
    - `export` / `import`로 모듈 간 코드·타입 공유
    - **예문:**
      ```ts
      // a.ts
      export const name: string = 'Neo'
      // b.ts
      import { name } from './a'
      ```

- **Generic_Class.ts**
    - 제네릭 클래스: 타입 파라미터로 다양한 타입 처리
    - **예문:**
      ```ts
      class Box<T> { constructor(public content: T) {} }
      const box = new Box<string>('hi')
      ```

- **Generic_function.ts**
    - 제네릭 함수: 호출 시점에 타입 결정
    - **예문:**
      ```ts
      function identity<T>(v: T): T { return v }
      const num = identity<number>(123)
      ```

- **Generic_Interface.ts**
    - 제네릭 인터페이스: API 응답, 상태관리 등 타입 안정성 확보
    - **예문:**
      ```ts
      interface ApiResponse<T> { data: T; status: number }
      ```

- **Package_Declaration.ts**
    - `declare module`로 외부 패키지 타입 선언
    - **예문:**
      ```ts
      declare module 'myLib' {
        export function myFunc(): void
      }
      ```

---

이 폴더는 JavaScript 대비 **TypeScript의 설정 파일(tsconfig.json)·제네릭·모듈·타입 선언**을 빠르게 복습할 수 있도록 구성돼 있습니다.
