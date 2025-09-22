// 반환 및 종료
function hello(){
    return 'hello' // 종료 return 밑으로는 출력x

}

console.log(hello()) // hello
console.log(hello) // 함수 자체로 출력

// EX
function plus(num){
    if(typeof num !== 'number'){
        console.log('숫자 입력')
        return 0
    }
    return num + 1
}
console.log(plus(2)) // 3
console.log(plus(7)) // 8
console.log(plus()) // 숫자입력, 0
