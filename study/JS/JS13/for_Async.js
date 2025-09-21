// 영화 데이터를 가져오는 비동기 함수
// OMDB API를 사용하여 영화 정보를 가져옴
// fetch는 기본적으로 Promise를 반환하므로 .then()으로 처리
// 최종적으로 res(json 파싱된 결과)를 resolve로 넘김
const getMovies = movieName => {
    return new Promise(resolve => {
        fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
            .then(res => res.json())       // 응답을 JSON으로 파싱
            .then(res => resolve(res))     // 파싱된 결과를 resolve
    })
}

// 영화 검색어(title) 리스트
const titles = ['frozen', 'aven', 'avatar']

/*
// forEach와 async/await의 조합은 주의 필요!
// forEach는 비동기 처리를 기다려주지 않음
// 따라서 콘솔 로그가 순서대로 찍히지 않을 수 있음 (병렬 처리됨)
titles.forEach(async title => {
    const movies = await getMovies(title)
    console.log(title, movies)
})
*/

// for...of 루프와 async/await 조합을 사용한 순차 처리
// for...of는 각 반복마다 await를 기다려줌 (동기적으로 동작함)
// 결과적으로 순차적으로 API 호출하고 응답을 처리하게 됨
const wrap = async () => {
    for (const title of titles){
        const movies = await getMovies(title)
        console.log(title, movies) // 각 title에 대한 영화 목록 출력
    }
}
wrap()
