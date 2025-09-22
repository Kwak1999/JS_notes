// 각 페이지에 해당하는 HTML 템플릿을 정의합니다.
const page1 = /* html */ `
  <section class="page1">
    <h1>Page 1</h1>
  </section>
`

const page2 = /* html */ `
  <section class="page2">
    <h1>Page 2</h1>
  </section>`

const page3 = /* html */ `
  <section class="page3">
    <h1>Page 3</h1>
  </section>
`

// 404 Not Found 페이지에 대한 HTML 템플릿을 정의합니다.
const pageNotFound = /* html */ `
  <section>
    <h1>404 Page Not Found!</h1>
  </section>
`

// 라우팅 정보를 담는 배열입니다.
// 각 객체는 'path' (URL 해시값)와 해당 경로에 매칭되는
// 'template' (HTML 템플릿)을 가집니다.
const pages = [
    { path: '#/page1', template: page1 },
    { path: '#/page2', template: page2 },
    { path: '#/page3', template: page3 }
]

// HTML에서 'id'가 'app'인 요소를 가져옵니다.
// 이 요소에 페이지 내용이 렌더링
const appEl = document.querySelector('#app')

// 페이지를 렌더링하는 함수
const render = () => {
    console.log(history)
    // history 객체 상태를 콘솔에 출력 (디버깅용)

    // 현재 URL의 해시값(location.hash)과 일치하는 페이지를
    // `pages` 배열에서 찾습니다.
    const page = pages.find(page => page.path === location.hash)

    // 찾은 페이지가 있으면 해당 페이지의 템플릿을
    // 'appEl'에 삽입하고,
    // 없으면 'pageNotFound' 템플릿을 삽입합니다.
    appEl.innerHTML = page
        ? page.template
        : pageNotFound
}

// 브라우저의 뒤로 가기/앞으로 가기 버튼을 눌러 URL 해시값이
// 변경될 때 'render' 함수를 호출하도록 이벤트 리스너를 추가합니다.

// 'popstate' 이벤트는 `history.pushState()`에 의해 생성된
// 상태 변경에 대한 응답으로 발생합니다.
window.addEventListener('popstate', render)

// 초기 페이지 로드 시 'render' 함수를 호출하여
// 현재 URL 해시에 맞는 페이지를 표시합니다.
render()

// 특정 페이지로 이동하고 브라우저 기록에 추가하는 함수입니다.
const pagePush = num => {
    // `history.pushState()`를 사용하여 브라우저의
    // 기록 스택에 새 항목을 추가합니다.

    // 첫 번째 인자: state 객체 (현재 예제에서는 "전달할 데이터 - N" 문자열을 사용)
    // 두 번째 인자: title (거의 모든 브라우저에서 무시되므로 null을 사용)
    // 세 번째 인자: URL (새로운 URL 해시값)
    history.pushState(`전달할 데이터 - ${num}`, null, `#/page${num}`)
    // URL이 변경되었으므로 'render' 함수를 다시 호출하여 새로운 페이지 내용을 표시합니다.
    render()
}

// 'nav' 요소 안에 있는 'input' 요소를 가져옵니다.
const inputEl = document.querySelector('nav input')

// 입력 필드에서 'keydown' 이벤트가 발생했을 때
// 실행될 이벤트 리스너를 추가합니다.
inputEl.addEventListener('keydown', event => {
    // 만약 눌러진 키가 'Enter'라면
    if (event.key === 'Enter'){
        // 입력 필드의 현재 값(target.value)을
        // 'pagePush' 함수의 인자로 전달하여 해당 페이지로 이동합니다.
        pagePush(event.target.value)
    }
})

// scrollRestoration: auto 새로고침하면 스크롤 위치 복원
// manual 원래 있던 자리에서 새로고침