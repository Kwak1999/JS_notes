// 타입 종류

/// 문자열
let str: string
let red: string = "Red"
let green: string = 'Green'
let myColor: string = `My color is ${red}.`
let yourColor: string = 'Your color is' + green

/// 숫자
// let num: number
let integer: number = 6
let float: number = 3.14
let infinity: number = Infinity
let nan: number = NaN

/// 불린
let isBoolean: boolean
let isDone: boolean = false

/// Null / Undefined
let nul: null
let und: undefined
nul = null
let num: number
num = 123
console.log(nul)
console.log(und)
console.log(num)


/// 배열
const fruits: string[] = ['ap', 'ba', 'ch']
const numbers: number[] = [1, 2, 3, 4, 5]
const union: (string|number)[] = ['ap', 1, 2, 'ba', 3]
const array: number[] = [1, 2, 3]

/// 객체
// typeof DATA === 'object'
const obj = {}       // object
const arr = []       // object
const func = function () {}  // object

interface User{
    name: string
    age: number
    isValid: boolean
}
const userA: User = {
    name: 'Heropy',
    age: 85,
    isValid: true
}
const userB: User ={
    name: 'Neo',
    age: 22,
    isValid: false
}
/// 함수
const add = function (x:number, y:number): number {
    return x + y
}

const a: number = add(1, 2)

const hello: () => void = function () {
    console.log('Hello world~')
}

const h: void = hello()