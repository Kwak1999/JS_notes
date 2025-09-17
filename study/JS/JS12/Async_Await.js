
// async / await란?
// Promise 기반의 비동기 코드를 마치 동기처럼 작성할 수 있게 해주는 문법

// async
// 해당 함수는 항상 Promise를 반환

// await
// 해당 Promise가 resolve될 때까지 코드 실행을 멈추고, 완료되면 다음 줄로 넘어감

// await는 반드시 async 함수 내부에서만 사용 가능
// try-catch로 예외 처리하는 것이 좋음 (await에서 에러가 발생할 수 있음)
// await는 Promise가 해결(resolve)될 때까지 블로킹되므로 반복문 안에서는 주의

// ===========================

// Promise를 반환하며, 1초 후 1을 출력
const a = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(1) // 1초 뒤 1 출력
            resolve()     // 비동기 작업 완료
        }, 1000)
    })
}

// 함수 b: 동기 함수, 바로 콘솔에 2 출력
const b = () => console.log(2)

// ===========================

// async/await를 활용한 실행 함수
const wrap = async () => {
    // await는 a()가 완료(resolve)될 때까지 기다림
    await a()  // 1초 후 1 출력됨
    b()        // 그 후 바로 2 출력됨
}

wrap()
