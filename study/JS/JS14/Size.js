// // window.innerWidth / window.innerHeight
// // 현재 화면의 크기를 얻음
//
// console.log(window.innerWidth)
// console.log(window.innerHeight)
console.log('--------------------------------------')

//
// // window.scrollX / window.scrollY
//
// // 페이지의 최상단 기준, 현재 화면의
// // 수평 혹은 수직 스크롤 위치를 얻음
//
// console.log(window.scrollX, window.scrollY)
console.log('--------------------------------------')

// // window.scrollTo() / E.scrollTo()
//
// // 지정된 좌표로 대상(화면, 스크롤 요소)을 스크롤
// // 대상.scrollTo(X좌표, Y좌표)
// // 대상.scrollTo({ top: Y, left: X, behavior: 'smooth'})
//
// const parentEl = document.querySelector('.parent')
// setTimeout(() => {
//     parentEl.scrollTo({
//         left: 0,
//         top: 500,
//         behavior: 'smooth'
//     })
// }, 1000)
console.log('--------------------------------------')

// // E.clientWidth / E.clientHeight
// // 테두리 선을 제외한 요소의 크기를 얻습니다.
//
// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')
//
// console.log(parentEl.clientWidth, parentEl.clientHeight)
// console.log(childEl.clientWidth, childEl.clientHeight)
console.log('--------------------------------------')

// // E.offsetWidth / E.offsetHeight
// // 테두리 선을 포함한 요소의 크기를 얻음
//
// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')
//
// console.log(parentEl.offsetWidth, parentEl.offsetHeight)
// console.log(childEl.offsetWidth, childEl.offsetHeight)
console.log('--------------------------------------')

// E.scrollLeft / E.scrollTop

// 스크롤 요소의 최상단 기준,
// 현재 스크롤 요소의 수평 혹은 수직 스크롤 위치를 얻음

// window.parentEl = document.querySelector('.parent')
// console.log(parentEl.scrollLeft, parentEl.scrollTop)
console.log('--------------------------------------')

// // E.offsetLeft / E.offsetTop
//
// // 페이지의 최상단 기준, 요소의 위치를 얻음
//
// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')
//
// console.log(parentEl.offsetLeft, parentEl.offsetTop)
// console.log(childEl.offsetLeft, childEl.offsetTop)
console.log('--------------------------------------')

// E.getBoundingClientRect()

// 테두리 선을 포함한 요소의 크기와
// 화면에서의 상대 위치 정보를 얻음

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

console.log(parentEl.getBoundingClientRect())
console.log(childEl.getBoundingClientRect())