// localstroage2.js


// 로컬 스토리지
// 오직 문자열(String) 타입만 저장 가능하다.
// Casting(형변환)
//  - 자동으로 숫자를 문자로 변경하는 것!(묵시적 형변환)
//  - 배열도 자동으로 문자로 변경하는 것!
function intEx() {
  localStorage.setItem("integer", 1);
}

function intLoad() {
  const intLoad = localStorage.getItem("integer");
  console.log("정수:", intLoad);
  console.log("타입:", typeof intLoad);
}

function arrayEx() {
  localStorage.setItem("arrayEx", JSON.stringify(['🥝', '🍇', '🍓']));
}

function arrayLoad() {
  const arrayLoad = localStorage.getItem("arrayEx");
  console.log("배열:", arrayLoad);
  console.log("타입:", typeof arrayLoad);

  // JSON(JavaScript Object Notation)
  //  - 자바스크립트 객체 형식을 문자열로 변경하는 것!
  //  - python, java, C# 통신이 가능하다.
  //  - API 요청/응답, DB 저장 등에 사용한다.
  //  - key:value 이용해서 데이터를 저장하는 구조!
  //  - 문자열 형태로 구조화하여 저장한거나 전송한다.

  // 자바스크립트처럼 생긴 문자열이다!
  /*
  {
  'name': '이서희',
  'age' : '23',
  'isStudent' : 'true'
  }
  */

  // 문자열로 저장된 JSON데이터를 다시 자바스크립트 객체로 변환하는 함수

  const getFruits = JSON.parse(arrayLoad);

  // 로컬 스토리지는 모두 문자열로 저장되기 때문에 Object 값을 받아와서 Array(문자열)
  console.log("변경된 타입:", typeof Array(getFruits));
  console.log("배열형태로:", getFruits[0]);
}

// 기본적으로 회원가입시
// 아이디, 비밀번호, 주소, 이메일
// 한번 만들고 끝나면 또 다른 데이터를 저장할 때 마다
// 내가 계속 만들어서 써야도니다.
// 그러면 1000명의 대한 데이터를 저장할 때 오브젝트 객체를 1000개를 만든다.
const user = {
  name: "서희",
  email: "seo@gm.c"
}
const user2 = {
  name: "지희",
  email: "ji@gm.c"
}

// 클래스로 틀을 만들어서 여려명한테 똑같은 공간을 제공한다.
class UserIfo {

}

