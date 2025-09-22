// DOM(Document Object Model)

// DOM이란 HTML 문서를 객체로 표현한 것,
// JS에서 HTML을 제어할 수 있게 해줌

// const element = document.querySelector('h1')
// console.log(element.textContent)

// Node vs Element

// - 노드: HTML 요소, 텍스트, 주석 등 모든 것을 의미
// - 요소: HTML 요소를 의미

// // class="parent"인 요소 선택
// const parent = document.querySelector('.parent')
//
// // 부모 요소의 모든 자식 노드 확인
// console.log(parent.childNodes)
//
// // 부모 요소의 모든 자식 요소 확인
// console.log(parent.children)

// // 객체 구조로 parent 요소 출력 (이벤트, 프로퍼티 등 포함된 자세한 정보 확인 가능)
// console.dir(parent)

// Node 클래스 정의
class N {}

// N을 상속받은 Element 클래스 정의
class E extends N {}

console.dir(E)                // 클래스 E 자체 출력 (함수)
console.dir(N)                // 클래스 N 자체 출력 (함수)
console.dir(E.__proto__)      // E의 부모 = N (E의 prototype chain 확인)

// 아래는 브라우저 환경에서 DOM API로 제공되는 실제 클래스들
console.dir(Element)          // 실제 HTML 요소의 생성자 클래스
console.dir(Node)             // 모든 DOM 노드의 최상위 클래스
console.dir(Element.__proto__) // Element의 상속 구조 확인 (→ Node)