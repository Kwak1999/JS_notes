// replace()
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환
// 원본 영향 x

const str = 'hello hello'

console.log(str.replace('hello', 'hi')) // hi hello
// g는 global의 약자 hello 문자 전체를 반환
console.log(str.replace(/hello/g, 'hi')) // hi hi
console.log(str) // hello hello

console.log('--------------------------')

// slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출

const str2 = 'hello world!'
//                   012345678901

console.log(str2.slice(0, 5)) // hello
console.log(str2.slice(6, -1)) // world
console.log(str2.slice(6)) // world!
console.log(str2) // hello world!

// split()
// 대상 문자를 주어진 구분자로 나눠 배열로 반환

const ll = 'Ap, Ba, Ch'

console.log(ll.split(', '))
console.log(ll.split('')) // <- 이렇게 하면 글자하나하나 배열로 만듬
console.log(ll.split('').reverse().join()) // reverse 뒤집음, join 나눠진 배열데이터를 문자데이터로 합침

// toLowerCase()
// 대상 문자를 영어 소문자로 변환해 새로운 문자로 반환

console.log(ll.toLowerCase()) // ap, ba, ch
console.log(ll)

// toUpperCase()
// 대상 문자를 영어 대문자로 변환해 새로운 문자로 반환

console.log(ll.toUpperCase()) // AP, BA, CH

// trim()
// 대상 문자의 앞뒤 공백 문자를 제거한 새로운 문자를
// 문자 사이는 적용 x

const str3 = '   heropy!  '
console.log(str3.trim()) // 'heropy!'
console.log(str3) // '   heropy!  '