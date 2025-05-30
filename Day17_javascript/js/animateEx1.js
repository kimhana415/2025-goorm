// animateEx1.js
// 위에 있는 html 파일들과 css를 모두 읽고나서 제이쿼리가 실행할 수 있도록 시작하는 함수 사용하기
console.log('연결됨');
$(document).ready(function () {
  console.log('정식(기본)');
});
// 위에는 정식(기본)
//아래는 축약형
$(function () {
  console.log('축약형');
});

// 에러 발생을 최소화한 문법!
// 애니메이션을 사용하기 위해서는 제이쿼리에서 제공하는 함수
// $(selector).animate({parmas}, speed, callback);
// animate?
//  - 천천히 바뀌는 함수

/*
parmas  : 변경할 속성값 left:20px 등
spped   : ms(숫자), slow, fast 등
callback: 애니메이션이 완료 후 실행할 함수

버튼을 클릭했을 때 동작하는 걸 연결하는게 바로 자바스크립트가 하는일
문제가 코드가 너무 길어요 그래서 제이쿼리를 이용한다.

기본적으로 div, p, input 태그들이 움직이려면 시작하는 위치를 알아야된다
position설정하는 이유는 기본적으로 static(기본적)
*/

$("#btnMove").click(function () {
  console.log('버튼 클릭');
  // 움직이기 버튼을 클릭하면 실행하라!
  // 실제 움직이는 동작을 하는 요소
  // $("#box1").animate({ left: '200px;' }, 1000);
  $("#box1").animate({ left: '200px' }, 1000);
  console.log("애니메이션 실행됨");
});

$("#btnGrow").click(function () {
  $("#box2").animate({
    width: '200px',
    height: '200px'
  }, 1000);
});

$("#btnFade").click(function () {
  // 투명도를 0.2만큼 희미하게 보이게 하겠다.
  $("#box3").animate({
    opacity: 0.2
  }, 1000);
});

// 무한 반복ㅇ르 하기 위해서 함수를 설정
// $(document).ready(function () {
//   $("#loopText").animate({})
// })

// 시작은 보이고 점점점 희미해지다가
// 종료는 몇초가 지나면 다시 보이기

/*
animate({ opacity: 1 }, 500, loop)
내가 작성한 함수명을 써준다.

첫번쨰 애니메이트가 실행이 되고, 두번째 애니ㅣ메이트가 실행되고
그 후에 어떤 함수를 실행할 지 함수명을 작성한다.

무한 반복을 돌리고 싶을 경우에는 내가 원하는 함수명을 작성하면 연결해서도 실핼항 수 있다.
*/

// function moveBox() {
//   $("#box1").animate({ left: '200px' }, 500, loop);
// }

function loop() {
  $("#loopText").animate({ opacity: 0.2 }, 500) // 0.5초 안에 투명해지기
    .animate({ opacity: 1 }, 500, loop);
  // $("#loopText").animate({ opacity: 0.2 }, 500) // 0.5초 안에 투명해지기
  //   .animate({ opacity: 1 }, 500, moveBox);
}

// 위에 글씨가 깜빡이는 코드를 loop이라는 단어로 묶었다.
// 그래서 실행을 하려며 loop() 실행해라
loop();


// 진행 바를 움직이게 이동시키겠다!
$("#fillBtn").click(function () {
  $("#bar").animate({ width: '80%' }, 2000);
});


// 퍼센트가 가운대로 정렬되야되고
// 퍼센트를 위에 바가 2초안에 끝나기때문에 2초안에 숫자가 같이 80%까지 변경되야된다.
// setInte~~

// 프로그래스바
// 퍼센트가 가운대로 정렬되야되고 퍼센트를 위에 바가 2초안에 끝나기때문에 2초안에 숫자가 같이 80%까지 변경되야된다.
// setInte~~
$(".btn-fill").click(function () {
  $(".bar").animate({
    width: '80%'
  }, 2000);

  let percent = 0;
  let timer = setInterval(function () {
    percent++;
    console.log(percent);

    if (percent >= 80) {
      clearInterval(timer); //안쓰면 무한 반복
    }

    $(".bar").text(percent + "%");
  }, 25);
});
