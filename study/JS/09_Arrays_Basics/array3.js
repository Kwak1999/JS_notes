// join()
// 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환
// const arr = ['ap', 'ba', 'ch']
//
// console.log(arr.join()) // ap,ba,ch
// console.log(arr.join(', ')) // ap, ba, ch
// console.log(arr.join('/')) // ap/ba/ch
// --------------------------------------------

// map()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환
// const numbers = [1, 2, 3, 4]
// const newNumbers = numbers.map(item => item * 2)
//
// console.log(newNumbers) // 2, 4, 6, 8
//
// const users = [
//     {name: 'neo', age: 15},
//     {name: 'leo', age: 23},
//     {name: 'seo', age: 44}
// ]
// const newUsers = users.map(user => {
//     return {
//         ...user,
//         isValid: true,
//         email: null
//     }
// })
//
// console.log(newUsers)
// ----------------------------------------------

// pop()
// 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환
// 대상 배열 원본이 변경

// const fruits = ['ap', 'ba', 'ch']

// console.log(fruits.pop()) // ch
// console.log(fruits) // ap, ba
// --------------------------------------

// push()
// 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// 대상 배열 원본이 변경
// const fruits = ['ap', 'ba', 'ch']
//
// const newLength = fruits.push('or')
// console.log(newLength) // 4
// console.log(fruits)
//
// fruits.push('mp', 'st')
// console.log(fruits)
// -------------------------------------------

// reduce()
// 대상 배열의 길이만큼 주어진 콜백을 실행, 마지막에 호출되는 콜백의 반환 값을 반환
// 각 콜백의 반환 값은 다음 콜백으로 전달

// const numbers = [1, 2, 3]
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0) // 0은 초기값
//
// console.log(sum) // 6

const users = [
    {name: 'neo', age: 15},
    {name: 'leo', age: 85},
    {name: 'seo', age: 45}
]

// 총 나이 계산
const totalAge = users.reduce((acc, cur) => {
    return acc + cur.age
}, 0)
console.log(totalAge)
console.log(`평균 나이: ${(totalAge / users.length).toFixed(1)}세`)

// 모든 이름 추출
const namesArray = users.reduce((acc, cur) => {
    // acc: 이전까지 모은 이름들의 배열 (처음에는 빈 배열 [])
    // cur: 현재 순회 중인 사용자 객체 {name: 'neo', age: 15} 같은 형태
    acc.push(cur.name) // 현재 사용자의 이름을 acc 배열에 추가
    return acc // 변경된 acc 배열을 반환 (다음 순회 때 사용됨)
}, []) // 초기 acc 값은 빈 배열

// 이름들을 쉼표로 구분된 하나의 문자열로 결합
const names = namesArray.join(', ')
console.log(names) // 결과: "neo, leo, seo"
