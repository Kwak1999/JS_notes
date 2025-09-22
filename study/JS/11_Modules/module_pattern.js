// main.js
import * as abc from '../example.js'
console.log(abc) // 객체 데이터로 출력됌

// import number, { str, arr, hello, hi } from '../example.js'
// console.log(number) // 123
// console.log(str)
// console.log(arr)
// console.log(hello)
// console.log(hi)

// example.js
// 기본 내보내기(default 사용) 1번만 사용가능
export default 123

// 이름 내보내기
export const str = 'ABC'
export const arr =[]
export const hello = () => {}
export function hi(){}