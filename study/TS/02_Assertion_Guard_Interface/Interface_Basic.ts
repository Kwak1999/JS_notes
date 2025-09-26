// 인터페이스 - 기본

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

interface User {
    name: string
    readonly age: number
    isValid?: boolean // ? <- ?가 있으면 있어도 되고 없어도 된다.
}

const heropy: User ={
    name: 'Heropy',
    age: 85,
    isValid: true
}
// heropy.age = 22 // <- 읽기전용이라 수정 불가능

const neo: User = {
    name: 'Neo',
    age: 102
}

// 함수 타입 - 호출 시그니처
// 인덱스 가능 타입 - 인덱스 시그니처
// 확장(상속)