// 화살표 함수

// const sum = (a, b) =>{
//     return a +b
// }

// return 키워드로 로직이 시작할 경우 {} 생략 가능
const sum = (a, b) => a + b

console.log(sum(1, 2)) // 3

const a = () => {}
const b = x => {} // 매개변수가 하나면 소괄호 생략가능
const c = (x, y) => {}

const d = x => {return x * x}

const e = x => x * x

const f = x => {
    console.log(x * x) // 중간에 return 이 아닌 다른 로직이 있으면 {} 생략 못함
    return x * x
}

const g = () => {return {a:1}}
const h = () => ({a: 1}) // 객체 데이터는 소괄호로 묶어줘야 함

const i = () => {return [1, 2, 3]}
const j = () => [1, 2, 3] // 배열은 상관x