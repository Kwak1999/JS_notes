// 이벤트 위임(Delegation)

// 비슷한 패턴의 여러 요소에서 이벤트를 핸들링해야 하는 경우,
// 더 상위 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할 수 있습니다.

const parentEL = document.querySelector('.parent')
const childELs = document.querySelectorAll('.child')

// 모든 대상 요소에 이벤트 등록!
// childELs.forEach(el => {
//     el.addEventListener('click', event => {
//         console.log(event.target.textContent)
//     })
// })

// 조상 요소에 이벤트 위임!
parentEL.addEventListener('click', event => {
    const childEL = event.target.closest('.child')
    if (childEL) {
        console.log(childEL.textContent)
    }
})
