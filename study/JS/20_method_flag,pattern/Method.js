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

const regexp = /fox/gi

console.log(regexp.test(str))
console.log(str.match(regexp))
console.log(str.replace(regexp, 'cat'))