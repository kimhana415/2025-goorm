// jqueryEx.js
// 제이쿼리 자체도 자바스크립트를 기반으로 줄여진 도구 이기 때문에
// 파일명쓰고 확장자는 .js입니다.
// 시작할때 특이점
// 제이쿼리를 시작할께
// 제이쿼리는 시작할때 무조건 $앞에 붙여야된다.
// 자바스크립트 문법과 구별하기 위해서 제이쿼리가 $를 붙였다.
// 제이쿼리는 $(css셀렉터사용)

// 자바스크립트 문법
let findH1 = document.getElementsByTagName('h1');

// 제이쿼리 문법
// $('h1')
console.log($('h1'));

// id를 가진 p태그를 찾기
// 자바스크립트 문법
document.getElementById("frist");

// 제이쿼리
let findId = $('#frist')
console.log("아이디값:", findId);

// class
// 자바스크립트 경우
document.getElementsByClassName('box');

// 제이쿼리
let findClass = $('.box');
console.log("클래스값:", findClass);


// input 태그 안에 값을 꺼내기
let value = $('#box__input').val();
console.log("입력값 가져오기:", value);

$('#box__input').val('leeseohee');
console.log("입력값 가져오기:", value);
