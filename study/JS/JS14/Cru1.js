// // document.createElement()
//
// // 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환
//
// const divEl = document.createElement('div')
// console.log(divEl)
//
// const inputEl = document.createElement('input')
// console.log(inputEl)
console.log('======================================1')

// // E.prepend() / E.append()
//
// // 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입
//
// const parentEl = document.querySelector('.parent')
//
// const el = document.createElement('div')
// el.textContent = 'Hello'
//
// parentEl.prepend(new Comment('주석'))
// parentEl.append(el, 'Text')
console.log('======================================2')
//
// // E.remove()
//
// // 요소를 제거
//
// const el2 = document.querySelector('.child')
// el2.remove()
console.log('======================================3')
//
// // E.insertAdjacentElement()
//
// // '대상 요소'의 지정한 위치에 '새로운 요소'를 삽입
// // 대상_요소. insertAdjacentElement(위치, 새로운_요소)
//
// /* html */`
// <!--beforebegin-->
// <div class="target">
// <!--    afterbegin-->
//     Content
// <!--    beforeend-->
// </div>
// <!-- afterend-->`
// const childEl = document.querySelector('.child')
// const newEl = document.createElement('span')
// newEl.textContent = 'Hello'
//
// childEl.insertAdjacentElement('beforebegin', newEl)
console.log('======================================4')
//
// // N.insertBefore()
//
// // '부모 노드'의 자식인 '참조 노드'의 이전 현제로 '노드'를 삽입
// // 부모_노드.insertBefore(노드, 참조_노드)
//
// const parentEl2 = document.querySelector('.parent')
// const childEl2 = document.querySelector('.child')
// const newEl2 = document.createElement('span')
// newEl2.textContent = 'Hello'
//
// parentEl2.insertBefore(newEl2, childEl2)
console.log('======================================5')

// // N.contains()
//
// // 주어진 노드가 노드의 자신을 포함한 후손인지 확인
// // 노드.contains(주어진_노드)
//
// const parentEl3 = document.querySelector('.parent')
// const childEl3 = document.querySelector('.child')
//
// console.log(parentEl3.contains(childEl3)) // true
// console.log(document.body.contains(parentEl3)) // true
// console.log(document.body.contains(childEl3)) // true
// console.log(document.body.contains(document.body)) // true
// console.log(parentEl3.contains(parentEl3)) // true
// console.log(parentEl3.contains(document.body)) // false
// console.log(childEl3.contains(document.body)) // false
console.log('======================================6')

// // N.textContent()
//
// // 노드의 모든 텍스트를 얻거나 변경
//
// const el = document.querySelector('.child')
// console.log(el.textContent)
//
// el.textContent = '7'
// console.log(el.textContent)
console.log('======================================7')

// E.innerHTML

// 요소의 모든 HTML 내용을 하나의 문자로 얻거나,
// 새로운 HTML을 지정

const el = document.querySelector('.parent')
console.log(el.innerHTML)

el.innerHTML = /* html */`
<div style = "border: 4px solid">
    <span style="color: red;">hello</span>
    <span style="color: red;">hello</span>
</div>`