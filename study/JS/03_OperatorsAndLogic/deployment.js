// 전개 연산자

// const a = [1, 2 ,3]
// const b = [4, 5, 6]
//
// // ... <- 전개 연산자
// console.log(a)
// console.log(...a) // 1, 2, 3
//
// // concat 병합
// const c = a.concat(b)
// console.log(c)
//
// const d = [...a, ...b]
// console.log(d) // [1, 2, 3, 4, 5, 6]

// const a = {x: 1, y: 2}
// const b = {y: 3, z: 4}
//
// const c = Object.assign({}, a, b)
// console.log(c) // x=1, y=3, z=4 덮어쓰여짐
//
// const d = {...a, ...b}
// console.log(d)

function fn(x, y, z){
    console.log(x, y, z)
}

fn(1, 2, 3) // 1 2 3
const a = [1, 2, 3]
fn(...a) // 1 2 3