// flexEx1.js

/*
  1. 하트를 클릭했을 때 onclick을 사용할 수있는지 확인하기!,
  2. 하트를 클릭했을 때 하트의 색상을 빨간색으로 변경하기! 꽈악 채우기!,
  3. 하트를 클릭했을 때 색상이 변하면 밑에 있는 p태그의 숫자 값을 1증가 시킨다!

  이거는 11시부터 11시 20분까지! 실습 후 같이 코드 확인하기
*/

// 값을 기억하는 공간 -> 변수
// var 공간 이름 = 값!
// 자바스크립트는 변수 선언(메모리공간 생성) 타입시스템
//  - 자바스크립트는 자동으로 값의 타입을 저장한다.

var heartValue = 5;
var stringValue = "hello"

// 아래처럼 작성하면 어떤 결과값을 확인하는지 모르기떄문에 앞에 메세지를 작성한다.
console.log(heartValue);
console.log("하트개수: ", heartValue);

// 문자열?
//  -문자 여러개!라는 뜻!
console.log("문자열의 길이: ", stringValue.length);


function heartClick(element){
  // html에서 this 클릭된 요소를 자바스크립트의 heartClick이라는 변수인 element 변수에 저장한다.

  /*
  toggle()
    - 해당 요소에 클래스이름이 있으면 제거를 하고 클래스 이름이 없으면 추가해라!
      전등 스위치(on/off)

  자바스크립트의 동작을 줄 때는 꼭!
  1. 동작 전 디자인
  2. 동작 후 디자인
  3. 위에 동작의 시작은 어떤 것으로 할 지 고민
    마우스 클릭, 마우스 드래그, 키를 눌렀을 때, 마우스 포인트가 밖으로 나갔을 때...
  */

  element.classList.toggle("heart-red");
  
  // 하트 채우기
  element.classList.toggle("bi-heart-fill")
  element.classList.toggle("bi-heart")

  // 만약에 하트가 채워져있으면 heartValue 하트의 개수를 저장하는 변수의 값이 1 증가하고 
  // 만약에 빈하트라면 변수의 값을 1 감소시킨다.

  // 선택(if문)
  if(element.classList.contains("bi-heart-fill")){
    // 변수의 저장하는 = (대입연산자)
    // 연산자(기호)
    // 실행하는 순서가 오른쪽에서 왼쪾으로 저장되는 순서!
    heartValue = heartValue + 1;
  } 
  if(element.classList.contains("bi-heart")){
    // 변수의 저장하는 = (대입연산자)
    // 연산자(기호)
    // 실행하는 순서가 오른쪽에서 왼쪾으로 저장되는 순서!
    heartValue = heartValue - 1;
  } 

  // 변경된 값을 html로 보내서 내용을 수정해야된다.
  document.getElementById("like-count").innerText = heartValue;
  console.log("하트 개수: ", heartValue);
}


// 다크모드를 실행하는 문장
// classList
//  -html 요소의 class 속성(클래스이름들)을 자바스크립트에서 조작하기 쉽게 도와준는 속성이다.
/*
classList.add("클래스명");      클래스 추가만!
classList.remove("클래스명");   클래스 삭제만!
classList.contains("클래스명"); 클래스명이 있는지 확인하는 기능!
*/
function darkMode(){
  // 1. document 문서를 읽는다.
  // 2. 찾는다. 유일한 값 id를 이용해서 div를 찾는다.
  // 3. 배경을 변경하는 css를 설정한다.
  // 4. classList를 이용해서 붙인다.
  document.getElementById("wrap").classList.toggle("dark-mode");
}


// 북마크 클릭했을때
var bookmarkValue = 3;

function bookmarkClick(element){
  element.classList.toggle("bookmark-blue");
  element.classList.toggle("bi-bookmark-fill");
  element.classList.toggle("bi-bookmark");

  if(element.classList.contains("bi-bookmark")){
    bookmarkValue = bookmarkValue - 1;
  } else{
    bookmarkValue = bookmarkValue + 1;
  }
  document.getElementById("book-count").innerText = bookmarkValue;
  console.log("북마크 개수:", bookmarkValue);
}

// 댓글 클릭했을때
var chatValue = 4;

function chatClick(element){
  element.classList.toggle("chat-green");
  element.classList.toggle("bi-chat-fill");
  element.classList.toggle("bi-chat");

  if(element.classList.contains("bi-chat")){
    chatValue = chatValue - 1;
  }else{
    chatValue = chatValue + 1;
  }
  document.getElementById("chat-count").innerText = chatValue;
  console.log("댓글 개수: ", chatValue)
}