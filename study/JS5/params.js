// 매개변수 패턴
// 기본값

function sum(a, b = 1){
    // b는 기본값 1로 지정
    return a + b
}

console.log(sum(1, 2)) // 3
console.log(sum(7)) // 8

// 객체 구조 분해 할당
const user = {
    name: 'heo',
    age: 15,
    email: 'mail'
}

function getName({name}){
    return name
}
function getEmail({email = '이메일 없음'}){
    return email
}
console.log(getName(user)) // heo
console.log(getEmail(user)) // heo

// 배열 구조 분해 할당
const fruits = ['ap', 'ba', 'ch']
const numbers = [1, 2, 3, 4, 5, 6, 7]

function getSecondItem([, b]){
    return b
}

console.log(getSecondItem(fruits)) // ba
console.log(getSecondItem(numbers)) // 2

// 나머지 매개변수
function num(...rest){
    console.log(rest)
    console.log(arguments) // arguments는 뱌열x, 유사 배열
    return rest.reduce(function (acc, cur){
        return acc + cur
    }, 0)
}

console.log(num(1, 2)) // 3
console.log(num(1, 2, 3, 4)) // 10
console.log(num(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // 55