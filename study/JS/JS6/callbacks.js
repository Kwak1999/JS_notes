// 콜백(함수가 실행될 때 인수로 들어가는 함수)

// const a = callback =>{
//     callback()
//     console.log('A')
//     callback()
// }
//
// const b = () => {
//     console.log('B')
// }
//
// a(b)

// const sum = (a, b, c) => {
//     setTimeout(() => {
//         c(a + b)
//     }, 1000)
// }
//
// sum(1, 2, value => {
//     console.log(value)
// })
//
// sum(3, 7, value => {
//     console.log(value)
// })

const loadImage = (url, cb) => {
    // 새로운 <img> 태그를 생성
    const imgEl = document.createElement('img')

    // <img> 태그의 src 속성에 이미지 주소를 할당하여 이미지 로딩 시작
    imgEl.src = url

    // 이미지가 로드(다운로드)되었을 때 실행할 이벤트 등록
    imgEl.addEventListener('load', () => {
        // 이미지가 로드된 후 1초 기다렸다가 콜백 함수 실행
        setTimeout(() => {
            cb(imgEl)
        }, 1000)
    })

}

// HTML 문서 내에서 class가 'container'인 요소를 찾음
const containerEl = document.querySelector('.container')

// 이미지가 로드된 후 실행되는 콜백 함수
loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcefUr9O1WxKQuwH8_k7Lay7mpiLoLP74Mg&s', (imgEl) => {

    // 기존에 있던 HTML 내용 비우기
    containerEl.innerHTML = ''

    // 새로 불러온 이미지를 container 요소에 추가
    containerEl.append(imgEl)
})