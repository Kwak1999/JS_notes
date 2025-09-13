// Getter, Setter

// 클래스 선언: User 클래스는 이름과 성을 속성으로 가짐
class User {
    constructor(first, last) {
        // 생성자(constructor): 클래스 인스턴스가 생성될 때 실행
        // first와 last 파라미터를 받아서 각각 속성으로 저장
        this.firstName = first
        this.lastName = last
    }

    // Getter: 객체의 속성을 '메서드처럼 보이지 않고' 속성처럼 읽을 수 있게 해줌(값을 얻는 행위)    // 이 메서드는 fullName이라는 '가상 속성'처럼 사용됨
    get fullName() {
        // 현재 객체의 firstName과 lastName을 결합해서 전체 이름 반환
        return `${this.firstName} ${this.lastName}`
    }

    // Setter: 외부에서 fullName에 값을 할당하면 이 메서드가 자동 실행됨(값을 지정)
    // 값을 설정할 때 필요한 처리 로직을 정의
    set fullName(value) {
        // 전달받은 문자열 value 출력 (예: 'neo and')
        console.log(value)

        // 공백을 기준으로 문자열을 분리해서 배열로 만듦 → 구조 분해 할당으로 각 변수에 저장
        ;[this.firstName, this.lastName] = value.split(' ')
    }
}

// User 클래스의 인스턴스를 생성하면서 초기 이름 설정
const heropy = new User('hp', 'pa')

// Getter 사용: fullName 속성처럼 보이지만 사실은 get fullName() 메서드가 실행됨
console.log(heropy.fullName) // 출력: 'hp pa'

// firstName 속성만 직접 변경
heropy.firstName = 'neo'

// Getter는 항상 현재 상태의 firstName, lastName 값을 조합해서 반환
console.log(heropy.fullName) // 출력: 'neo pa'

// Setter 사용: fullName에 값을 대입하면 set fullName(value) 메서드가 호출됨
heropy.fullName = 'neo and' // 내부적으로 firstName = 'neo', lastName = 'and'로 바뀜

// 전체 객체를 출력하면 변경된 속성들이 보임
console.log(heropy)
// 출력: User { firstName: 'neo', lastName: 'and' }
