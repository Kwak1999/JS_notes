// Nullish 병합
const n = 0

// OR 사용한 경우
const num1 = n || 7

console.log(num1) // 7

// Nullish 병합 연산자를 사용한 경우
// null, undefined 만 넘기고 나머지 데이터 반환
const num2 = n ?? 7
console.log(num2) // 0

console.log(null ?? 1) // 1
console.log(undefined ?? 2) // 2
console.log(undefined ?? null) // null
console.log(null ?? undefined) // undefined
console.log(null ?? 1 ?? 2) // 1
console.log(false ?? 1 ?? 2) // false

// 삼항 연산자
const  a = 1

if(a < 2){
    console.log('t')
}else{
    console.log('f')
} // -> 이거를 if = ?, else = :
console.log(a < 2 ? 't' : 'f') // 요렇게

// ex
function getAlert(message){
    return  message ? message : 'no'
}

console.log(getAlert('hi'))
console.log(getAlert(''))