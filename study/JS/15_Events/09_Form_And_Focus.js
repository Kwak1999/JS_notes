// Focus & Form Events

// focus  | 요소가 포커스를 얻었을 때
// blur   | 요소가 포커스를 잃었을 때
// input  | 값이 변경되었을 때
// change | 상태가 변경되었을 때
// submit | 제출 버튼을 선택했을 때
// reset  | 리셋 버튼을 선택했을 때

const formEl = document.querySelector('form')
const inputEls = document.querySelectorAll('input')

inputEls.forEach(el => {
    // focus  | 요소가 포커스를 얻었을 때
    el.addEventListener('focus', () => {
        formEl.classList.add('active')
    })
    // blur   | 요소가 포커스를 잃었을 때
    el.addEventListener('blur', () => {
        formEl.classList.remove('active')
    })
    // // input  | 값이 변경되었을 때
    // el.addEventListener('input', event => {
    //     console.log(event.target.value)
    // })
    // change | 상태가 변경되었을 때, 입력 후 tab 키를 눌럿을 때 출력
    el.addEventListener('change', event => {
        console.log(event.target.value)
    })
})

// submit | 제출 버튼을 선택했을 때,
formEl.addEventListener('submit', event => {
    event.preventDefault() // 페이지를 새로고침 하는게 기본 동작인데 그걸 막음
    const data = {
        id: event.target[0].value,
        pw: event.target[1].value
    }
    console.log('제출!', data)
})

// reset  | 리셋 버튼을 선택했을 때
formEl.addEventListener('reset', event => {
    console.log('리셋!')
})