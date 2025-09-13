// 즉시실행함수 IIFE

const a = 7
const double = () => {
        console.log(a * 2)
    }

// ;(여기에 () => {} 코드 삽입)()
;(() => {
    console.log(a * 2)
})()

;(() => {console.log(a * 2)})() // (F)()
;(function () {console.log(a * 2)})() // (F)()
;(function () {console.log(a * 2)} ()) // (F())
;!function (){console.log(a * 2)}() // !F()
;+function () {console.log(a * 2)} () // +F()

;((a, b) => {
    console.log(a.innerWidth)
    console.log(b.body)
})(window, document)
// 코드의 난독화