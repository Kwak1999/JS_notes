# TypeScript 클래스 예제

이 파일은 TypeScript의 **클래스(class)** 개념을 다루는 예제입니다.

## 파일 목록

- **Class.ts**
    - 클래스(Class)와 생성자(Constructor), 접근 제한자(public, private, protected), readonly, 상속(extends) 사용
    - JS와 차이점:
        - TS는 **접근 제한자**(`public`, `private`, `protected`)와 `readonly`를 클래스 프로퍼티에 직접 지정 가능
        - **타입 지정**으로 클래스 내부 속성과 메서드의 안정성을 확보
    - **예문:**
        - JS:
          ```js
          class User {
            constructor(name) {
              this.name = name
            }
          }
          ```
        - TS:
          ```ts
          class User {
            constructor(public name: string) {} // public + 타입 지정
          }
          ```

---

이 파일은 JavaScript 대비 **TypeScript 클래스의 접근 제한자·타입 안정성**을 빠르게 복습할 수 있도록 구성돼 있습니다.
