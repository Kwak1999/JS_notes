// // 이벤트 전파(버블) 정지
//
// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')
// const anchorEl = document.querySelector('a')
//
// window.addEventListener('click', event => {
//     console.log('Window!')
// }, {capture: true})
//
// document.body.addEventListener('click', event => {
//     console.log('Body!')
//     event.stopPropagation() // 이걸 넣으면 window, body 까지만 출력
// }, {capture: true})
// // capture: true는  해당 핸들러가 먼저 동작하도록 만들어줌
//
// parentEl.addEventListener('click', event => {
//     console.log('Parent!')
// }, {capture: true})
// // {capture: true}는 먼저 조상 요소부터 순차적으로 실행
//
// childEl.addEventListener('click', event => {
//     console.log('Child!')
//     // event.stopPropagation() // 버블링 정지!
// })
//
// anchorEl.addEventListener('click', event => {
//     console.log('Anchor!')
// })

const parentEl = document.querySelector('.parent')

const handler  = () => {
    console.log('parent')
}

// addEventListener() 로 capture: true 를 추가하면 removeEventListener에서도 동일하게 추가해줘야함
parentEl.addEventListener('click', handler, {capture: true})
parentEl.removeEventListener('click', handler, {capture: true})