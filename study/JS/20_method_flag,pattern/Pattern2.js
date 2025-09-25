
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

// [ab]      → a 또는 b
// [a-z]     → a부터 z 사이의 문자 구간에 일치 (영어 소문자)
// [A-Z]     → A부터 Z 사이의 문자 구간에 일치 (영어 대문자)
// [0-9]     → 0부터 9 사이의 문자 구간에 일치 (숫자)
// [가-힣]   → 가부터 힣 사이의 문자 구간에 일치 (한글)

// \w     → 63개 문자(Word, 대소영문52개 + 숫자10개 + _)에 일치
// \b     → 63개 문자가 아닌 문자 경계(Boundary)
// \d     → 숫자(Digit)에 일치
// \s     → 공백(Space, Tab 등)에 일치

// (?=)   → 앞쪽 일치(Lookahead)
// (?<=)  → 뒤쪽 일치(Lookbehind)

// [ab] : a 또는 b
console.log(str.match(/[ab]/g)) // a, b 다 출력

// [a-z] : 소문자 알파벳
console.log(str.match(/[a-z]/g)) // 모든 소문자 출력됨

// [A-Z] : 대문자 알파벳
console.log(str.match(/[A-Z]/g)) // ['H', 'T', 'Q'] 등

// [0-9] : 숫자
console.log(str.match(/[0-9]/g)) // 전화번호와 포트번호 등에서 숫자 추출

// [가-힣] : 한글
console.log(str.match(/[가-힣]/g)) // '동해물과백두산이마르고닳도록' 등

// \w : 영문자, 숫자, 밑줄
console.log(str.match(/\w+/g)) // ['010', '1234', '5678', 'thesecon', 'gmail', ...]

// \b : 경계
console.log(str.match(/\bfox\b/g)) // ['fox'] ← 단어 경계에 있는 fox만

// \d : 숫자
console.log(str.match(/\d+/g)) // ['010', '1234', '5678', '7035', '60', '1234']

// \s : 공백 문자 (스페이스, 탭, 줄바꿈 포함)
console.log(str.match(/\s/g)) // 모든 공백 (많이 나옴)

// (?=...) : 앞쪽 일치 (예: 뒤에 @ 있는 문자열)
console.log(str.match(/\w+(?=@)/g)) // ['thesecon', 'hello']

// (?<=...) : 뒤쪽 일치 (예: @ 앞에 있는 문자열)
console.log(str.match(/(?<=@)\w+/g)) // ['gmail', 'naver']