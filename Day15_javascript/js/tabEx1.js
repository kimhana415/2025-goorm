// tabEx1.js
// querySelector
//  - css선택자 문법을 이용해서 HTML 문서에서 가장 처음으로
//    일치하는 요소 하나만 가져온다.

// querySelectorAll
//  - css 선택자처럼 HTML 요소를 한 번에 여러개 선택할 수 있는 기능
//  - 선택된 요소들은 배열처럼 생긴 NodeList라는 형태로 반환된다.

// Hhtml 안에 여러 개의 박스, 버튼, 탭, 리스트 등이 있을 때
// 이름이 같은 애들은 전부 다 ~가져와 그걸 css 문법으로 사용한다.

// NodeList
//  - 자바스크립트에서 여러개의 DOM요소를 배열처럼 묶어놓은 객체
//  - 여러 HTML요소들을 담아놓는 바구니!

// tab-button 클래스명의 선택자들을 모두 찾아라
const tabsBtn = document.querySelectorAll(".tab-button");
console.log(tabsBtn);
console.log(tabsBtn[0].textContent);
console.log(tabsBtn[1].textContent);
console.log(tabsBtn[2].textContent);

// tab-content 전부 찾기
const tabContent = document.querySelectorAll(".tab-content")
console.log(tabContent);


// 0번 버튼을 클릭하면 현재 탭 컨텐츠에 붙어있는 show를 모두 제거
// addEventListener(어떤 이벤트, 어떤 동작을 실행해)
tabsBtn[0].addEventListener('click', function () {
  tabContent[0].classList.remove('show');
  tabContent[1].classList.remove('show');
  tabContent[2].classList.remove('show');

  tabsBtn[0].classList.remove('on');
  tabsBtn[1].classList.remove('on');
  tabsBtn[2].classList.remove('on');

  // 마지막에 0번 버튼이 클릭되었으니 show를 0번 버튼에 추가하면 된다.
  tabContent[0].classList.add('show');
  tabsBtn[0].classList.add('on');
});

// 1번 버튼을 클릭하면
// 현재 탭 컨텐츠에 붙어 있는 show를 모두 제거한다.
tabsBtn[1].addEventListener('click', function () {
  tabContent[0].classList.remove('show');
  tabContent[1].classList.remove('show');
  tabContent[2].classList.remove('show');

  tabsBtn[0].classList.remove('on');
  tabsBtn[1].classList.remove('on');
  tabsBtn[2].classList.remove('on');

  // 마지막에 0번 버튼이 클릭되었으니 show를 0번 버튼에 추가하면 된다.
  tabContent[1].classList.add('show');
  tabsBtn[1].classList.add('on');
});

// 1번 버튼을 클릭하면
// 현재 탭 컨텐츠에 붙어 있는 show를 모두 제거한다.
tabsBtn[2].addEventListener('click', function () {
  tabContent[0].classList.remove('show');
  tabContent[1].classList.remove('show');
  tabContent[2].classList.remove('show');

  tabsBtn[0].classList.remove('on');
  tabsBtn[1].classList.remove('on');
  tabsBtn[2].classList.remove('on');

  // 마지막에 0번 버튼이 클릭되었으니 show를 0번 버튼에 추가하면 된다.
  tabContent[2].classList.add('show');
  tabsBtn[2].classList.add('on');
});
