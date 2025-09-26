// 제네릭(Generic) 클래스를 정의
// P는 '타입 매개변수'로, 이 클래스를 사용할 때 어떤 타입이 들어올지 나중에 결정됨
class User<P> {
    // 생성자에서 받은 payload를 public 속성으로 저장
    // public을 붙이면 자동으로 this.payload에 할당됨
    constructor(public payload: P) {}

    // payload를 반환하는 메서드
    // 반환 타입도 P로 추론됨
    getPayload() {
        return this.payload
    }
}

// 첫 번째 타입: UserAType
interface UserAType {
    name: string
    age: number
    isValid: boolean
}

// 두 번째 타입: UserBType
interface UserBType {
    name: string
    age: number
    emails: string[]
}

// UserAType을 사용하는 User 인스턴스 생성
// 여기서 P = UserAType
const heropy = new User<UserAType>({
    name: 'Heropy',       // 문자열 ✅
    age: 15,              // 숫자 ✅
    isValid: true         // 불린 ✅
})

// UserBType을 사용하는 User 인스턴스 생성
// 여기서 P = UserBType
const neo = new User<UserBType>({
    name: 'Heropy',               // 문자열 ✅
    age: 15,                      // 숫자 ✅
    emails: ['123@gmail.com']     // 문자열 배열 ✅
})

// getPayload 사용 예시
console.log(heropy.getPayload())
// 출력: { name: 'Heropy', age: 15, isValid: true }

console.log(neo.getPayload())
// 출력: { name: 'Heropy', age: 15, emails: ['123@gmail.com'] }