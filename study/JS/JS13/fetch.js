// fetch(주소, 옵션)
// 네트워크 요청을 보내는 기본 API
// Promise 인스턴스를 반환하여 비동기 처리 가능
// 옵션에는 method, headers, body 등을 설정 가능

fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers', {
    method: 'GET', // HTTP 메서드 (GET은 body 사용 불가)
    headers: {
        'Content-Type' : 'application/json' // 요청 헤더 설정 (body가 JSON일 경우)
    },
    body: JSON.stringify({                 // GET 요청에서는 body를 사용하지 않음 (무시됨)
        name: 'HEROPY',
        age: 15,
        email: 'gmail'
    })
})
    .then(res => res.json())              // 응답을 JSON 형식으로 변환 (또 다른 Promise 반환)
    .then(json => console.log(json))      // 변환된 JSON 데이터를 출력

// async/await 버전 (더 깔끔하고 동기적으로 보임)
const wrap = async () => {
    // fetch 호출은 Promise를 반환하므로 await로 기다림
    const res = await fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
    // 응답 본문을 JSON으로 파싱 (또 다른 await 필요)
    const json = await res.json()
    console.log(json) // 최종 결과 출력
}
wrap()
