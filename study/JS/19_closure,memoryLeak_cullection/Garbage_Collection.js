// 가비지 컬렉션

// 자바스크립트의 메모리 관리 방법으로 자바스크립트 엔진이 자동으로
// 데이터가 할당된 메모리에서 더 이상 사용되지 않는 데이터를 해제하는 것을 맗함
// 가비지 컬렉션은 개발자가 직접 강제 실행하거나 관리할 수 없음

// let a = {x : 1}
// let b = a
//
// b.x = 2
// console.log(b)
// console.log(a)

// 객체를 하나 생성하고 emails 속성에 배열을 할당함
const user = {
    name: 'heo',
    age: 15,
    emails: ['123@gmail.com', '123@abc.com'] // 이 배열은 메모리에 저장되고 user가 참조 중
}

// delete 연산자를 사용하여 user 객체의 emails 속성을 제거함
delete user.emails // 이제 user는 emails 배열을 더 이상 참조하지 않음

console.log(user) // { name: 'heo', age: 15 }
// emails 속성이 삭제된 것을 확인할 수 있음

// 이 시점에서 emails 배열은 어디에서도 참조되지 않는다면
// 자바스크립트 엔진의 가비지 컬렉터가 이를 감지하여 메모리에서 제거할 수 있음
// 즉, 메모리 누수를 막기 위해 사용하지 않는 데이터는 자동으로 수거됨