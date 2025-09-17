// reverse()
// 대상 배열의 순서를 반전
// 대상 배열 원본이 변경

// const arr = ['A', 'B', 'C']
// const reversed = arr.reverse()
//
// console.log(reversed) // C B A
// console.log(arr) // C B A
// --------------------------------------

// shift
// 대상 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
// 대상 배열 원본이 변경

// const arr = ['A', 'B', 'C']
//
// console.log(arr.shift()) // A
// console.log(arr) // B C
// --------------------------------------------

// slice()
// 대상 배열의 일부를 추출해 새로운 배열을 반환
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 배열의 끝까지 추출

// const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
//
// console.log(arr.slice(0, 3)) // A, B, C
// console.log(arr.slice(4, -1)) // E, F
// console.log(arr.slice(4)) // E, F, G
// console.log(arr) // 원본 수정사항 없음
// -----------------------------------------

// some()
// 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인
// 최소 하나만 통과하면 true

// const arr = [1, 2, 3, 4]
// const isValid = arr.some(item => item > 3)
//
// console.log(isValid) // true
//-----------------------------------------

// sort()
// 대상 배열을 콜백의 반환 값에 따라 정렬
// 콜백을 제공하지 않으면, 요소를 문자열로 변환 유니코드 코드 포인트 순서로 정렬
// 대상 배열 원본이 변경

// const numbers = [4, 10, 2, 100, 1, 3, 0]
//
// numbers.sort()
// console.log(numbers)
//
// numbers.sort((a, b) => a - b)
// console.log(numbers)
//
// numbers.sort((a, b) => b - a)
// console.log(numbers)
//
// const users = [
//     {name: 'neo', age: 11},
//     {name: 'seo', age: 55},
//     {name: 'leo', age: 22}
// ]
//
// users.sort((a, b) => a.age - b.age)
// console.log(users)
//--------------------------------------------

// splice()
// 대상 배열에 요소를 추가하거나 삭제하거나 교체
// 대상 배열 원본이 변경

// const arr = ['A', 'B', 'C']
// arr.splice(2, 0, 'X') // 2:2번 인덱스에 추가, 0:삭제 없음
// // arr.splice(1, 2) // 1: 1번 인덱스 뒤로, 2: 2개 삭제
//
// console.log(arr) // A, B, X, C
//-----------------------------------------------

// unshift()
// 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환
// 대상 배열 원본이 변경

// const arr = ['A', 'B', 'C']
//
// console.log(arr.unshift('X')) // 4
// console.log(arr)
//-----------------------------------------------

// Array.from()
// 유사 배열을 실제 배열로 반환

// const arraylike = {
//     0: 'A',
//     1: 'B',
//     2: 'C',
//     length: 3 // 이게 없으면 유사 배열의 구조에 맞지 않음
// }
//
// console.log(arraylike.constructor === Array) // false
// console.log(arraylike.constructor === Object) // true
//
// // arraylike.forEach(item => console.log(item))
// Array.from(arraylike).forEach(item => console.log(item))
//--------------------------------------------------------

// Array.isArray()
// 배열 데이터인지 확인

const array = ['A', 'B', 'C']
const arraylike = {
    0: 'A',
    1: 'B',
    2: 'C',
    length: 3
}

console.log(Array.isArray(array)) // true
console.log(Array.isArray(arraylike)) // false