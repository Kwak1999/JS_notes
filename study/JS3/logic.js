// 논리

// AND 모두 참 일 때 true
const a = true
const b = false

if(a && b){
    console.log('모두가 참')
}

console.log(1 && 0) // 0
console.log(1 && 2 && 0) // 0
console.log(1 && 0 && 2) // 0
console.log(0 && 1 && 2) // 0
console.log('a' && 'b' && '') // 공백
// 모두가 참일때 마지막인 값 출력
console.log('a' && 'b' && 'c') // c

// OR 하나이상 참일 때 true

if(a || b){
    console.log('하나 이상 참')
}

console.log(false || true) // true
console.log(0 || 1) // 1
console.log(false || 0 || {}) // {} 빈객체
console.log(false || [] || null) // [] 빈객체
console.log(function () {} || undefined || '') // f(){}
console.log(false || 0 || NaN) // NaN
