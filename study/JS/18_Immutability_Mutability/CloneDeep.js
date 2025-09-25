import cloneDeep from 'lodash/cloneDeep'

// 참조형은 가변성이 있기 때문에, 복사 시 '주소 공유'로 인해 원본이 변할 수 있음
// - 얕은 복사: 1차 참조값만 복사 (중첩 객체나 배열은 여전히 공유됨)
// - 깊은 복사: 내부 모든 값까지 재귀적으로 새로 복사 (주소 분리)

// 원시값 복사는 항상 값 자체를 복사 (불변성)
// let a = 1
// let b = a
//
// b = 2
//
// console.log(b) // 2
// console.log(a) // 1
//
// b = 3
//
// console.log(b) // 3
// console.log(a) // 1 —> a는 여전히 그대로

console.log('-----------------------------')

// Object.assign을 이용한 얕은 복사 (객체 복사 예시)
// const a = {x: 1}
// const b = Object.assign({}, a) // 얕은 복사
//
// b.x = 2
//
// console.log(b) // {x: 2}
// console.log(a) // {x: 1} —> 얕은 복사이지만 1차 필드는 독립적

console.log('-----------------------------')

// 전개 연산자(...)를 이용한 얕은 복사 (객체 복사 예시)
// const a = {x: 1}
// const b = {...a} // 얕은 복사
//
// b.x = 2
//
// console.log(b) // {x: 2}
// console.log(a) // {x: 1} —> 동일하게 1차 필드는 분리됨

console.log('-----------------------------')

// cloneDeep을 이용한 깊은 복사 (중첩 객체를 완전히 복사)
// const a = {x: {y: 1}}
// const b = cloneDeep(a) // 깊은 복사
//
// b.x.y = 2
//
// console.log(b) // {x: {y: 2}}
// console.log(a) // {x: {y: 1}} —> 완전히 독립적

console.log('-----------------------------')

// 배열도 얕은 복사 가능 - concat 사용
// const a = [1, 2, 3]
// const b = a.concat([]) // 얕은 복사
//
// b[0] = 4
//
// console.log(b) // [4, 2, 3]
// console.log(a) // [1, 2, 3] —> 1차 값은 분리됨

console.log('-----------------------------')

// 배열도 얕은 복사 가능 - 전개 연산자 사용
// const a = [1, 2, 3]
// const b = [...a] // 얕은 복사
//
// b[0] = 4
//
// console.log(b) // [4, 2, 3]
// console.log(a) // [1, 2, 3] —> 동일

console.log('-----------------------------')

// 중첩 배열의 깊은 복사 예시
const a = [[1, 2], [3]]
const b = cloneDeep(a) // 깊은 복사로 완전 분리됨

b[0][0] = 4

console.log(b) // [[4, 2], [3]]
console.log(a) // [[1, 2], [3]] —> 원본 배열에 영향 없음
