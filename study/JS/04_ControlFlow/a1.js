// 구조 분해 할당

// 1
// const arr = [1, 2, 3]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
//
// console.log(a, b, c)

// 2
// const arr = [1, 2, 3]
// const [a, b, c] = arr
//
// console.log(a, b, c)

// 3
// let a = 0
// let b = 0
// let c = 0
// const arr = [1, 2, 3];[a, b, c] = arr
//
// console.log(a, b, c)

// EX
// const arr = [1, 2, 3]
// const [a, ...rest] = arr
//
// console.log(a, rest) // 1 (2) 2, 3

const obj = {
    a : 1,
    b : 2,
    c : 3
} // 객체 이름으로 바로 찾을 수 있다는 장점
// const a = obj.a
// const b = obj.b
// const c = obj.c

// const {a, b} = obj
// const {a: hi, b: ten} = obj

const{c, ...all} = obj
// : 이름바꾸기
console.log(c, all) // 3 1,2