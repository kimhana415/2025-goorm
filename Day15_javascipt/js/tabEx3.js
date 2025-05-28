// tabEx3.js

// 반복문
// forEach() 문장
//  - 배열이나 리스트에서 하나씩 처리할 때 쓰이는 반복의 도구
//  - 배열이나 유사 배열(NodeList) 각 요소를 하나씩 꺼내서 어떤
//    작업을 수행하게 해주는 기능

let fruits = ['🍎', '🍓', '🍇', '🥝'];

// 긴 반복문을 간단하게 줄여주는 화살표 함수(Arrow Function)
//  - 코드를 더 짧게 쓰고, 간결한 콜백 처리를 가능하게 한다.
// (값) => {처리}
fruits.forEach((value) => {
  console.log(value);
});


const tabsBtn = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content")

tabsBtn.forEach((btn, index) => {
  console.log(btn);
  console.log(index);

  btn.addEventListener('click', function () {
    tabContent.forEach((content) => { content.classList.remove('show'); })

    tabsBtn.forEach((tab) => { tab.classList.remove('on'); })

    tabContent[index].classList.add('show');
    tabsBtn[index].classList.add('on');
  });

})
