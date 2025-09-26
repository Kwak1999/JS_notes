// 함수 - 오버로딩

// 🧠 1) 함수 이름은 다르지만 같은 기능을 하는 두 함수 정의

function add1(a: string, b: string) {
    return a + b // 문자열 덧셈 (문자열 이어붙이기)
}

function add2(a: number, b: number) {
    return a + b // 숫자 덧셈
}

add1('hello ', 'world') // 결과: 'hello world'
add2(1, 2)              // 결과: 3


// 🧠 2) 함수 오버로딩 (하나의 이름으로 여러 타입 처리 가능하게)

function add(a: string, b: string): string // 오버로드 시그니처 1 (문자열용)
function add(a: number, b: number): number // 오버로드 시그니처 2 (숫자용)
function add(a: any, b: any) {
    // 실제 구현은 공통적으로 처리
    return a + b
}

add('hello ', 'world') // 'hello world' - 문자열 덧셈
add(1, 2)              // 3 - 숫자 덧셈
