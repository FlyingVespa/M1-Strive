// 21  Given variable x = "John" and y = "Doe", write on the console log "John <> Doe" --> DONE
console.log("//------------------- Ex 21 -------------------//");
const x = "John";
const y = "Doe";

console.log(x + "<>" + y);

//22  Create an object with properties such name, surname, email  --> DONE
console.log("//------------------- Ex 22 -------------------//");
let user = {
  name: "Mike",
  surname: "Lee",
  email: "mikelee.@gmail.com",
};

//23 Delete Email from the previously created object  --> DONE
console.log("//------------------- Ex 23 -------------------//");

delete user.email;
console.log(user);

//24  Create an array with 10 strings in it  --> DONE
console.log("//------------------- Ex 24 -------------------//");

let myArrays = new Array(10);
for (i = 0; i < myArrays.length; i++) {
  myArrays[i] = "this is a string" + i;
}

//25 Print in the console every string in the previous array  --> DONE
console.log("//------------------- Ex 25 -------------------//");

console.log(myArrays);

//26 Create an array with 100 random numbers in it  --> DONE
console.log("//------------------- Ex 26 -------------------//");
let randomArray = new Array(100);
for (i = 0; i < randomArray.length; i++) {
  randomArray[i] = Math.round(Math.random() * 101);
}
const savedRandomNumbers = randomArray;

console.log(randomArray);

//27  Wrote a function to get the MAX and the MIN from the previously created array  --> DONE
console.log("//------------------- Ex 27 -------------------//");
let minArray = Math.min(...savedRandomNumbers);
let maxArray = Math.max(...savedRandomNumbers);

console.log(minArray);
console.log(maxArray);

//28 Create an array of arrays, in which every array has 10 random numbers --> DONE

console.log("//------------------- Ex 28 -------------------//");

let rootArray = [];

for (let j = 0; j < 10; j++) {
  let innerArray = [];
  for (let index = 0; index < 10; index++) {
    innerArray.push(Math.round(Math.random() * 10));
  }
  rootArray.push(innerArray);
}
console.log(rootArray);

//29 Create a function that gets 2 arrays and returns the longest one  --> DONE

console.log("//------------------- Ex  29 -------------------//");
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

//30 Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values  --> DONE

console.log("//------------------- Ex 30 -------------------//");

function returnLargestSum(a, b) {
  let sum1 = 0;

  for (let number of a) {
    sum1 += number;
  }

  let sum2 = 0;

  for (let number of b) {
    sum2 += number;
  }
  return sum1 >= sum2
    ? sum1 + " array1 is the largest"
    : sum2 + " array2 is the largest";
}
console.log(returnLargestSum(array1, array2));

//31 Get element with ID "container" from the page  --> DONE

console.log("//------------------- Ex 31 -------------------//");
/*
const container = document.getElementById("container");
console.log(container);
*/
//32 Get every "td" from the page  --> DONE

console.log("//------------------- Ex 32-------------------//");
/*
const foo = document.querySelectorAll("td");

//33 Create a cycle that prints the text inside every td of the page  --> DONE

console.log("//------------------- Ex 33 -------------------//");
foo.innerText = "Text text text";
function printTdText() {
  for (let boo = 0; boo < foo.length; boo++) {
    console.log(foo);
  }
}
*/
//34 Write a function to change the heading of the page  --> DONE

console.log("//------------------- Ex 34 -------------------//");

function changeHeading() {
  let oldHeading = document.getElementById("heading");
  {
    oldHeading.innerHTML = "The Heading was changed.";
  }
}

//35 Write a function to add an extra row to the table
/*
function newRow() {
  const grabTr = document.querySelectorAll("tr");
  const grabTbody = document.querySelectorAll("tbody");
  for (let i = 0; i < grabTr.length; i++) {
    const td = document.createElement("td");
    td.innerText = i + 1;
    grabTr.appendChild(td);
  }
  grabTbody.appendChild(grabTr);
}
newRow();
*/
console.log("//------------------- Ex 35-------------------//");
// click on table to initiate

function newRow() {
  var table = document.querySelector("table");
  var row = table.insertCell(0);
  var column = document.querySelectorAll("tr");

  for (let h = 0; h < column.length; h++) {
    var cell1 = row.insertRow(h);
  }
  cell1.innerHTML = "NEW CELL1";
}

//36 Write a function to add the class "test" to each row in the table
/*
console.log("//------------------- Ex  36-------------------//");
function addTestClass() {
  let element = document.querySelectorAll("tr");
  for (let i = 0; i < element.length; i++) {
    element[i].classList.add("test");
  }
}
addTestClass();
*/
//37  Write a function to add a red background to every link in the page
console.log("//------------------- Ex 37 -------------------//");
/*
let changeBackGroundRed = function() {
  let links = document.getElementsByTagName("a").innerHTML;
  for (let i = 0; i < links.length; i++) {
    if (links[i].style.color === "red") {
        links[i].style.color = "white";
    } else {
        links[i].style.color = "red";
    }
}
*/
//38  Console log "Page loaded" when the page is correctly loaded
console.log("//------------------- Ex 38 -------------------//");
/*
window.onload = (e) => {
  console.log("Page Loaded Successfully");
};
*/
//39 Write a function to add new items to a UL
console.log("//------------------- Ex 39 -------------------//");
/*
function addToList() {
  let ul = document.getElementById("list");
  let li = document.createElement("li");

  li.appendChild(document.createTextNode("New listed Item Created"));
  ul.appendChild(li);
}
*/
/*
//40 Write a function to empty a list
console.log("//------------------- Ex 40 -------------------//");
function removeList() {
  for (let i = 0; i < liItem.length; i++) {}
  return liItem.pop();
}

//41 Add an eventListener to alert when the mouse is over a link, displaying the URL
console.log("//------------------- Ex 41 -------------------//");
function hoverEvent() {
  alert("You hovered on a link");
}

//42 Add a button to hide every image on the page
console.log("//------------------- Ex 42 -------------------//");
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

//43 Add a button to hide and show the table from the page
console.log("//------------------- Ex 43 -------------------//");
function hideTable() {
  let theTable = document.querySelector("table");

  for (let i = 0; i < theTable.length; i++) {
    if (theTable[i].style.display === "none") {
      theTable[i].style.display = "block";
    } else {
      theTable[i].style.display = "none";
    }
  }
}
*/
/*
//44 console.log("//------------------- Ex 44-------------------//");
//put all cells in array
// itirate through array to pull all numbers type of /0-9/g 
// put the numbers in new array
// add upp through a function
// log the result

//45
console.log("//------------------- Ex 45 -------------------//");
//create an array spliting each letter
// function with do a for loop
// in for loop do delete
// call function with button click

//46
console.log("//------------------- Ex 46-------------------//");
// create an eventlistner on click  do toggle function for background of td element
// add a classlist on selected item this will give collor, with a toggle mode

//47
console.log("//------------------- Ex 47 -------------------//");
// create a random math function between min and max td
// create an array of td
// if result of math function  === to the array index 
//    delete that td element.
// this should trigger on button "delete" when clicked

//48
console.log("//------------------- Ex 48 -------------------//");
// create an eventlistenr for hover
// create add style border red with 1px or do toggle fucntion by adding removing class on hover?
// toggle pink border

//49
console.log("//------------------- Ex 49 -------------------//");
//50
console.log("//------------------- Ex 50 -------------------//");
// copy logic from question 43, but use querySelectorAll with for loop
// that iitaarates through alll
// then init a delete function last elemnt until = 0 on button 
*/
