// Boolean

const a = true
const b = false

if(a){
    console.log('Hello')
}

// null -> 존재하지 않는다, 알 수 없다, 값이 비어있다. 명시적
let age = null

console.log(age)
// null

setTimeout(function (){
    age = 85
    console.log(age)
}, 1000)
