// 파일명: objectEx3.js

const products = [
  { title: "무선 마우스", price: 25000 },
  { title: "키보드", price: 45000 }
];

console.log(products);

const productList = document.getElementById("product-list");

const div = document.createElement("div");

div.className = "card";
div.innerHTML = `
  <h4>${products[0].title}</h4>
  <p>${products[0].price}</P>
`;

productList.appendChild(div);

const products2 = [
  { title: "무선 마우스", price: 25000 },
  { title: "키보드", price: 45000 }
];

console.log(products);

const productList2 = document.getElementById("product-list");

const div2 = document.createElement("div");

div2.className = "card";
div2.innerHTML = `
  <h4>${products[1].title}</h4>
  <p>${products[1].price}</P>
`;

productList.appendChild(div2);

// 반복문!!
// for문, while문

/*
우리가 사용하는 배열을 이용한 데이터를 저장하는 구조

자료구조
  - 큐(Queue)
  - 먼저 들어간 데이터가 먼저 처리되서 나간다.
  - 대기줄, 대기표, 순서표
  - First In First Out
*/

let fruits = [];
fruits.push("오렌지");
fruits.push("사과");


// 제일 앞에 있는 요소를 제거하고 남아있는 요소들 앞으로 밀어준다.
console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits.shift());


// 실생활 예
// 사용되는 큐 자료구조

let 막국수집대기표 = [];

// 막국수집에 첫번째 대기 사람
막국수집대기표.push("이서희");
막국수집대기표.push("이지희");
막국수집대기표.push("이정희");
막국수집대기표.push("강동원");

// 이서희님 들어오세요~~

막국수집대기표.shift();
console.log(막국수집대기표);



// 뒤로가기 기능을 구현할 때는 자료 구조
// stack
//  - 먼저 들어간 데이터가 가장 나중에 나온다.
//  - Last In First Out

// 배열을 이용해서 사용할 수 있다.

let stack = [];

stack.push("구글");
stack.push("네이버");
stack.push("쿠팡");


// 가장 나중에 들어간 데이터를 가장 마지막 데이터를 꺼내는 기능
stack.pop();
console.log(stack);
