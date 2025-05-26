// alertbox.js

/*
5초 있다가 알림창을 끄기

setTimeout(
  동작을 작성하면 된다.
, 몇초 후 실행될지 시간 ms);

getElementsByClassName(클래스명)
똑같은 클래스이름을 가지고 있는 요소들을
모두 찾아라!

HTMLCollection

HTML 요소들이 순서대로 들어있는 상자
숫자 순서대로 꺼내 쓸 수 있다,
순서가 0부터 시작한다.

배열

여러개의 값을 저장하는 공간!
*/

let alertbox = document.getElementsByClassName('alert-box');
// 클래스이름이 똑같은 전체 내용을 확인
console.log(alertbox);

// 클래스이름 중에 0번째 요소만 확인
// 변수명[순서번호]

console.log(alertbox[0]);
console.log(alertbox[1]);

// div 안에 텍스트 내용을 가지고 오고 싶을 경우에는 어트리뷰터(설정)에서 innerText값을 꺼내기

console.log(alertbox[0].innerText);
console.log(alertbox[1].innerText);
console.log(alertbox[2].innerText);
// 동작이 여러줄을 써야되니깐 여러줄을
// 한 단어로 바꾸는 함수를 작성
function alertBox() {
  alertbox[0].style.display = 'none';
  // 요소가 화면에서 완전히 사라짐
  // 공간도 없어짐
}

// 실제 초 단위로 작성
// setTimeout()기능은 초단위가 아니라 밀리초
// 단위로 들어간다.
// 1초 -- 1000ms
// 5초 -- 5000ms
// 띡 한번 실행
setTimeout(alertBox, 5000);


// 닫기 버튼을 눌렀을 때
// visivility: hidden
// 보이느냐 안보이느냐를 설정

function btnVisi() {
  // alertbox[1].hidden = true;
  alertbox[1].style.visibility = 'hidden';
}

// 특정 코드를 일정 시간마다 반복 실행
// setInterval(동작함수, 밀리초)
