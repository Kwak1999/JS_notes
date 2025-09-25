/// 불변성 & 가변성

// 불변성(Immutability)은 생성된 데이터가 메모리에서 변경되지 않고,
// 가변성(Mutability)은 생성된 데이터가 메모리에서 변경될 수 있음을 의미합니다.

// 자바스크립트 원시값은 불변성을, 참조값은 가변성을 가지고 있습니다.

let a = 1
let b = a         // b는 a의 '값'을 복사함

b = 2             // b를 바꿔도 a에는 영향 없음

console.log(b)    // 2
console.log(a)    // 1

console.log('----------------------------')

// 참조값은 가변성을 가진다 (주소 복사됨)
let a = {x: 1}
let b = a         // b는 a의 '주소(참조)'를 복사함

b.x = 2           // b를 통해 객체 내부 값을 변경

console.log(b)    // {x: 2}
console.log(a)    // {x: 2} —> a도 함께 바뀜

a.x = 7           // a를 통해 바꿔도

console.log(b)    // {x: 7}
console.log(a)    // {x: 7} —> b도 함께 바뀜 (같은 객체 참조)

console.log('-----------------------------')

// 객체는 생김새가 같아도 서로 다른 참조를 가진다
let a = {x: 1}
let b = {x: 1}

console.log(a === b) // false —> 다른 객체이기 때문

b.x = 2

console.log(b)    // {x: 2}
console.log(a)    // {x: 1} —> 서로 영향 없음

console.log({} === {}) // false —> 매번 새 객체이기 때문

console.log('-----------------------------')

// 배열도 참조값이다 (객체처럼 동작함)
let a = [1, 2, 3]
let b = a         // b는 a와 같은 배열을 참조

b[0] = 4          // 배열의 값을 변경

console.log(b)    // [4, 2, 3]
console.log(a)    // [4, 2, 3] —> 같은 배열 참조이므로 둘 다 바뀜
