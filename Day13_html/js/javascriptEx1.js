// javascriptEx1.js
'use strict'  // 엄격모드

let fruitsBox = [];

// 버튼을 클릭했을 때 실행하라~
function btn() {
  // 1. 버튼을 클릭하면 input 태그에 있는 입력한 내용을
  //    결과창에 출력하기
  // 내가 값을 가져와야되는 태그를 찾는다.
  // input 태그에 입력한 값을 가져올 때는 value라는 단어를 쓴다.
  let inputTag = document.getElementsByTagName('input');
  let inputValue = inputTag[0].value;
  console.log(inputValue);

  // 만약 빈 문자가 아니라면 배열에 추가해라라고 코드를 작성했다.
  if (inputValue !== "") {

    // 2. 버튼을 클릭하면 input 태그에 있는 입력한 내용을
    //    fruitsBox에 추가하기
    fruitsBox.push(inputValue);

    console.log(fruitsBox);
    // 3. ol 리스트에 li태그안에 데이터 집어넣기!
  }
}

/*
자바스크립트 배열
  - 여러가지의 데이터를 순서대로 저장한다.

요소를 (태그를 찾을 때) className이라는 걸로 찾았다.
오늘은 요소를 찾을 때 tagName 한 번 찾아볼 것!

// 항상 실행하는 문장 위에 변수 만들기
// let 공간의 타입을 알아서 자동으로 저장해준다.

// getElementsByTagName
// 태그명을 기준으로 데이터를 가지고 온다.
// 여러개를 담는 배열로 가져온다.

let pBox = document.getElementsByTagName('p');

// 배열의 사이즈 (개수를 확인하는 단어)
console.error("pBox의 개수는 :", pBox.length);

// 위에 있는 pBox에 태그 안에서 그 안에 있는 값을 꺼내서

let fruitsBox = [];

fruitsBox.push(pBox[0].innerText);
fruitsBox.push(pBox[1].innerText);
fruitsBox.push(pBox[2].innerText);
// console.log(fruitsBox);

// if 만약에 선택해라!
/*
if(비교하는문장){
  비교하는 문장이 맞다면 실행해라~!!
}
사과라는 단어가 있으면 결과창에 보이지 말아라~!

!== 다르면 참이나오고 같다면 거짓이 나오면 비교연산자!

if (pBox[0].innerText !== "사과") {
  // 결과창에 보이지마!
  console.log(pBox[0].innerText);
}
if (pBox[1].innerText !== "사과") {
  // 결과창에 보이지마!
  console.log(pBox[1].innerText);
}
if (pBox[2].innerText !== "사과") {
  // 결과창에 보이지마!
  console.log(pBox[2].innerText);
}

// 배열에 데이터를 추가
// 저장할 공간을 먼저 만든다.
// 변수명.push(값)
// let fruitsBox = [];
// console.log("과일리스트:", fruitsBox);

// fruitsBox.push("딸기");
// console.log("과일리스트:", fruitsBox);

// fruitsBox.push("바나나");
// console.log("과일리스트:", fruitsBox);

// console.log(pBox);
*/
