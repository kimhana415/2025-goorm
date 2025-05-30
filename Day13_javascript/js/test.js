// 파일명: test.js
// onclick
//  - html에 직접 이벤트를 지정하는 방식
//  - 버튼 딱 1개의 반응만 연결

// 버튼에 여러가지 반응 자유롭게 추가하고 싶을 때
// 버튼에 클릭만하는게 아니라 키보드로 눌렀을 때 실행해라~
// tab키를 눌렀을 때 다음이로 이동하기

// addEventListener
//  - 하나의 요소에 여러가지 반응을 연결할 수 있다.

/*
반응 -> click,mouseover,key,blur,focus

요소.addEventListener("반응", 실행할 함수(){});
*/

let btn = document.getElementById('addBtn');

// 함수이름이 생각나지 않으면 그냥 이름없이 작성할 수 있다.

// 클릭시
btn.addEventListener('click', function () {
  alert("클릭됨!")
});

// 마우스가 버튼 위로 올라갔을 때 실행
btn.addEventListener('mouseover', function () {
  btn.style.backgroundColor = "pink";
});

// addEventListener
//  - 이벤트 중복을 깔끔하게 처리하고 싶을 때
//  - 여러가지 이벤트를 하나의 요소(복합동작) 구현할 때
