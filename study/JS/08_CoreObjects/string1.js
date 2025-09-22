// length
// 문자의 길이(숫자)를 반환

const str = 'hello world'

console.log(str.length) // 11

// includes()
// includes(, n번째 인덱스 번호부터 비교)
console.log(str.includes('hello')) // true 단, 대소문자 구별함
if(!str.includes('heropy')){
    console.log('no')
}

// indexOf()
// 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환
// 일치하는 문자가 없으면 -1을 반환

console.log(str.indexOf('world')) // 6
console.log(str.indexOf('d')) // 10
console.log(str.indexOf('heropy')) // -1

if(str.indexOf('heropy') === -1){
    console.log('no')
}

// padEnd()
// 대상 문자의 길이가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환

console.log(str.padEnd(13, '0')) // hello world00

// padStart()
// 대상 문자의 길이가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자를 반환

console.log(str.padStart(13, '0')) // 00hello world
