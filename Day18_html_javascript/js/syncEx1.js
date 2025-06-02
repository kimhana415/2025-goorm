// syncEx1.js

//동기식 처리
// console.log("1. 시작!");
// alert("2. 이 알리을 닫아야 다음 코드가 실행돼요!");
// console.log("3. 완료")



// 함수
// - 긴 코드를 하나의 단어로 바꾼다.
// - 한 번 만들어 놓으면 필요할 때마다 재사용이 가능하다.

// 콘솔에 순차적으로 출력! 실해애되는 함수의 이름
// func1 -> func2 -> func3 출력!

// function func1() {
//   console.log("func1");
//   func2();
// };

// function func2() {
//   console.log("func2");

//   for (let i = 1; i <= 5; i++) {
//     console.log("⭐");
//   }

//   func3();
// };

// function func3() {
//   console.log("func3");
// };

// // 함수실행! 시작!
// func1();



// 비동기식 처리
// setTimeout
// 일정 시간이 지나고 실행해라!
// console.log("1. 커피 주문!");

// 콜백함수
//  - 나중에 실행해라!
//  - 어떤 동작을 할 지 작성
/*
setTimeout(function(){ 실행할 코드~~~!!}, 기다릴 시간);
기다리는 시간은 ms 단위로 적용된다.
1초 -> 1000ms
0.5초 -> 500ms
*/
// 3초 있다가 커피를 내줘!
// setTimeout(() => {
//   console.log("☕");
// }, 3000);

// console.log("3. 다른사람 주문받기!!");
