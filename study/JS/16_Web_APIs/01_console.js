// // console
// // .log(), .warn(), .error(), .dir()
//
// // 콘솔에 메시지나 객체를 출력
//
// // - log: 일반 메시지
// // - warn: 경고 메시지
// // - error: 에러 메시지
// // - dir: 속성을 볼 수 있는 객체를 출력
//
// console.log(document.body)
// console.warn(document.body)
// console.error(document.body)
// console.dir(document.body)
console.log('-----------------------------------------')

// // .count(), .countReset()

// // 콘솔에 메소드 호출의 누적 횟수를 출력하거나 초기화
// // console.count('이름')
// // console.countReset('이름')
//
// console.count('a')
// console.count('a')
// console.count('b')
// console.count('a')
// console.log('Reset a')
// console.countReset('a')
// console.count('b')
// console.count('a')
console.log('-----------------------------------------')

// //.time(), .timeEnd()
//
// // 콘솔에 타이머가 시작해서 종료되기까지의 시간(ms)을 출력
//
// // console.time('이름')
// // console.timeEnd('이름')
//
// console.time('반복문')
//
// for(let i = 0; i < 10000; i += 1){
//     console.log(i)
// }
//
// console.timeEnd('반복문')
console.log('-----------------------------------------')

// // .trace()
//
// // 메소드 호출 스택을 추적해 출력
//
// function a(){
//     function b(){
//         function  c(){
//             console.log('log')
//             console.trace('trace')
//         }
//         c()
//     }
//     b()
// }
// a()
console.log('-----------------------------------------')

// // .clear()
// //
// // // 콘솔에 기록된 메시지를 모두 삭제
// // console.log(1)
// // console.clear()
// // console.log(2)
// // console.log(3)
console.log('-----------------------------------------')

// 서식 문자 치환
// %s - 문자로 적용
// %o - 객체로 적용
// %c - css를 적용

const a = 'The brown fox'
const b = 3
const c = {
    f: 'fox',
    d: 'dog'
}

console.log('%s jumps over the lazy dog %s times.', a, b)
console.log('%o is Object!', c)

console.log(
    '%cThe brown fox %cjumped over %cthe lazy dog.',
    // 첫 번째 %c: "The brown fox"에 적용
    'color: brown; font-family: serif; font-size: 20px;',

    // 두 번째 %c: "jumped over"에 적용 → 빈 문자열이므로 기본 스타일(=브라우저 기본값)로 표시됨
    '',

    // 세 번째 %c: "the lazy dog."에 적용
    'font-size: 18px; color: #FFF; background-color: green; border-radius: 4px;'
)

