// jqueryEx2.js

console.log($('img').width('200').height('300'));

let img = $('img');

// 애니메이션을 자동으로 만들어준 함수들
// fadeOut(ms)
// 800ms -> 0.8초
// img.fadeOut(800).fadeIn(5000);
// 제이쿼리에서 다른 값들은 문자 타입으로 들어간다
// 단 이벤트를 하는 함수들은 숫자로 줘야된다.

// $('img').slideUp(2000).slideDown(2000);
// $('img').toggle(2000).toggle(3000);
// img.fadeOut(2000).fadeIn(2000);

// on() 함수(기능)
// addEventListener 하나의 요소에 여러가지 이밴트를 설정할 수 있다.

// 시작 버튼에 이벤트 작성하기
// on(여러가지 이벤트를 작성)
// $('button').on('click', function () {
//   alert('와 버튼 눌렸다!');
// });

// // off() 메서드
// //  - 이벤트 연결제거!
// $('button').off('mouseenter', function () {
//   alert('와 버튼 눌렸다!');
// });


// 여러가지 이벤트 중에 동작하는 것도 각각 다르게 동작하고 싶을 경우!
$('button').on({
  click: function () {
    $('#text').append('마우스 클릭됨');
  },
  mouseenter: function () {
    $('#text').append('마우스 버튼 위로 들어옴');
  }

});

