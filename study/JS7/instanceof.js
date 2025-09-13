// 상속

// 운송수단 기본 클래스
class Vehicle {
    constructor(acceleration = 1) {
        this.speed = 0              // 초기 속도
        this.acceleration = acceleration // 가속도
    }

    // 가속 메서드
    accelerate() {
        this.speed += this.acceleration
    }

    // 감속 메서드
    decelerate() {
        if (this.speed <= 0) {
            console.log('정지!')
            return
        }
        this.speed -= this.acceleration
    }
}

// 자전거
// extends 상속을 하게 된다면 super 호출
class Bicycle extends Vehicle {
    constructor(price = 100, acceleration) {
        super(acceleration)   // 부모 클래스(Vehicle) 생성자 호출
        this.price = price    // 가격
        this.wheel = 2        // 바퀴 개수
    }
}

// 자전거 인스턴스 생성
const bicycle = new Bicycle(300)
bicycle.accelerate()
console.log(bicycle)

// instanceof로 상속 관계 확인
console.log(bicycle instanceof Bicycle) // true
console.log(bicycle instanceof Vehicle) // true


// 자동차
class Car extends Bicycle {
    constructor(license, price, acceleration) {
        super(price, acceleration)   // Bicycle 생성자 호출
        this.license = license       // 면허 여부
        this.wheel = 4               // 바퀴 개수 변경
    }

    // 가속 오버라이드 (면허 여부 확인)
    accelerate() {
        if (!this.license) {
            console.error('무면허!')
            return
        }
        this.speed += this.acceleration
        console.log('가속!', this.speed)
    }
}

// 자동차 인스턴스 2개 생성
const carA = new Car(true, 7000, 10)  // 면허 있음
const carB = new Car(false, 4000, 6)  // 면허 없음

carA.accelerate() // 가속 성공
carB.accelerate() // 무면허 에러 출력

// instanceof로 상속 관계 확인
console.log(carA instanceof Car)      // true
console.log(carB instanceof Bicycle)  // true (Bicycle도 상속받았으므로)
console.log(carB instanceof Vehicle)  // true (Vehicle도 상속 계층에 포함)


// 보트
class Boat extends Vehicle {
    constructor(price, acceleration) {
        super(acceleration)
        this.price = price
        this.motor = 1
    }
}

// 보트 인스턴스 생성
const boat = new Boat(10000, 5)

// instanceof로 상속 관계 확인
console.log(boat instanceof Bicycle) // false (Bicycle을 상속하지 않음)