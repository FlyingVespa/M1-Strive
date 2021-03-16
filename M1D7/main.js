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

/* EXERCISE 3
Write a function for changing the text of only the p which are children of a div.
*/

const changePcontent = function () {

    //
};

/* EXERCISE 4
Write a function for changing the destination of every link to https://www.google.com
*/

const changeUrls = function () {
    //
    document.getElementsByTagName("a").setAttribute("href", "http://www.google.com");
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
    document.getElementsByTagName("div")[0].innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elitTotam accusamus itaque cumque dolore dolor repudiandae commodi"


};

/* EXERCISE 7 ---------------------------- WORKS
Write a function for making the first UL disappear.
*/

const firstUlDisappear = function () {
    let ulDissapear = document.getElementsByTagName("ul")[0]
    ulDissapear.innerHTML = "";
    //
};

/* EXERCISE 8
Write a function for making the background of every UL green.
*/
const paintItGreen = function () {
    let greenUL = document.getElementsByTagName("ul")
    for (let i = 0; i < greenUL.length; i++) {
        greenUL[i].style.backgroundColor = ("green")
    }

};

/* EXERCISE 9
Make the heading of the page change color every time the user clicks on it.
*/

const makeItClickable = function () {
    let newHeaderColor = document.getElementsByTagName("h1")
    let colors = ['red', 'blue', 'green', 'teal'];

    for (i = 0; i < newHeaderColor.length; i++) {
        // Pick a random color from the array 'colors'.
        let newHeaderColor = newHeaderColor.style;
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        newHeaderColor.color = colors[randomColorIndex];
    }
    //
};

/* EXERCISE 10
Change the footer text with something else when the user clicks on it.
*/

const changeFooterText = function () {
    //
};

/* EXERCISE 11
Attach an event listener to the input field in the page for console logging its value just after any keystroke.
*/

const inputField = document.getElementById("input-field");
// ...

/* EXERCISE 12
Create a new welcome alert message when the page successfully loads.
*/

window.onload = function () {
    //
};

/* EXERCISE 13
Use HTML5 tags to divide the content of the page in a more semantic way.
*/