// 선택적 체이닝

const userA ={
    name: 'heo',
    age: 15,
    address:{
        country: 'ko',
        city: 'seo'
    }
}

const userB ={
    name: 'neo',
    age: 11
}

// 꼭 필요한 상황에서 사용
function getCity(user){
    return user.address?.city // null, undefined라면 ?기호를 이용해서 에러 방지
}

console.log(getCity(userA))
console.log(getCity(userB))