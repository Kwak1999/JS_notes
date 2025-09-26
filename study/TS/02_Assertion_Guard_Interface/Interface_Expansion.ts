// 인터페이스
// 확장(상속)

interface UserA{
    name: string
    age: number
}

interface UserB extends UserA{
    isValid: boolean
}

// const heropy: UserA ={
//     name: 'heropy',
//     age: 12,
//     isValid: true // <- 부모요소는 isValid가 없어서 오류
// }

const neo: UserB = {
    name: 'Neo',
    age: 15,
    isValid: true // 상속받아 문제가 없음
}

interface FullName{
    firstName: string
    lastName: string
}
interface FullName{
    middle:string
    lastName: string // 속성 이름이 중복될 때, 타입이 다르면 안됌
}

const fullName: FullName = {
    firstName: 'Tomas',
    middle: 'Sean',
    lastName: 'Connery'
}