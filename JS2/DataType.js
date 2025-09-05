// 데이터 타입 확인

const a = 123

console.log(typeof 'Hello') // string
console.log(typeof 'Hello' === 'string') // true

// console.log(null.constructor)
console.log([].constructor === Array) // true
console.log([].constructor === Object) // true


// Object.prototype.toString.call(value).slice(8, -1), 정확한 타입 이름을 문자열로 뽑아주는 코드
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null') // true

function checkType(data){
    return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType(null)) // Null
console.log(checkType([])) // Array
console.log(checkType({})) // Object