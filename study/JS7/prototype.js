// prototype

// const fruits = ['ap', 'ba', 'ch']
// const fruits = new Array('ap', 'ba', 'ch')
// console.log(fruits)
// console.log(fruits.length) // 3
// console.log(fruits.includes('ba')) // true
// console.log(fruits.includes('or')) // false
//
// Array.prototype.heropy = function () {
//     console.log(this)
// }
//
// fruits.heropy()
//
// const arr = []
// arr.heropy()

// const heropy = {
//     firstName: 'he',
//     lastName: 'ba',
//     getFullName (){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
//
// const neo = {
//     firstName: 'neo',
//     lastName: 'an'
// }
//
// console.log(heropy.getFullName())
// console.log(heropy.getFullName.call(neo))

// 사용자 정의 생성자 함수 User: 객체를 생성할 때 firstName과 lastName을 초기화
function User(first, last) {
    this.firstName = first  // 생성된 객체에 firstName 속성 추가
    this.lastName = last    // 생성된 객체에 lastName 속성 추가
}

// User.prototype에 메서드 추가: 모든 User 인스턴스에서 공유됨
// getFullName 메서드는 인스턴스의 전체 이름을 문자열로 반환
User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

// new 키워드를 사용해 User 생성자 함수로부터 새로운 인스턴스 생성
const heropy = new User('heropy', 'park')

// heropy 객체 출력: firstName, lastName 속성이 포함된 User 인스턴스
console.log(heropy)  // 출력: User { firstName: 'heropy', lastName: 'park' }

// heropy 인스턴스에서 getFullName 메서드 호출 → "heropy park" 반환
console.log(heropy.getFullName())  // 출력: 'heropy park'
