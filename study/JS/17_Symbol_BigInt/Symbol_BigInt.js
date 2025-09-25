import heropy from "./heropy.js";
import {birthKey} from "./keys";

// // 심볼(Symbol)
//
// // 변경이 불가한 데이터로, 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용할 수 있다.
//
// // Symbol('설명')
// // '설명'은 단순 디버깅을 위한 용도일 뿐, 심볼 값과는 관계가 없음
//
// const sKey = Symbol('hello')
// const user = {
//     key : '일반 정보',
//     [sKey]: '민감한 정보'
// }
//
// console.log(user.key)
// console.log(user['key'])
// console.log(user[sKey])
// console.log(user[Symbol('hello')])
// console.log(sKey)
// console.log(typeof sKey)
console.log('-----------------------------------')

// console.log(heropy)
// console.log(Object.keys(heropy))
//
// for (const key in heropy){
//     console.log(heropy[key])
// }
//
// console.log(heropy[birthKey])
console.log('-----------------------------------')

// BigInt
// BigInt는 길이 제한이 없는 정수(integer)입니다.
// 숫자(number) 데이터가 안정적으로 표시될 수 있는,
// 최대값(2^53 - 1)보다 큰 정수를 표현할 수 있습니다.
// 정수 뒤에 `n`을 붙이거나 `BigInt()`를 호출해 생성합니다.

console.log(1234567890123456789012345678901234567890)
console.log(1234567890123456789012345678901234567890n)
console.log(BigInt("1234567890123456789012345678901234567890"))

const a = 11n
const b = 22

// 숫자 -> BigInt
console.log(a + BigInt(b))
console.log(typeof (a + BigInt(b)))

// BigInt -> 숫자
console.log(Number(a) + b)
console.log(typeof (Number(a) + b))
