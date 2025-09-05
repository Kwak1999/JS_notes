function hello(){
    console.log('hello')
}

console.log(hello)

function getNumber(){
    return 123
}

console.log(getNumber()) // 123

const a = function (){
    console.log('A')
}

const b = function (c){
    console.log(c)
    c()
}

b(a) // console.log('A')
// A