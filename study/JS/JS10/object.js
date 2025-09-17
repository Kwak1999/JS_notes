// Object.assign()
// 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사하고 대상 객체를 반환

// const target = {a: 1, b: 2}
// const source1 = {b: 3, c: 4}
// const source2 = {c: 5, d: 6}
// // const result = Object.assign(target, source1, source2)
//
// // target의 출력값을 유지하고 싶다면?
// // const result2 = Object.assign({}, target, source1, source2)
// // a:1, b:2
//
// // ...사용해보기
// const result = {
//     ...target,
//     ...source1,
//     ...source2
// }
// console.log(target)
// console.log(result)
//--------------------------------------------

// Object.entries()
// 주어진 객체의 각 속성과 값으로 하나의 배열 만들어 요소로 추가한 2차원 배열을 반환

// const user = {
//     name: 'heo',
//     age: 15,
//     isValid: true,
//     email: 'naver.com'
// }
//
// console.log(Object.entries(user))
//
// for(const [key, value] of Object.entries(user)){
//     console.log(key, value)
// }
/*
(2) ['name', 'heo']
(2) ['age', 15]
(2) ['isValid', true]
(2) ['email', 'naver.com']
main.js:36 name heo
main.js:36 age 15
main.js:36 isValid true
main.js:36 email naver.com */
//---------------------------------------------

// Object.keys()
// 주어진 객체의 속성 이름을 나열한 배열을 반환

// const user = {
//     name: 'heo',
//     age: 15,
//     isValid: true,
//     email: 'naver.com'
// }
//
// console.log(Object.keys(user))
// -----------------------------------------------

// Object.valuse()
// 주어진 객체의 속성 값을 나열한 배열을 반환

const user = {
    name: 'heo',
    age: 15,
    isValid: true,
    email: 'naver.com'
}

console.log(Object.values(user))