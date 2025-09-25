
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

// ^ab   → 줄(Line) 시작에 있는 ab와 일치
// ab$   → 줄(Line) 끝에 있는 ab와 일치
// .     → 임의의 한 문자와 일치
// a|b   → a 또는 b와 일치
// ab?   → b가 없거나 b와 일치

// {3}     → 3개 연속 일치
// {3,}    → 3개 이상 연속 일치
// {3,5}   → 3개 이상 5개 이하(3~5개) 연속 일치
// {1,}    → 1회 이상 연속 일치, `{1,}` = `+`

// ^ab : 줄 시작에 ab
console.log(str.match(/^010/gm)) // ['010']

// ab$ : 줄 끝에 ab
console.log(str.match(/localhost:1234$/gm)) // ['http://localhost:1234']

// . : 임의의 한 문자
console.log(str.match(/o./g)) // ['on', 'om', 'or', 'ov', 'ow', ...] 등등

// a|b : a 또는 b
console.log(str.match(/fox|dog/g)) // ['fox', 'dog']

// ab? : a 뒤에 b가 0~1개 (b 없거나 있거나)
console.log(str.match(/do?g/g)) // ['dog'] ← 'g'만 있어도 매치됨

// {3} : 정확히 3번 반복
console.log(str.match(/d{3}/g)) // ['ddd']

// {3,} : 3회 이상 반복
console.log(str.match(/d{3,}/g)) // ['dddd'] ← 4개 이상이니까 포함

// {3,5} : 3~5회 반복
console.log(str.match(/d{3,5}/g)) // ['dddd'] ← 최대 5개까지만

// {1,} : 1회 이상 반복 == +
console.log(str.match(/e{1,}/g)) // ['eeeee'] ← e 반복