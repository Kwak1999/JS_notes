// 메모리 누수(Memory Leak)

// 더 이상 필요하지 않은 데이터가 해제되지 못하고 메모리를 계속 차지하는 현상
// 1. 불필요한 전역 변수 사용
// 2. 분리된 노드 참조
// 3. 해제하지 않은 타이머
// 4. 잘못된 클로저 사용

// // 메모리가 낭비되는 예시 1
// window.hello = 'hello world'
// window.heropy = {name: 'heropy', age:15}
console.log('------------------------------')

// // 예시 2
// const btn = document.querySelector('button')
//
// btn.addEventListener('click', () => {
//     const parent = document.querySelector('.parent') // <- 밖으로 나가면 누수 발생
//     console.log(parent)
//     parent && parent.remove()
// })
console.log('------------------------------')

// // 예시 3
// let a = 0
// const intervalId = setInterval(() => {
//     a += 1
// }, 100)
//
// setTimeout(() => {
//     console.log(a)
//     clearInterval(intervalId) // const 키워드로 받은 intervalId 함수를 해제 시켜줌으로써 누수 방지
// }, 1000)
console.log('------------------------------')

// 예시 4
const getFn = () => {
    let a = 0
    return name => {
        // a += 1
        // console.log(a)
        return `hello ${name}`
    }
}

const fn = getFn()
console.log(fn('heropy'))
console.log(fn('neo'))
console.log(fn('le'))
