// find()
// 대상 배열에서 콜백 테스트를 통화하는 첫 번째 요소를 반환
// const arr = [5, 8, 130, 12, 44]
// const foundItem = arr.find(item => item > 10)
//
// console.log(foundItem) // 130
//
// const users = [
//     {name: 'neo', age: 15},
//     {name: 'any', age: 22},
//     {name: 'leo', age: 85}
// ]
//
// const foundUser = users.find(user => user.name === 'any')
// console.log(foundUser)
//--------------------------------------------

// findIndex()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소의 인덱스를 반환

// const arr = [5, 8, 130, 12, 44]
// //                     0, 1,  2,  3,  4
// const index = arr.findIndex(item => item > 10)
// console.log(index) // 2
// ----------------------------------------------

// flat()
// 대상 배열의 모든 하위 배열을 지정한 깊이까지 이어붙인 새로운 배열을 생성
// 깊이의 기본값은 1
// const arr = [1, 2, [3, 4, [5, 6]]]
//
// console.log(arr.flat()) // [1, 2, 3, 4, [5, 6]]
// console.log(arr.flat(2)) // [1, 2, 3, 4, 5, 6]
// console.log(arr.flat(Infinity)) // 배열 안에 배열 무한으로 붙이기
// console.log(arr)
// -----------------------------------------------------

// forEach()
// 대상 배열의 길이만큼 주어진 콜백을 실행
// const arr = ['A', 'B', 'C']
// arr.forEach(item => console.log(item))
//
// for(let i = 0; i < arr.length; i += 1){
//     if(i > 1){
//         break
//     }
//     console.log(arr[i]) // A, B
// }
// --------------------------------------------------

// includes()
// 대상 배열이 특정 요소를 포함하고 있는지 확인(대 소문자 구분)
// const arr = [1, 2, 3]
// console.log(arr.includes(7)) // false
//
// const fruits = ['ap', 'ba', 'ch']
// console.log(fruits.includes('ap')) // true
// console.log(fruits.includes('bu')) // false

const users = [
    {name:'neo', age:20},
    {name:'aeo', age:30},
    {name:'leo', age:10}
]

// js는 데이터를 원시형과 참조형으로 구분
// 참조형 - 객체, 배열, 함수
// 같은 모양이라도 다른 데이터로 취급할 수 있음
console.log(users.includes({name: 'neo', age: 20})) // false

// 변수를 새롭게 할당시켜 includes에 넣기
const neo = users[0]
console.log(users.includes(neo)) // true
