// toFixed()
// 숫자를 지정된 고정 소수점 표기까지 표현하는 문자로 반환
// const num = 3.1415926
//
// console.log(num.toFixed(2)) // 3.14 <- 문자
// console.log(parseFloat(num.toFixed(2))) // 3.14 <- 숫자로 변환

// toLocaleString()
// 숫자를 현지 언어 형식의 문자로 반환
// console.log(num.toLocaleString()) // 3.142
// console.log(`${num.toLocaleString()}원`) // 3.142원
//
// Number.isInteger()
// 숫자가 정수인지 확인
// const num2 = 123
// const pi = 3.14
//
// console.log(Number.isInteger(num2)) // true
// console.log(Number.isInteger(pi)) // false

// Number.isNaN()
// 주어진 값이 'NaN'인지 확인
// const num3 = NaN
// const num4 = 123
// const str = 'hello'
// const nul = null
//
// console.log(Number.isNaN(num3)) // true
// console.log(Number.isNaN(num4)) // false
// console.log(Number.isNaN(str)) // false
// console.log(Number.isNaN(nul)) // false

// Number.parseInt() or parseInt()
// 주어진 값(숫자, 문자)을 파싱해 특정 진수의 정수로 반환

const str = '3.1415926'
const num = 3.1415926

console.log(Number.parseInt(str, 10))
console.log(Number.parseInt(num, 10))

// Number.parseFloat() or parseFloat()
// 주어진 값(숫자, 문자)을 파싱해 부동소수점 실수로 반환

console.log(Number.parseFloat(str))
console.log(Number.parseFloat(num))