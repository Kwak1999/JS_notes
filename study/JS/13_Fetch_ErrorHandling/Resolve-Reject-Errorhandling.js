// Promise를 사용한 비동기 함수 정의
// index가 10 이하일 경우 index를 출력하고 1 증가시켜 resolve
// index가 10 초과일 경우 reject를 호출해 에러 처리
const delayAdd = index => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(index > 10){
                // 조건 위반 시 Promise는 reject로 에러를 전달
                reject(`${index}는 10보다 클 수 없다`)
                return
            }
            // 정상 로직: index 출력 후 다음 index를 resolve로 넘김
            console.log(index)
            resolve(index + 1)
        }, 1000) // 1초 지연
    })
}

// then/catch/finally 체이닝 예시
// - Promise가 성공할 경우 .then()
// - 실패할 경우 .catch()
// - 성공/실패 상관없이 항상 실행되는 .finally()
delayAdd(13) // 실패 케이스: 10보다 큰 값
    .then(res => console.log(res))        // 실행되지 않음
    .catch(err => console.error(err))     // reject된 에러 메시지 출력
    .finally(() => console.log('done'))   // 항상 실행됨

// async/await를 이용한 비동기 함수 호출
const wrap = async () => {
    try {
        // await는 Promise가 resolve될 때까지 기다림
        const res = await delayAdd(2) // 성공 케이스: 2는 10 이하
        console.log(res) // 3 출력
    } catch (err) {
        // Promise가 reject될 경우 이 블록으로 진입
        console.error(err)
    } finally {
        // 에러 여부와 관계없이 항상 실행되는 영역
        console.log('done')
    }
}
wrap()
