// 21
let x = "John";
let y = "Doe";

console.log(x + "<>" + y);

//22

let user = {
  name: "Mike",
  surname: "Lee",
  email: "mikelee.@gmail.com",
};

//23
delete user.email;
console.log(user);

//24

let myArray = new Array(10);
for (i = 0; i < myArray.length; i++) {
  myArray[i] = "this is a string" + i;
}

//26
console.log(myArray);

let randomArray = new Array(100);
for (i = 0; i < randomArray.length; i++) {
  randomArray[i] = i + 1;
}
console.log(randomArray);

// 27
let minArray = Math.min(...randomArray);
let maxArray = Math.max(...randomArray);

console.log(minArray);
console.log(maxArray);

//28
/*
function mathRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max))

}
let myNumber = mathRandomNumber(10)

for (b = 0 ; b < myNumber; b++ ){
    new Array= []
}
*/

//29
let array1 = [1, 2, 3, 5, 6, 7, 8, 9, 2];
let array2 = [1, 2, 3];

function arrayCompareLenght() {
  if (array1.length < array2.length) {
    console.log("array1 is shorter than array2");
  } else if (array1.length > array2.length) {
    console.log("array1 is longer than array2");
  } else if (array1.length == array2.length) {
    console.log("They are equel in lenght");
  }
}
console.log(arrayCompareLenght());

//30

//31
/*
let myContainer = document.getElementById("container");



//32
/*
let foo = document.querySelectorAll("td");

//33
function printTdText() {
  for (let boo = 0; boo < foo.length; boo++) {
    console.log(foo);
  }
}
*/

//34 //click on heading in page to initiate
let changeHeading = function (nw) {
  let oldHeading = document.getElementById("heading");
  {
    oldHeading.innerHTML = "The Heading was changed.";
  }
};
//35
// click on table to initiate
function newRow() {
  let getRow = document.querySelector("tr");
  let createTd = document.createElement("td");

  getRow.appendChild(createTd);
}

//36
function addTestClass() {
  let element = document.querySelectorAll("tr");
  for (let i = 0; i < element.length; i++) {
    element[i].classList.add("test");
  }
}
addTestClass();

//37 bg can be added in css...

function addRegBg() {
  let link = document.querySelectorAll[s]("a");
}

//38
window.onload = function () {
  console.log("page loaded");
};

//39
let ulName = document.querySelector("ul");
let liItem = document.createElement("LI");
const addNewItem = function (content) {
  liItem.innerHTML = "And something here";
  ulName.appendChild(liItem);
  //
};

//40
function removeList() {
  for (let i = 0; i < liItem.length; i++) {}
  liItem.pop();
}

//41
let link = document.getElementsByTagName("a");
link.hover = function () {
  alert("You hovered on a link");
};
