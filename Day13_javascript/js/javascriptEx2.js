// javascriptEx2.js

// 1. 요소(태그) 만들기!

// let pTag = document.createElement('p');
// let divTag = document.createElement('div');

// console.log(pTag);
// console.log(divTag);

// // 그 안에 텍스트 집어넣기
// // <p> 내용집어넣기 </p>
// // 2. 내용 넣기
// pTag.innerText = "안녕하세요!"

// console.log('p태그 텍스트:', pTag);

// // 3. html 문서로 보내기
// //   - 어디로 보낼 것인지 알아야된다.
// //   - 어떤 태그에 추가할지 결정을 해야된다.
// // ex) body안에 추가를 하기!

// // document.body 부모 위치
// // .appendChild() 자식으로 추가
// document.body.appendChild(pTag);

/*
1. 추가할 요소 만들기

2. 안에 내용 추가하기

3. html에 추가하기
  - 어디에다가 추가할지 찾는다.
*/

// // 1. p태그 추가
// let pTag = document.createElement('p');

// // 2. innerText이용해서 내용 추가
// pTag.innerText = "안녕하세요! 새로 추가한 p태그 입니다!"

// // 3. 위치 찾기
// let box = document.getElementById('box');
// box.appendChild(pTag);

let colorList = ['빨강', '파랑', '노랑', '분홍']

// 1. li 생성
let li = document.createElement('li');
let li2 = document.createElement('li');

// 2. 내용 넣기
li.innerText = colorList[0];
li2.innerText = colorList[1];

// 3. html 추가하기
// 'appendChild' on 'Node': The new child element contains the parent.
// - 자기 자신을 자식으로 넣는다.
let boxOl = document.getElementById('box__ol');
console.log(boxOl);

boxOl.appendChild(li);
boxOl.appendChild(li2);
