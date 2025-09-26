// 함수 - 명시적 this

// 인터페이스 정의: Cat이라는 타입을 정의함
// name은 문자열, age는 숫자 타입
interface Cat {
    name: string
    age: number
}

// cat이라는 객체를 Cat 타입으로 생성
const cat: Cat = {
    name: 'lucy',
    age: 3
}

// 함수 선언부에 this: Cat 이 명시되어 있음
// 이건 이 함수가 호출될 때, this가 Cat 타입이어야 한다는 뜻
function hello(this: Cat, message: string) {
    // this는 Cat 타입이므로 this.name을 안전하게 사용 가능
    console.log(`hello ${this.name}, ${message}`)
}

// 일반적으로 hello('hihi')로는 호출 불가능함 (this를 바인딩하지 않았기 때문)
// 대신 call 메서드를 사용하여 this를 cat 객체로 바인딩하고 호출함
hello.call(cat, 'hihi') // 결과: hello lucy, hihi
