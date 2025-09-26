// 타입 단언(Assertion)
// 단언 키워드 - as
// Non-null 단언 연산자 - !

// 1) `document.querySelector`는 Element 또는 null을 반환할 수 있으므로,
//    타입스크립트는 `el.textContent` 접근 시 오류를 발생시킬 수 있음
//    이럴 때 '타입 가드(Type Guard)'를 사용하여 el이 null이 아님을 명확히 할 수 있음
const el = document.querySelector('.title')

// Type Guard: el이 null이 아닐 때만 내부 코드를 실행합니다.
if (el) {
    el.textContent = 'hello world?!'
}

// 2) Non-null 단언 연산자 `!`
//    `x`는 number, null, undefined 타입을 가질 수 있음
//    `if (x)` 조건문으로 `x`가 유효한 값일 때만 내부 코드가 실행, 타입 가드
//    `x!.toFixed(2)`는 개발자가 `x`가 null 또는 undefined가 아님을 확신할 때 사용
//    이를 통해 `toFixed` 메서드를 안전하게 호출할 수 있음
function getNumber(x: number | null | undefined){
    if (x) {
        return Number(x!.toFixed(2))
    }
}
getNumber(3.141592) // 3.14 (정상 작동)
getNumber(null) // undefined (if 조건에 의해 걸러짐)

// 3) `as` 키워드를 사용한 타입 단언
//    `getValue` 함수는 `isNumber` 매개변수에 따라 `x`의 타입이 달라짐
//    `isNumber`가 true일 경우 `x`를 `number`로, false일 경우 `string`으로 단언하여
//    각 타입에 맞는 메서드를 호출합니다.
function getValue(x: string | number, isNumber: boolean){
    if (isNumber){
        // isNumber가 true이므로 x는 number임을 단언하고 toFixed 메서드 사용
        return Number((x as number).toFixed(2))
    }
    // isNumber가 false이므로 x는 string임을 단언하고 toUpperCase 메서드 사용
    return (x as string).toUpperCase()
}
getValue('hello world', false) // 'HELLO WORLD'
getValue(3.141592, true) // 3.14

// 4) 할당 단언 (Definite Assignment Assertions)
//    `let num!: number`는 `num` 변수가 나중에 반드시 `number` 타입으로 할당될 것이며,
//    할당되기 전에 사용될 일은 없을 것이라고 컴파일러에게 알려줍니다.
//    하지만 할당되기 전에 변수를 사용하면 런타임 오류가 발생할 수 있으니 주의해야 합니다.
let num!: number
// console.log(num) // 주의: 이 줄은 TypeScript 5.x 이상에서 "할당되지 않은 변수 사용" 오류를 발생시킬 수 있습니다.
num = 123 // 이제 num에 number 타입의 값이 할당되었습니다.
console.log(num) // 123