// 파일명: test.js
let modal = document.getElementsByClassName('modal');
let modalWrap = document.getElementsByClassName('modal-wrap');

console.log(modal[0].innerText);
console.log(modal[1].innerText);

function hideFirstBtn() {
  modal[0].style.display = 'none';
  console.log("1")
}

function hideSecondBtn() {
  modal[1].style.display = 'none';
  console.log("2")
}

function AllHideCloseBtns() {
  modal[0].style.display = 'none';
  modal[1].style.display = 'none';
  modalWrap[0].style.display = 'none';
  console.log("all")
}
