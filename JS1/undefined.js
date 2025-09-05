// undefined 암시적 -> 변수에 값이 할당이 안된 상태
let age

console.log(age)

setTimeout(function (){
    age = 85
    console.log(age)
}, 1000)