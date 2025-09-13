// Object

// const user = new Object()
// user.name = '123'
// user.age = 11
//
// console.log(user)

// function User(){
//     this.name = '123'
//     this.age = 11
// }
// const user = new User()
// console.log(user)

const user ={
    name: '123',
    age: 11,
    age: 22
    // 마지막에 작성된 걸 기준으로 나옴
}

console.log(user.name) // '123'
console.log(user['name']) // '123'
console.log(user.age) // 22

const userA = {
    name: "abc",
    age: 13
}
const userB = {
    name: "ABC",
    age: 16,
    parent: userA
}

console.log(userB.parent.name) // abc
console.log(userB['parent']['name']) // abc

const users = [userA, userB]
console.log(users)
console.log(users[0]['name']) // abc