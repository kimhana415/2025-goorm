// syncEx2.js

// 몇 초있다가 실행해라!
// 비동기 함수인 setTimeout()
// 아예 공간 차체를 없앨 것!
// 공간은 그대로 냅두고 안보이게만 할 것인지!
// setTimeout(() => {
//   const alertBox = document.getElementsByClassName("alert");
//   console.log(alertBox[0]);
//   alertBox[0].style.display = "none";
// }, 5000);

// // setTimeout(function () {}, 5000);

// // 호이스팅 문제 때문에 항상 실행문이 나오기 전에 위에 작성한다.
// function hello() {
//   console.log("2초 있다가 안녕!")
// };

// setTimeout(hello, 2000);



// 1초마다 콘솔에 이모지 출력
/*
setInterval(function(){실행할 코드~~}, 기다릴 시간);
반복적으로 실행됨

밑에 코드는 지정한 시간마다 코드를 반복적으로 실행한다.
반복을 멈추는 함수!
clearInterval()
*/

// 1초마다 안녕 출력하고 50초가 지나면 멈춤!
// const timer = setInterval(function () {
//   console.log("안녕!");
// }, 1000);
// console.log("timer:", timer);

// const timer2 = setInterval(function () {
//   console.log("월요병!");
// }, 2000);
// console.log("timer2:", timer2);

// setInterval()
//  - 타이머 아이디를 생성한다.
//  - 콜백함수를 반복적으로 실행하도록 예약한다.
//    타이머 식별자(ID) 생성한다.

// clearInterval(타이머 아이디를 받는다.);

// setTimeout(function () {
//   clearInterval(timer);
//   clearInterval(timer2);
//   console.log("50초 지났다~ 멈춰라!");
// }, 50000);


// 위에 비동기 처리 구조(이벤트 루프)
// - 비동기 작업들을 처리하기 위한 핵심 매커니즘!
// - 자바스크립트 엔진은 Call Stack 이라는 호출 스택을 이용해서
//    동기 코드를 순서대로 실행한다.
// - 단! 타이머(setTimeout), Ajax, Fetch, Dom이벤트(onclick 등) 같은 비동기 함수들은
//   호출 스택에서 바로 실행되지 않는다!
// - we API라는 브라우저 제공되는 백그라운드 환경으로 전달된다.

// 카페 주문 시스템
// - call stack (메뉴 받는 직원)
// - web API (백룸 바리스타)
//   커피를 만들고 5분뒤 준비해주세요! 다 만들고 나면 준비완료 Event Queue(대기줄)
// - Event Loop(호출하는 직원)
//   호출시 음료를 가져간다.

// 순서를 정리
//  1. 동기코드 (메인 스크립트) Call Stck에 차례로 쌓여서 실행
//  2. setTimeout, fetch, onClick 같은 비동기 호출 시 -> Web API로 전달한다.
//  3. web api 작업 완료 시 -> Event Queue에 콟개 보관
//  4. 이벤트 루프가 계속 call stack 확인 -> 스택이 비어있으면 ->
//     event queeu의 첫번째 코랙을 꺼내 call stack 이동
//  5. 이동된 콜백 함수 실행 -> 또 다른 비동기 호출이 있으면 2번 돌아가고
//                            없다면 스택이 비기를 기다림

// web api
// XMLHttpREquest(Ajax)
// - 서버와 비동기적으로 데이터를 교환할 수 있는 객체
// Timer API
// - 일정한 시간 간격으로 함수를 실행하거나 지연시키는 메서드들을 제공한다.
// canvas api, Promise, reqeust, Animation, Frame ....



function func1() {
  console.log("func1");
  func2();
};

function func2() {
  console.log("func2");
  func3();
};

function func3() {
  console.log("func3");
};

// 함수실행! 시작!
func1();
