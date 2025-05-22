// 파일명: javascriptEx1.js

// 길고 더러운 코드를 한 단어로 짧게 바꾸고 싶을 때 사용하는 문법
// function 

// 클릭했을 때 실행하는 내용들이 2줄 이상 될 때
// 1. 요소값가져오기
// 2. 기존에 누적된 값이 있으면 더해서 값을 기억한다.(저장)
//    변수
// 3. 변경된 값을 html로 보내기1

var total = 0;  // 체크박스에서 눌린 값을 저장하는 변수

function clickSum(tag){
  console.log(tag);

  //tag가 온 안에 value속성은 실제 클릭한 값이다!
  console.log("value :",tag.value);

  // html에서 오는 값들은 모두 문자로 온다.
  // 문자를 -- >숫자로 변경하는 기능
  // parseInt(문자)
  total = total + parseInt(tag.value);

  // 태그에서 꺼낸 value를 html로 보내기
  document.getElementById('total')
          .innerHTML = total;

}