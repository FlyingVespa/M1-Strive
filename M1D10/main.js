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
    console.log("They are equel in length");
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
const addNewItem = function () {
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
function hoverEvent() {
  alert("You hovered on a link");
}

//42
function hideImg() {
  let imgToggle = document.querySelectorAll("img");
  for (let i = 0; i < imgToggle.length; i++) {
    if (imgToggle[i].style.visibility === "hidden") {
      imgToggle[i].style.visibility = "visible";
    } else {
      imgToggle[i].style.visibility = "hidden";
    }
  }
}

//43
function hideTable() {
  let theTable = document.getElementById("table");
  for (let i = 0; i < imgToggle.length; i++) {
    if (theTable[i].style.display === "none") {
      theTable[i].style.display = "block";
    } else {
      theTable[i].style.display = "none";
    }
  }
}

//44
//put all cells in array
// itirate through array to pull all numbers (type of) /0-9/g ...
// put the numbers in new array
// add upp through a function
// log the result

//45
//create an array spliting each letter
// function with do a for loop
// in for loop do delete
// call function with button click

//46
// create an eventlistner on click { do toggle function for background of td element}
// add a classlist on selected item (this will give collor), with a toggle mode

//47
// create a random math function between min and max td
// create an array of td
// if result of math function  === to the array index {
//    delete that td element.}
// this should trigger on button "delete" when clicked

//48
// create an eventlistenr for hover
// create add style border red with 1px or do toggle fucntion by adding removing class on hover?
// toggle pink border

//49

//50
// copy logic from question 43, but use querySelectorAll with for loop
// that iitaarates through alll
// then init a delete function (last elemnt until == 0) on button click.
