// 호출 스케줄링

const hello = () => {
    console.log('hi')
}
const timeout = setTimeout(hello, 2000)
// setInterval(hello, 2000) 2초마다 실행
const h1E1 = document.querySelector('h1')
h1E1.addEventListener('click', () => {
    console.log('clear')
    clearTimeout(timeout)
    // clearInterval(timeout) 중지
})
