// // Cookie(쿠키)
//
// // 도메인 단위로 저장
// // 표준안 기준, 사이트당 최대 20개 및 4KB로 제한
// // 영구 저장 불가능
//
// // domain: 유효 도메인 설정
// // path: 유효 경로 설정
// // expires: 만료 날짜 설정  ex) `expires=${new Date(2022, 11, 16)}` <- 월은 0~11
// // max-age: 만료 타이머(s) 설정 ex) max-age=${60 * 60 * 24} <- 하루
//
//
// // 쿠키 설정 (브라우저의 쿠키 저장소에 값 저장)
// document.cookie = 'a=1; domain=localhost' // 도메인 지정 (localhost일 때만 유효)
// document.cookie = 'b=2'                  // 기본 쿠키 설정 (현재 페이지 도메인 기준)
// document.cookie = 'a=3'                  // 같은 이름의 쿠키는 덮어쓰기 가능
//
// // 현재 페이지에서 사용할 수 있는 쿠키 출력
// console.log(document.cookie)
// // 예: 'a=3; b=2' (도메인과 경로에 따라 달라질 수 있음)
//
//
// // 쿠키에서 특정 이름(name)의 값을 찾는 함수
// function getCookie(name) {
//     const cookie = document.cookie               // 모든 쿠키 문자열 가져오기 ('a=3; b=2')
//         .split('; ')                             // ['a=3', 'b=2'] 배열로 분리
//         .find(cookie => cookie.split('=')[0] === name) // '이름'이 일치하는 쿠키 찾기
//     return cookie                                // 예: 'a=3'
// }
//
// // 'a'라는 이름의 쿠키를 가져와 출력
// console.log(getCookie('a')) // 결과: 'a=3'
//
// // 'b'라는 이름의 쿠키를 가져와 출력
// console.log(getCookie('b')) // 결과: 'b=2'
console.log('---------------------------------------')

// Storage(스토리지)
// → 도메인 단위로 저장
// → 5MB 제한
// → 세션 혹은 영구 저장 가능

// sessionStorage: 브라우저 세션이 유지되는 동안만 데이터 저장
// localStorage: 따로 제거하지 않으면 영구적으로 데이터 저장

// .getItem(): 데이터 조회
// .setItem(): 데이터 추가
// .removeItem(): 데이터 제거
// .clear(): 전체 초기화

// localStorage.setItem('a', 'Hello world!')
// localStorage.setItem('b', { x: 1, y: 2 })
// localStorage.setItem('d', JSON.stringify({ x: 1, y: 2 }))
// localStorage.setItem('c', 123)
//
// console.log(localStorage.getItem('a')) // Hello world!
// console.log(localStorage.getItem('b')) // [object Object]
// console.log(JSON.parse(localStorage.getItem('d'))) // ["x": 1, "y": 2]
// console.log(localStorage.getItem('c')) // '123'

sessionStorage.setItem('a', 'Hello world!')
sessionStorage.setItem('b', { x: 1, y: 2 })
sessionStorage.setItem('d', JSON.stringify({ x: 1, y: 2 }))
sessionStorage.setItem('c', 123)

console.log(sessionStorage.getItem('a')) // Hello world!
console.log(sessionStorage.getItem('b')) // [object Object]
console.log(JSON.parse(sessionStorage.getItem('d'))) // ["x": 1, "y": 2]
console.log(sessionStorage.getItem('c')) // '123'