// 타입 가드(Guards)

function logText(el: Element){
    console.log(el.textContent)
}

const h1El = document.querySelector('h1')
// if 부분이 가드가 된다 -> 데이터가 존재할 때 동작하도록 하면서 방어
if(h1El instanceof HTMLHeadingElement){
    logText(h1El)
}


// ex2
function add(val: string | number | boolean){
    let res = 'Result => '
    if(typeof val === 'number'){
        res += val.toFixed(2)
    }
    if (typeof val === 'string'){
        res += val.toUpperCase()
    }
    console.log(res)
}

add(3.141592)
add('hello world')