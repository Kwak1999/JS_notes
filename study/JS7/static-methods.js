// 정적 메소드

// User 클래스 정의
class User {
    // 생성자 메서드: 객체 생성 시 이름과 성을 받아 초기화
    constructor(first, last) {
        this.firstName = first // 이름 저장
        this.lastName = last   // 성 저장
    }

    // 인스턴스 메서드: 인스턴스에서 호출 가능
    // 전체 이름을 반환
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    // 정적(static) 메소드: 클래스에서 직접 호출 (인스턴스에서 호출 불가)
    // 주어진 객체가 User로서 유효한지 검사
    static isUser(user) {
        // firstName과 lastName이 모두 존재하면 true 반환
        if (user.firstName && user.lastName) {
            return true
        }
        return false
    }
}

// User 클래스의 인스턴스 생성
const heropy = new User('hp', 'pa') // 이름과 성이 모두 있음
const neo = new User('hp', '')      // 성이 없음

// heropy 인스턴스의 전체 이름 출력
console.log(heropy.getFullName()) // 출력: "hp pa"

// User 클래스의 정적 메서드 호출: heropy가 유효한 유저인지 확인
console.log(User.isUser(heropy)) // true (이름과 성이 모두 있음)

// User 클래스의 정적 메서드 호출: neo가 유효한 유저인지 확인
console.log(User.isUser(neo))    // false (성 lastName이 없음)

