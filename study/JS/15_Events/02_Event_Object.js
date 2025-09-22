// 이벤트 객체

// 이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있음

const parentEl = document.querySelector('.parent')

// 클릭 이벤트
parentEl.addEventListener('click', event => {
    console.log(event.target, event.currentTarget)
    console.log(event)
})

// 휠 이벤트
parentEl.addEventListener('wheel', event => {
    console.log(event)
})

// 키 이벤트
const inputEl = document.querySelector('input')

inputEl.addEventListener('keydown', event => {
    console.log(event.key)
})