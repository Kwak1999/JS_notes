// 반복문

// for(초기화; 조건; 증감){
//     // 반복 실행할 코드
// }


// for(let i = 0; i < 10; i+= 1){
//     console.log(i); // 0~9
// }
// continue 현재 반복 종료, 다음으로 넘어가기


const fruits = ['ap', 'ba', 'ch']
//
// for(let i = 0; i<fruits.length; i += 1){
//     console.log(fruits[i])
// }

// for of
for(const fruit of fruits){
    console.log(fruit)
}
console.log('--------------------')


// for in 순서를 가지는게 아님, 속성의 개수만큼만 반복
const user ={
    name: 'hi',
    age: 15,
    isValid: true,
    email: 'mail'
}

for (const key in user){
    console.log(key) // name, age, isValid, email 객체 목록 모두 나옴

    console.log(user[key]) // hi, 15, true, mail 객체 목록 값 모두 나옴
}