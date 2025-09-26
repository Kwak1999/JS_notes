// 제네릭(Generic) 클래스를 정의
/// 인터페이스, 제약 조건

// T는 타입 매개변수로, 나중에 어떤 타입이 들어올지 결정됨
interface MyData<T> {
    name: string  // 이름은 무조건 문자열
    value: T      // value는 T 타입 (나중에 결정)
}

// T = string
const dataA: MyData<string> = {
    name: 'Data A',
    value: 'Hello world' // 문자열 ✅
}

// T = number
const dataB: MyData<number> = {
    name: 'Data B',
    value: 1234 // 숫자 ✅
}

// T = boolean
const dataC: MyData<boolean> = {
    name: 'Data C',
    value: true // 불린 ✅
}

// T = number[] (숫자 배열)
const dataD: MyData<number[]> = {
    name: 'Data D',
    value: [1, 2, 3, 4] // 숫자 배열 ✅
}
