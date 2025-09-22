// keyboard Events

// keydown | 키를 누를 때
// keyup | 키를 뗄 때

const inputEl = document.querySelector('input')

// keydown | 키를 누를 때
// inputEl.addEventListener('keydown', event => {
//     console.log(event.key)
// })

// keyup | 키를 뗄 때
inputEl.addEventListener('keyup', event => {
    if (event.key === 'Enter' && !event.isComposing){
        console.log(event.isComposing) // CJK 문자 처리하는 과정인지를 true false로 나타냄
        console.log(event.target.value)
    }
})