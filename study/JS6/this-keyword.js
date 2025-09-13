// this
// 일반 함수의 this는 호출 위치에서 정의
// 화살표 함수의 this는 자신이 선언된 함수 범위에서 정의

// const user = {
//     firstName: 'hi',
//     lastName: 'pa',
//     age: 5,
//     getFullName:  function (){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
function user() {
    this.firstName = 'aa'
    this.lastName = 'bb'
    return {
        firstName: 'hi',
        lastName: 'pa',
        age: 5,
        getFullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }
}
const lewis = {
    firstName: 'Le',
    lastName: 'yang'
}

const u = new user()
console.log(u.getFullName()) // hi pa
console.log(u.getFullName.call(lewis)) // le yang
