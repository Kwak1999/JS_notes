// 타입 별칭

type TypeA = string

type TypeB = string | number | boolean

type User = {
    name: string
    age: number
    isValid: boolean
} | [string, number, boolean]

const userA: User = {
    name: 'Neo',
    age: 85,
    isValid: true
}

const userB: User = ['Evan', 36, false]

function someFunc(param: TypeB): TypeA {
    switch (typeof param) {
        case 'string':
            return param.toUpperCase()
        case 'number':
            return param.toFixed(2)
        default:
            return 'true'
    }
}
console.log('---------------------------------')

type TypeUser = {
    name: string
    age: number
    isValid: boolean
}

interface InterfaceUser {
    name: string
    age: number
    isValid: boolean
}

const heropy: TypeUser = {
    name: 'Heropy',
    age: 85,
    isValid: true
}
