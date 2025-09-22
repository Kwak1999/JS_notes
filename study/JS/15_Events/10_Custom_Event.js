// 커스텀 이벤트와  디스패치

const child1 = document.querySelector('.child:nth-child(1)')
const child2 = document.querySelector('.child:nth-child(2)')

// child1.addEventListener('click', event => {
//     // 강제로 이벤트 발생
//     child2.dispatchEvent(new Event('click'))
//     child2.dispatchEvent(new Event('wheel'))
//     child2.dispatchEvent(new Event('keydown'))
// })
// child2.addEventListener('click', event => {
//     console.log('Child2 Click')
// })
// child2.addEventListener('wheel', event => {
//     console.log('Child2 Wheel')
// })
// child2.addEventListener('keydown', event => {
//     console.log('Child2 Keydown')
// })

// 특정 데이터를 전달받아서 사용해야하는 상황이면 커스텀 이벤트 사용
child1.addEventListener('hello-world', event => {
    console.log('커스텀 이벤트 발생')
    console.log(event.detail) // detail 속성 이름 그대로 사용해야 함
})

child2.addEventListener('click', () => {
    child1.dispatchEvent(new CustomEvent('hello-world', {
        detail: 123
    }))
})