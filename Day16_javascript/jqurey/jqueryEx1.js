// jqueryEx1.js

// 제이쿼리 시작하는 것은 $() 제이쿼리에 젒근할 수 있게 해주는 식별자
// $(css 선택자).동작함수1() 설정해라!

// jquery 객체
//  - 선택한 요소가 여러개일 경우 자동으로 리스트를 만들어서 저장한다.
//  - 여러개의 요소를 하나하나 조작할 필요가 없다!
//  - 제이쿼리 자체가 일일이 하나씩 자동으로 반복하면서 동작을 적용한다.
$('body').css('background', 'pink');


// 버튼들을 모두 찾아서 배경색을 변경한다.
// jquery 체이닝
//  - 여러개의 기능을 연결해서 한줄로 순서대로 실행하는 기법이다.
// $('.btn').css('background', 'yellow')
//   .css('font-size', '35px');

// 위에처럼 css() 계속 쓰기 붎편할 때가 있다.
// 그래서 아래처럼 업그레이드 된 내용으로 css()안에서 키워드를 이용해서
// 값을 지정하는 객체(Object) 형태를 사용할 수 있다.
$('.btn').css({
  'background': 'green',
  'color': 'white',
  'border': '1px solid white'
});

/*
제이쿼리에서 사용하는 함수들 정리
요소를 가져올 수도 있고 요소를 수정할 수도 있다.

요소 getter(값을 읽고) & setter(값을 설정)

html()
text()
width()
height()
attr()
val()
*/

// p태그 가져오기
// let p = $('p').html();//콘텐츠 내용을 읽기
// console.log(p);

// 문자를 시작할때 외따옴표를 사용했다
// 외따옴표로 문자를 시작했다면 중간에 강조가 들어가는 문자열은 쌍따옴ㅁ표로 작성하기
// $('p').html('<div class="wrap">제이쿼리입니다.</div>')

// 선택 된 요소 중에 첫번째 요소의 텍스트만 가져옴
// 자동으로 반복하면서 결과창에 찍은건지 애매모호해요

// textContent랑 text랑 같다!
// innerText, textContent, innerHtml의 차이점 확인하기
let p2 = $('p').text('안이뻐');
console.log(p2);



$('img').width(200).height(200);

// 이미지의 alt를 변경하고 싶다! 어트리뷰트를 변경하고 싶다.
// src, alt, ...

$('img').attr('alt', '기분이 더 나빠진 라이언');



// 셀렉트 태그에서 option 선택하기
// 그 안에 있는 과일을 하나 가져오기!
let select = $('select option');
console.log(select.first().text());  // 무조건 첫번째 요소(텍스트 내용)를 가져옴

// 안에 요소를 순서대로 가져올때는 eq(), get()
// eq(순서) 제이쿼리 객체로 반환한다. 이어쓰기(체이닝) 가능함
// get(순서) 자바스크립트로 가져온다. getElementById() 같다.

console.log(select.eq(1).text());
console.log(select.eq(2).text());
console.log(select.eq(3).text());
console.log(select.eq(4).text());

// 현재 선택된 selected가 붙은 요소의 text를 가지고 오고 싶다.!
console.log('현재 selected:', $('select option:selected').text());


// 필터링 메서드!
//  - 특정 조건에 맞는 것만 골라내는 기능!

console.log($('li').first().text()); //첫번째
console.log($('li').last().text());  //마지막

console.log($('li').filter(':odd').text()); //홀수만!
console.log($('li').not(':odd').text());    //홀수가 아닌것!

// has(), is(), slice() 이게 무엇인지 찾아보기!
// 오후에 강의 교안가서 확인하기(실습)


/* 추가적인 내용! */
// 자바스크립트로 코드 작성 시
// const buttons = document.querySelectorAll('.btn');
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].style.backgroundColor = 'yellow';
//   buttons[i].style.fontSize = '25px';
// }
