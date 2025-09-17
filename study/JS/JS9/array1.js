// length
// 배열의 길이(숫자)를 반환
// const arr = ['A', 'B', 'C']
// console.log(arr.length) // 3
// -------------------------------------------


// at()
// 대상 배열을 인덱싱
// 음수 값을 사용하면 뒤에서부터 인덱싱
// console.log(arr[0]) //A
// console.log(arr.at(0)) // A
//
// console.log(arr[arr.length -1]) // C
// console.log(arr.at(-1)) // C
// --------------------------------------------------

// concat()
// 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환
// const arr1 = ['A', 'B', 'C']
// const arr2 = ['D', 'E', 'F']
// // const arr3 = arr1.concat(arr2)
// const arr3 = [...arr1, ...arr2]
//
// console.log(arr1) // arr1배열
// console.log(arr2) // arr2배열
// console.log(arr3) // arr1 + arr2 배열
// -----------------------------------------------------

// every()
// 대상 배열의 모든 요소가 풀백 테스트에서 true를 반환하는지 확인
const arr = [1, 2, 3, 4]
const isValid = arr.every(item => item < 5)

console.log(isValid) // true
//----------------------------------------------------

// filter()
// 주어진 콜백 테스트를 통과하는 모든 요소를 새로운 배열로 반환
// 모든 요소가 테스트를 통화하지 못하면 반 배열을 반환
const numbers = [1, 20, 7, 9, 104, 0, 58]
const filteredNumbers = numbers.filter(number => number < 30)
console.log(filteredNumbers)

const users = [
    {name: 'neo', age:11},
    {name: 'seo', age:12},
    {name: 'leo', age:20}
]
const adults = users.filter(user => {
    return user.age >= 19
})

console.log(adults)