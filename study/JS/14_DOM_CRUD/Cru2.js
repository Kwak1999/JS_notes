// // E.dataset
//
// // 요소의 각 `data-` 속성 값을 얻거나 지정
//
// // HTML 요소 중 class="child"인 요소를 선택
// const el = document.querySelector('.child')
//
// // 일반 문자열과 객체 정의
// const str = 'hello world'
// const obj = { a: 1, b: 2 }
//
// // dataset을 이용해 커스텀 데이터 속성(data-*) 설정
// // - data-helloworld="hello world" 로 HTML에 추가됨
// el.dataset.helloworld = str
//
// // 객체는 dataset에 직접 저장할 수 없기 때문에 문자열로 변환(JSON.stringify 사용)
// // - HTML에는 data-object="{"a":1,"b":2}" 형태로 들어감
// el.dataset.object = JSON.stringify(obj)
//
// // 저장된 문자열 읽기 (data-helloworld 값 출력)
// console.log(el.dataset.helloworld) // "hello world"
//
// // 문자열 형태의 JSON 데이터 읽기
// console.log(el.dataset.object) // '{"a":1,"b":2}'
//
// // JSON.parse를 사용해 다시 객체 형태로 복원
// console.log(JSON.parse(el.dataset.object)) // { a: 1, b: 2 }
console.log('=============================================')

// // E.tagName: 요소의 태그 이름을 문자열로 반환
//
// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')
// const el = document.createElement('span') // <span> 요소 생성
//
// console.log(parentEl.tagName)  // 예: "DIV"
// console.log(childEl.tagName)   // 예: "DIV"
// console.log(el.tagName)        // "SPAN"
// console.log(document.body.tagName) // "BODY"

console.log('=============================================')

// // E.id: 요소의 id 속성 값을 얻거나 변경
//
// const el = document.querySelector('.child')
// console.log(el.id)     // 기존 id 출력
//
// el.id = 'child1'       // id 속성 변경
// console.log(el.id)
// console.log(el)        // 변경된 요소 전체 출력

console.log('=============================================')

// // E.className: 요소의 class 속성을 문자열로 얻거나 수정
//
// const el = document.querySelector('.child')
// console.log(el.className)            // 기존 class 출력
//
// el.className += ' child1 active'     // 클래스 문자열 추가
// console.log(el.className)
// console.log(el)

console.log('=============================================')

// // E.classList: 클래스 목록 제어 (add/remove/toggle/contains)
//
// const el = document.querySelector('.child')
//
// el.classList.add('active')                       // 클래스 추가
// console.log(el.classList.contains('active'))     // true
//
// el.classList.remove('active')                    // 클래스 제거
// console.log(el.classList.contains('active'))     // false
//
// el.addEventListener('click', () => {
//     el.classList.toggle('active')                // 클릭 시 클래스 토글
//     console.log(el.classList.contains('active'))
// })

console.log('=============================================')

// // E.style: 인라인 스타일 속성 제어
//
// const el = document.querySelector('.child')
//
// // 개별 지정 방법 (주석 처리됨)
// // el.style.width = '100px'
// // el.style.fontSize = '20px'
// // el.style.backgroundColor = 'green'
// // el.style.position = 'absolute'
//
// // Object.assign으로 한 번에 설정
// Object.assign(el.style, {
//     width: '100px',
//     fontSize: '20px',
//     backgroundColor: 'green',
//     position: 'absolute'
// })
//
// console.log(el.style)                 // 전체 스타일 객체
// console.log(el.style.width)          // '100px'
// console.log(el.style.fontSize)       // '20px'
// console.log(el.style.backgroundColor)// 'green'
// console.log(el.style.position)       // 'absolute'

console.log('=============================================')

// // window.getComputedStyle(): 실제 적용된 스타일 값 읽기 (읽기 전용)
//
// const el = document.querySelector('.child')
// const styles = window.getComputedStyle(el)
//
// console.log(styles.width)
// console.log(styles.fontSize)
// console.log(styles.backgroundColor)
// console.log(styles.position)

console.log('=============================================')

// // E.getAttribute() / E.setAttribute()
// // 요소에서 특정 속성 값을 얻거나 지정
//
// const el = document.querySelector('.child')
//
// el.setAttribute('title', 'hello world')     // title 속성 추가
// console.log(el.getAttribute('title'))       // "hello world"

console.log('=============================================')

// // E.hasAttribute() / E.removeAttribute()
// // 특정 속성의 존재 여부를 확인하거나 제거
//
const el = document.querySelector('.child')

console.log(el.hasAttribute('class'))       // class 속성이 있으면 true

el.removeAttribute('class')                 // class 속성 제거
console.log(el.hasAttribute('class'))       // 제거 후 확인 (false)

console.log(el)                             // 변경된 요소 출력