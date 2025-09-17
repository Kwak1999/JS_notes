// 동기(Synchronous)와 비동기(Asynchronous)
// - 동기 : 순차적으로 코드 실행 o
// - 비동기 : 순차적으로 코드 실행 x

// ex
// console.log(1)
// setTimeout(() => { console.log(2)}, 1000)
// console.log(3)

// ex
const btnEl = document.querySelector('h1')
btnEl.addEventListener('click', () => {
    console.log('Clicked')
})
console.log('hello world')

