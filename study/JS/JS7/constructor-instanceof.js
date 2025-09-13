// 클래스 A 정의
class A {
    constructor() {
        // 아무 동작 없음
    }
}

// 클래스 B는 A를 상속
class B extends A {
    constructor() {
        super() // 부모 클래스 A의 생성자 호출
    }
}

// 클래스 C는 B를 상속 (즉, A → B → C 순서로 상속)
class C extends B {
    constructor() {
        super() // 부모 클래스 B의 생성자 호출
    }
}

// 인스턴스 생성
const a = new A()
const b = new B()
const c = new C()

// instanceof 연산자는 객체가 특정 클래스 또는 그 상위 클래스로부터 생성되었는지 확인
console.log(b instanceof A) // true: B는 A를 상속받았기 때문
console.log(b instanceof B) // true: b는 B의 인스턴스
console.log(b instanceof C) // false: b는 C와 무관

// constructor는 해당 객체를 생성한 생성자 함수를 가리킴
console.log(c.constructor === A) // false: C의 인스턴스이므로 생성자는 A가 아님
console.log(c.constructor === B) // false: C가 B를 상속받았지만 직접 생성자는 아님
console.log(c.constructor === C) // true: c는 C로부터 생성되었음

// 배열은 자바스크립트의 내장 객체 중 하나
const fruits = ['ap', 'ba']
console.log(fruits.constructor === Array) // true: 배열은 Array 생성자로 만들어짐
console.log(fruits instanceof Array)      // true: fruits는 Array 인스턴스

