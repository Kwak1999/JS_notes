// 인터페이스 (Interface)
// 인덱스 가능 타입 (Indexable Types) - 인덱스 시그니처 (Index Signature)

// 인덱스 시그니처는 객체가 특정 타입의 인덱스(키)를 가질 수 있음을 선언하는 방식입니다.
// 주로 객체의 속성 이름(키)을 미리 알 수 없거나, 유연하게 다양한 속성을 다뤄야 할 때 사용됩니다.

// 배열 예시 (주석 처리됨):
// 배열은 본질적으로 숫자를 인덱스로 갖는 객체이므로, 숫자 인덱스 시그니처를 사용하여 타입을 정의할 수 있습니다.
interface Fruits{
    // [item: number]: string; 은 '숫자(number)'를 인덱스(item)로 갖고, 그 값은 '문자열(string)'인 타입을 의미합니다.
    [item: number]: string
}

const fruits: Fruits = ['Apple', 'Banana', 'Cherry'] // Fruits 인터페이스에 따라 숫자 인덱스에 문자열 값이 할당됩니다.
console.log(fruits) // 출력: [ 'Apple', 'Banana', 'Cherry' ]

// 객체 예시 (주석 처리됨):
// 객체는 문자열을 키로 갖는 경우가 많으므로, 문자열 인덱스 시그니처를 사용합니다.
interface User{
    // [key: string]: unknown; 은 '문자열(string)'을 키(key)로 갖고, 그 값은 '알 수 없는(unknown)' 타입임을 의미합니다.
    // 'unknown'은 어떤 타입의 값이든 올 수 있음을 나타내며, 사용 전에 타입 확인이 필요합니다.
    // 인덱스 시그니처가 있는 인터페이스는 반드시 인덱스 시그니처가 나타내는 타입과 호환되는 명시적 속성을 가져야 합니다.
    // 예를 들어, name: string은 [key: string]: unknown과 호환됩니다.
    [key: string]: unknown
    name: string // 명시적으로 선언된 속성들
    age: number
}

const heropy: User = {
    name: 'Heropy',
    age: 12
}
heropy['isValid'] = true // 인덱스 시그니처 덕분에 런타임에 새로운 속성을 추가할 수 있습니다. (isValid는 unknown 타입으로 간주됨)
heropy['emails'] = ['123@123.com', '123@321.com'] // 마찬가지로 새로운 속성 추가 (emails는 unknown 타입으로 간주됨)
console.log(heropy) // 출력: { name: 'Heropy', age: 12, isValid: true, emails: [ '123@123.com', '123@321.com' ] }


// ex2: 인덱스 시그니처와 함수 매개변수 활용 예시
interface Payload {
    // 이 Payload 인터페이스는 어떤 문자열이든 키로 사용될 수 있고, 그 값의 타입은 무엇이든 될 수 있음을 의미합니다.
    // 이는 특정 구조를 강제하지 않고 유연하게 다양한 형태의 객체를 받을 때 유용합니다.
    [key: string]: unknown
}

// logValues 함수는 Payload 타입의 객체를 매개변수로 받습니다.
function logValues(payload: Payload) {
    // 'for...in' 루프를 사용하여 payload 객체의 모든 열거 가능한 속성 키를 반복합니다.
    for (const key in payload) {
        // payload[key]를 통해 해당 키에 해당하는 값을 가져와 콘솔에 출력합니다.
        // 여기서 payload[key]의 타입은 Payload 인터페이스의 인덱스 시그니처에 따라 'unknown'입니다.
        // 'unknown' 타입의 값은 사용하기 전에 명시적인 타입 단언(type assertion)이나 타입 가드(type guard)를 통해 타입을 좁혀야 안전합니다.
        // 이 예시에서는 단순히 출력하므로 타입 좁힘이 필수적이지는 않습니다.
        console.log(payload[key])
    }
}

interface User {
    // User 인터페이스도 문자열 인덱스 시그니처를 가집니다.
    // 이는 User 객체가 name, age, isValid 외에도 동적으로 추가될 수 있는 다른 속성들을 가질 수 있음을 허용합니다.
    [key: string]: unknown
    name: string // User는 반드시 name 속성을 문자열로 가져야 합니다.
    age: number // User는 반드시 age 속성을 숫자로 가져야 합니다.
    isValid: boolean // User는 반드시 isValid 속성을 불리언으로 가져야 합니다.
}

// User 인터페이스를 만족하는 heropy 객체를 선언하고 초기화합니다.
const heropy: User = {
    name: 'Heropy',
    age: 85,
    isValid: true
}

// logValues 함수를 호출하여 heropy 객체를 전달합니다.
// heropy 객체는 User 타입이며, User 타입은 Payload 타입의 인덱스 시그니처 ([key: string]: unknown)와 호환되므로,
// heropy 객체를 Payload 타입으로 간주하여 logValues 함수에 전달할 수 있습니다.
// logValues 함수는 heropy 객체의 모든 속성(name, age, isValid)의 값을 순회하며 콘솔에 출력할 것입니다.
logValues(heropy)
// 예상 출력:
// Heropy
// 85
// true