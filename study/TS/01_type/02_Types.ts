// 타입 종류

/// Any -> 아무 타입이나 허용됨 (비추천: 타입스크립트의 장점 상실)
// 컴파일러가 타입 검사 안 함, JS처럼 사용됨
let hello: any = 'hello world'
hello = 123            // 숫자도 가능
hello = false          // 불리언도 가능
hello = null           // null도 가능
hello = {}             // 객체도 가능
hello = []             // 배열도 가능
hello = function () {} // 함수도 가능

/// Unknown -> 타입을 알 수 없는 경우에 사용 (any보다 안전)
// 실제 사용 전에는 타입 체크 필요
const a: any = 123
const u: unknown = 123

const any: any = a            // 가능
const boo: boolean = a        // 가능하지만 위험 (any니까)
const num: number = a         // 가능
const arr: string = a         // 가능
const obj: {x: string, y: number} = a  // 가능

// unknown의 경우 아래처럼 타입 검사 또는 타입 단언 필요
// const boo: boolean = u       ❌ 오류 발생
// if (typeof u === 'boolean') { const b = u } ✅

// --------------------------------------------------

/// Tuple -> 고정된 타입과 순서를 가진 배열
const tuple: [string, number, boolean] = ['a', 1, false]
// 순서 바뀌면 오류 발생: [false, 1, 'a'] ❌

const users: [number, string, boolean][]
    = [[1, 'neo', true], [2, 'even', false], [3, 'lew', true]]
// 각 배열 원소는 튜플 구조 ([번호, 이름, 유효성])

// --------------------------------------------------

/// Void -> 반환값이 없는 함수의 반환 타입
function hello (msg: string): undefined {
    console.log(`hello ${msg}`)
    return           // undefined 반환
}

const hi: void = hello('world')
// console.log 등 실행만 하고 값을 반환하지 않는 함수

// --------------------------------------------------

/// Never -> 절대 발생하지 않는 값의 타입
const nev: string[] = []
nev.push()
// nev는 비어있는 배열이라 사실 의미 없음
// 보통 오류 던지는 함수에 사용됨 (ex: throw new Error)

function error(): never {
    throw new Error("에러 발생!") // 절대 반환되지 않음
}

// --------------------------------------------------

/// Union -> 여러 타입 중 하나 허용
let union: (string | number | boolean)[]
union = 'hello type' // string 가능
union = 123          // number 가능
union = false        // boolean 가능

// 여러 타입이 허용될 경우 조건문으로 타입 좁히기 필요

// --------------------------------------------------

/// Intersection -> 여러 타입을 하나로 합침 (& 연산자)
interface User {
    name: string,
    age: number
}
interface Validation {
    isValid: boolean
}

// 두 타입을 합쳐서 모두 만족해야 함
const heropy: User & Validation = {
    name: 'neo',
    age: 22,
    isValid: true
}
