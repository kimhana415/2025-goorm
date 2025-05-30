// 파일명: objectEx2.js
// console.log("연결됨!")

/*
let 기억하는 공간
let 변수명 -> 값 변경 가능

const 변수명 -> 값 변경 불가
*/

// 1. 객체 생성
const seoheeInfo = {
  userName: "이서희",
  userAge: 20,
  userAddress: "제주도"
}
// 2. 위치 찾기 + 추가
document.getElementById('info').innerHTML =
  `<p>이름: ${seoheeInfo.userName}
  나이: ${seoheeInfo.userAge}</p>`;



// 1. 객체 생성
const stu1 = {
  name: "지민",
  age: 15
}

// 2. 위치 찾기
const ul = document.getElementById('user-list')
console.log(ul);

// 3. li태그 추가하기!
let li = document.createElement('li');
// li.innerText = "이름:" + stu1.name + "나이:" + stu1.age;  둘 중 아무거나 사용 가능하지만 백틱을 더 선호함
li.innerText = `이름: ${stu1.name} 나이: ${stu1.age}`;

ul.appendChild(li);

// 디스코드
//  마크다운 ``` ~~~ ``` 코드 올릴 때 백틱 사용하면 편하
