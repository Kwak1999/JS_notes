// ES6 Classes

// function User(first, last){
//     this.firstName = first
//     this.lastName = last
// }
//
// // 화살표 함수는 this 해석 방식이 달라 안됌
// User.prototype.getFullName = function (){
//     return `${this.firstName} ${this.lastName}`
// }

class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const heropy = new User('hp', 'pa')
const neo = new User('neo', 'and')


console.log(heropy)
console.log(heropy.getFullName())
console.log(neo)
console.log(neo.getFullName())