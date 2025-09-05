const string1 = "hello"
const string2 = 'hello'
const string3 = `hello ${string1} ?!`

console.log(string3)

const number = 123
console.log(number + 1)
// typeof 데이터 타입 확인 가능 ex) console.log(typeof (number + number))

/* toFixed() <- 소숫점 정하기 단, 숫자데이터를 문자데이터로 바꿈
    숫자데이터 유지 -> Number((a+b).toFixed(1))) */