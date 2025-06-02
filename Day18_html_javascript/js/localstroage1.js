// localstroage1.js

// 사용자의 브라우저 안에 데이터를 영구적으로 저장할 수 있는 공간
// key-value 구조 데이터를 저장
// 브라우저를 꺼도 유지되며, 동기적 처리를 한다.
// 단점
//  - 저장용량이 작다(5MB), 보안에 민감한 정보는 저장하면 안된다.

// 로컬 스토리
//  - 브라우저 속에 메모장!
// 로컬 스토리지에서 key는 중복되면 안된다.
// setItem(key.value);

// 보는법: 개발자도구 -> Application  -> local stroage
// localStorage.setItem("이름", "홍길동");
// localStorage.setItem("이름", "이서희");

// // 저장된 데이터 꺼내기
// const name1 = localStorage.getItem("이름");
// console.log("스토리지 이름:", name1);


function save() {
  localStorage.setItem("id", "seohee");
}

function load() {
  // 1. 스토리지에서 꺼내기
  const id1 = localStorage.getItem("id");
  // 2. alert창에 넣어서 보이기
  alert(id1);
}


// 1. 패스워드 저장
function pwSave() {
  let pwInput = document.getElementById("pwInput").value;
  localStorage.setItem("pw", pwInput);
  console.log("비밀번호:", pwInput);
}

function pwLoad() {
  // 1. 스토리지에서 꺼내기
  let pw1 = localStorage.getItem("pw");
  // 2. p태그에 패스워드 출력
  let result = document.getElementById("result");
  result.innerText = pw1;
}


// 2. 이메일 저장
function saveEmail() {
  const email = document.getElementById("emailInput");
  console.log(email.value);

  setTimeout(function () {
    localStorage.setItem("email", email.value);
    // console.log("3초 후 실행됨!");
    alert("정상적으로 추가 되었습니다.")
    email.value = '';
  }, 3000);

  // 위에 3초 있다가 실행해라!
  // email에 입력 된 값을 '' 빈공간으로 채워라!
  // 실행되기 전에 초기화가 진행된다.
  // email.value = '';  에러는 안나지만 값이 저장되지 않는다.
}


// 3. 현재 날짜와 시간을 가지고 있는 Date!
// 오늘 날짜와 지금 시간을 자동으로 가져오는 시계를 만든다.
const now = new Date();

console.log(now);

// 연도
console.log("현재 연도: ", now.getFullYear());

// 달(0~11)
// 자바스크립트가 0부터 월을 센다.
// 내부적으로 달도 배열처럼 관리하기 때문에
// dayjs, date-fns, mooomentjs
console.log("현재 월: ", now.getMonth() + 1);

// 일(1~31)
console.log("현재 일: ", now.getDate());

// 시
console.log("현재 시: ", now.getHours());

// 분
console.log("현재 분: ", now.getMinutes());

// 초
console.log("현재 초: ", now.getSeconds());

// toLocaleTimeString()
//  - 기본 값은 브라우저 설정에 따라 자동으로 결정되며,
//    옵션을 설정하면 24시간제 등을 조정할 수 있다.

//  - 시간을 우리 지역 스타일로 읽기 쉽게 보여줘!
//  오전 10:30:45 우리나라
//  10:40:45 AM 미국 브라우저

// 현재 시간을 먼저 저정하기!
// 일정 시간동안 계속 반복해라!
setInterval(() => {
  // 1. 날짜를 가져오는 명령문
  const now = new Date();

  // 2. 현재 날짜를 가지고 와서 p태그에 출력하고 localstroage에도 저장한다.
  const timeStr = now.toLocaleTimeString();

  document.getElementById("clock").textContent = timeStr;
  localStorage.setItem("lastClock", timeStr);

  /*
  수업 시간마다 00분 49분까지는 수업시간! 50분부터 정각까지는 쉬는시간!

  */
}, 1000); // 1초마다 실행
