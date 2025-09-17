// 비동기 함수 a: 1초 후 1 출력
const a = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(1)  // 1초 후 1 출력
            resolve()      // 다음 then으로 진행
        }, 1000)
    })
}

// 비동기 함수 b: 1초 후 2 출력
const b = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(2)  // 1초 후 2 출력
            resolve()      // 다음 then으로 진행
        }, 1000)
    })
}

// 비동기 함수 c: 1초 후 3 출력
const c = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(3)  // 1초 후 3 출력
            resolve()      // 다음 then으로 진행
        }, 1000)
    })
}

// 동기 함수 d: 바로 4 출력 (Promise 아님)
const d = () => console.log(4)

// a()
//     .then(() => {return b()})
//     .then(() => {return c()})
//     .then(() => {
//         d()
//     })

// Promise 체이닝을 이용한 순차 실행
a()          // a() 먼저 실행 → 1초 후 1 출력
    .then(b) // a 끝나면 b() 실행 → 1초 후 2 출력
    .then(c) // b 끝나면 c() 실행 → 1초 후 3 출력
    .then(d) // c 끝나면 d() 실행 → 바로 4 출력
    .then(() => console.log('done')) // 마지막에 'done' 출력

/*
실행 순서 및 타이밍 요약:

1초 후:   1
2초 후:   2
3초 후:   3
3초 후:   4 (동기이므로 바로 출력)
3초 후:   done

※ then(b), then(c), then(d)는 각각 b(), c(), d()를 다음 순서로 실행하겠다는 뜻.
※ 함수 이름만 넘겨주는 방식은 간결하고 가독성이 좋음.
*/