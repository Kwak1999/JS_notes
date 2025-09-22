// Mouse & Pointer Events

// click         | 클릭했을 때
// dblclick      | 더블 클릭했을 때
// mousedown     | 버튼을 누를 때
// mouseup       | 버튼을 뗄 때
// mouseenter    | 포인터가 요소 위로 들어갈 때
// mouseleave    | 마우스가 요소 밖으로 나올 때
// mousemove     | 포인터가 움직일 때
// contextmenu   | 우클릭했을 때
// wheel         | 휠 버튼이 회전할 때

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

// click         | 클릭했을 때
// childEl.addEventListener('click', () => {
//     childEl.classList.toggle('active')
// })

// dblclick      | 더블 클릭했을 때
// childEl.addEventListener('dblclick', () => {
//     childEl.classList.toggle('active')
// })

// mousedown     | 버튼을 누를 때
// childEl.addEventListener('mousedown', () => {
//     childEl.classList.add('active')
// })
// mouseup       | 버튼을 뗄 때
// childEl.addEventListener('mouseup', () => {
//     childEl.classList.remove('active')
// })

// mouseenter    | 포인터가 요소 위로 들어갈 때
// childEl.addEventListener('mouseenter', () => {
//     childEl.classList.add('active')
// })
// mouseleave    | 마우스가 요소 밖으로 나올 때
// childEl.addEventListener('mouseleave', () => {
//     childEl.classList.remove('active')
// })

// mousemove     | 포인터가 움직일 때
// childEl.addEventListener('mousemove', event => {
//     console.log(event.offsetX, event.offsetY)
// })

// contextmenu   | 우클릭했을 때
// childEl.addEventListener('contextmenu', event => {
//     event.preventDefault()
//     console.log(event)
// })

// wheel         | 휠 버튼이 회전할 때
parentEl.addEventListener('wheel', event => {
    console.log(event)
})