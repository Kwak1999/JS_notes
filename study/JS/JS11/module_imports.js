// // 기본 내보내기(default 사용) - 한 파일에 한 번만 사용 가능
// export default 123 // 다른 파일에서 import 시 원하는 이름으로 불러올 수 있음 (ex: import abc from './module.js')

// // 이름(name) 내보내기 - 여러 개 내보낼 수 있음
// export const str = 'ABC'         // 문자열 변수 내보내기
// export const arr = []            // 배열 변수 내보내기
// export const hello = () => {}    // 화살표 함수 내보내기
// export function hi() {}          // 일반 함수 내보내기


// // 모듈 전체를 객체 형태로 가져오기 (import * as ...)
// import * as abc from '../example.js'
// console.log(abc) // { str: 'ABC', arr: [], hello: f, hi: f, default: 123 } 와 같이 객체 형태로 출력됨

// 비동기적으로 모듈 가져오기 (동적 import)
// 일정 시간이 지난 후(import 함수 사용) 모듈을 불러옴
setTimeout(async () => {
    // 방법 1: .then() 사용
    // import('../example.js').then(abc => {
    //     console.log(abc) // 모듈 전체를 객체 형태로 출력
    // })

    // 방법 2: await 사용 (async 함수 내부에서만 사용 가능)
    const abc = await import('../example.js') // 비동기적으로 모듈 가져오기
    console.log(abc) // { str: ..., arr: ..., hello: ..., hi: ..., default: ... } 형태의 객체 출력
}, 1000)