/* EXERCISE 1  ---------------------------- WORKS
  Write a function for changing the title of the document in something else.
  */

const changeTitle = function (newTitle) {
    document.body.querySelector("h1").innerHTML = "This is a new title"
    //
};


/* EXERCISE 2  ---------------------------- WORKS
Write a function for changing the class of the title of the page in "myHeading".
*/
const addClassToTitle = function () {
    let element = document.querySelectorAll("h1");
    for (let i = 0; i < element.length; i++)
        if (element[i].classList.contains("myHeading")) {
            element[i].classList.remove("myHeading");
        }
    else {
        element[i].classList.add("myHeading")
    } //
};

/* EXERCISE 3 ---------------------------- WORKS
Write a function for changing the text of only the p which are children of a div.
*/

const changePcontent = function () {
    document.querySelector("div p").innerHTML = "Content for only the p has changed";
    //
};

/* EXERCISE 4  ---------------------------- WORKS
Write a function for changing the destination of every link to https://www.google.com
*/

const changeUrls = function () {
    //
    document.querySelector("a").setAttribute("href", "http://www.google.com");
    console.log("link has been changed");
};

/* EXERCISE 5 ---------------------------- WORKS
 Write a function for adding a new item in the second list.
 */
const addToTheSecond = function (content) {
    let secondUl = document.getElementsByTagName("ul")[1]
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode("Forth new add"));
    secondUl.appendChild(newItem);
    //
};

/* EXERCISE 6  ---------------------------- WORKS
Write a function for adding a second paragraph to the div.
*/

const addParagraph = function (content) {
    let newP = document.createElement("p")
    newP.innerHTML = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    `
    document.getElementsByTagName("div")[0].appendChild(newP);

};

/* EXERCISE 7 ---------------------------- WORKS
Write a function for making the first UL disappear.
*/

const firstUlDisappear = function () {
    let ulDissapear = document.getElementsByTagName("ul")[0]
    ulDissapear.innerHTML = "";
    //
};

/* EXERCISE 8 ---------------------------- WORKS
Write a function for making the background of every UL green.
*/
const paintItGreen = function () {
    let greenUL = document.getElementsByTagName("ul")
    for (let i = 0; i < greenUL.length; i++) {
        greenUL[i].style.backgroundColor = ("green")
    }

};

/* EXERCISE 9   ---------------------------- WORKS
Make the heading of the page change color every time the user clicks on it.
*/

const makeItClickable = function () {
    let colors = ['red', 'blue', 'green', 'yellow', 'orange'];
    let headers = document.querySelector("header").children;
    for (i = 0; i < headers.length; i++) {
        // Pick a random color from the array 'colors'.
        let header = headers[i].style;
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        header.color = colors[randomColorIndex];
    }
};

/* EXERCISE 10  ---------------------------- WORKS
Change the footer text with something else when the user clicks on it.
*/
let footText = document.querySelector("footer p")
footText.style.cursor = "pointer";
const changeFooterText = function () {
    footText.innerHTML = "The Footer Text has Changed";
    //
};

/* EXERCISE 11  ---------------------------- WORKS
Attach an event listener to the input field in the page for console logging its value just after any keystroke.
*/

const inputField = document.getElementById("input-field");
// ...

inputField.addEventListener('input-field', (e) => {
    result.textContent = "typed text:" + e.data
});

/* EXERCISE 12  ---------------------------- WORKS
Create a new welcome alert message when the page successfully loads.
*/

window.onload = function () {
    alert("Page has reload and is ready!")
    //
};

/* EXERCISE 13  ---------------------------- WORKS
Use HTML5 tags to divide the content of the page in a more semantic way.
*/