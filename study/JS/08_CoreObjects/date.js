// // 타임스탬프 - Wed Jun 04 2025 14:15:19 GMT+0900 (한국 표준시)
// ---------------------------------------------------
// const date = new Date()
// console.log(date)
//
// const d1 = new Date(2025, 11, 15, 12 ,57, 30)
// console.log(d1)
//
// const d2 = new Date('Wed Jun 04 2025 14:15:19 GMT+0900 (한국 표준시)')
// console.log(d2)
// console.log(d2.getFullYear()) // 2025

// // ---------------------------------------------------
// // getFullYear()와 .setFullYear()
// // 날짜 인스턴스의 '연도'를 반환하거나 지정
// ---------------------------------------------------

// const date = new Date()
//
// console.log(date.getFullYear()) // 2025
//
// date.setFullYear(2026)
// console.log(date.getFullYear()) // 2026
// console.log(date)

// // ---------------------------------------------------
// // getMonth() 와 setMonth()
// // 날짜 인스턴스의 '월'을 반환하거나 지정
// // 0부터 시작
// ---------------------------------------------------

// console.log(date.getMonth()) // 5
// console.log(date) // Thu Jun 04 2026 14:21:35 GMT+0900 (한국 표준시)
//
// date.setMonth(5)
// console.log(date.getMonth()) // 0
// console.log(date) // Sun Jan 04 2026 14:22:00 GMT+0900 (한국 표준시)

// // ---------------------------------------------------
// // 일, 시, 분, 초 동일
// // getDay()
// // 날짜 인스턴스의 '요일'을 반환
// ---------------------------------------------------

// const date = new Date()
// const day = date.getDay()
//
// console.log(day)
// console.log(getDayKo(day))
//
// function getDayKo(day){
//     switch (day){
//         case 0: return '일요일'
//         case 1: return '월요일'
//         case 2: return '화요일'
//         case 3: return '수요일'
//         case 4: return '목요일'
//         case 5: return '금요일'
//         case 6: return '토요일'
//     }
// }

// // ---------------------------------------------------
// // getTime(), setTime()
// // 1970-01-01 00:00:00 (유닉스타임)부터 경과한
// // 날짜 인스턴스의 '밀리초(ms)'로 반환하거나 지정
// ---------------------------------------------------

// console.log(date.getTime())
// console.log(date)
//
// date.setTime(17000000000)
// console.log(date.getTime())
// console.log(date)
//
// Date.prototype.isAfter = function (date){
//     const a = this.getTime()
//     const b = date.getTime()
//     return a > b
// }
//
// const d1 = new Date('Wed Jun 04 2025 00:00:00 GMT+0900 (한국 표준시)')
// const d2 = new Date('Wed Jun 04 2026 00:00:00 GMT+0900 (한국 표준시)')
//
// console.log(d1.isAfter(d2)) // false
// console.log(d2.isAfter(d1)) // true

// ---------------------------------------------------
// Date.now()
// 유닉스타임부터 경과한
// 메소드가 호출될 때의 ms로 반환
// ---------------------------------------------------

const time = new Date().getTime()
console.log(Date.now())
console.log(time)

setTimeout(() => {
    console.log(Date.now())
    console.log(time)
}, 1000)