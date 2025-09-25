// 정규표현식(RegExp, Regular Expression)

// → 문자 검색(Search)
// → 문자 대체(Replace)
// → 문자 추출(Extract)


// 생성자 방식
// new RegExp('표현', '옵션')
// new RegExp('[a-z]', 'gi')

// 리터럴 방식
// /표현/옵션
// /[a-z]/gi


const str = `
010-1234-5678
thesecon@gmail.com
Hello world!
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
hello@naver.com
http://localhost:1234
동해물과 백두산이 마르고 닳도록
abbccdddddeeeee
`
//  g (global)
// 전체 검색을 의미
//     문자열 내에서 일치하는 모든 항목을 찾음
//     이 옵션이 없으면 첫 번째 일치 항목만 반환
//
//  i (ignore case)
// 대소문자 구분 없이 검색
//     the, The, THE, tHe 등 모두 매치

// const regexp = new RegExp('the', 'gi')
const regexp = /the/gi
console.log(str.match(regexp))
console.log(str.match(/the/gi))