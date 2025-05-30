// tabEx2.js

// 반복문
//  - 비교하는(조건이 맞으면 계속해) 비교하는 조건이 다르면 그만해! 멈춰
//  - 같은 일을 반복해서 시키는 것!

//  - 개발을 하다보면 같은 작업을 여러번 하는 경우가 있다
//    그래서 반복문을 사용한다.

/*
while

for(시작하는 값; 비교문; 증가하거나 감소하는식){
  반복하는 내용!
}

let fruits = ['🍎', '🍓', '🍇', '🥝'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

위에 내용을 반복문을 이용해서 변경
배열의 공간의 번호는 0부터 시작하기 때문에
start 변수명을 이용해서 0부터 카운트하기

for (let start = 0; start <= 3; start = start + 1) {
  console.log(fruits[start]);
}



// 차라리 자동으로 반복의 횟수도 정해주고 배열의 개수만큼만 자동으로 동작했으면 좋겠다!

// for...in 반복문
// 어제 공부했던 자바스크립트의 object객체에서 key만 반복한다.
// 물건의 이름표만 쭉 읽는 반복문!
for (let number in fruits) {
  console.log(number); // 인덱스 번호만 가져온다
  console.log(fruits[number]);
}


let bag = {
  책: "수학책",
  연필: 28,
  공책: "노트"
}

// key 만 뽑아 오는 in 방식은 책, 연필, 공책 뽑는다.
for (let pro in bag) {
  console.log('key:', pro);
  console.log('value:', bag[pro]);
}




// value만 꺼내서 반복하는 반복문이 있다.
// 하나씩 꺼내서 값(value)을 반복할 수 있게 만들어주는
// 반복문 for ...of

let foods = {
  아침: "🥪",
  점심: "🍖",
  저녁: "🥩🍚"
};

// 에러발생
//  - TypeError: foods is not iterable?
//  - 배열, 문자열, set/map 타입만 of 반복문을 사용가능하다.
// for (let value of foods) {
//   console.log(value);
// }


console.log(Object.values(foods));

// 객체를 배열로 변경하는 방법
// 객체의 모든 속성값을 깨내서 배열로 만들어준다.
for (let value of Object.values(foods)) {
  console.log(value);
}
*/


// 1. 버튼 찾기
const tabsBtn = document.querySelectorAll(".tab-button");

// 2. 탭 컨텐츠 찾기
const tabContent = document.querySelectorAll(".tab-content")

// 3. 특정 이벤트 달기
// 0번 버튼에 이벤트 달고, 1번 버튼에 이벤트 달고, 2번 버튼에 이벤트 달고,
for (let start = 0; start <= 2; start = start++) {

  tabsBtn[start].addEventListener('click', function () {

    //마지막에서 0번 버튼이 클릭되었으니 show를 0번 버튼에 추가만하면
    // 된다.
    console.log("현재 눌린 버튼:", tabsBtn[start].textContent, start);

    tabContent[0].classList.remove('show');
    tabContent[1].classList.remove('show');
    tabContent[2].classList.remove('show');

    tabsBtn[0].classList.remove('on');
    tabsBtn[1].classList.remove('on');
    tabsBtn[2].classList.remove('on');

    //마지막에서 버튼이 클릭되었으니 show를 버튼에 추가만하면
    // 된다.
    tabContent[start].classList.add('show');
    tabsBtn[start].classList.add('on');



  });
}
