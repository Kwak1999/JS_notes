// 콜백(Callback) 패턴

const a = (callback) => {
    setTimeout(() => {
        console.log(1)
        callback()
    }, 1000)
}
const b = (callback) => {
    setTimeout(() => {
        console.log(2)
        callback()
    }, 1000)
}
const c = () => console.log(3)
// 계속 들여쓰기가 진행. 콜백 지옥
// 코드 작성, 해석에 어려움
a(() => {
    b(() => {
        c()
    })
})
