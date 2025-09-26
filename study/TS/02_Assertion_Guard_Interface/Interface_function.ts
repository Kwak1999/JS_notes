// 인터페이스
// 함수 타입 - 호출 시그니처

interface GetName{
    (message: string): string
}

interface User{
    name: string
    age: number
    getName: GetName
}

const heropy: User ={
    name: 'Heropy',
    age: 14,
    getName(message: string){ // message <- 다른 문자도 가능 string타입만 같다면 문제없음
        console.log(message)
        return this.name
    }
}
heropy.getName('Hello~')