// EX 7 ---> change h1 color
document.getElementById("shop-name").style.color = "#000066";
document.querySelector("h1").innerHTML = " Panarotti's Restuarant "

// EX 8 ---> Toggle Background colour
function changeBackground() {
    let element = document.body;
    element.classList.toggle("dark-mode");
};

// Ex ---> 9 Toggle between real and fake address.
function changeAddress() {
    let adr = document.getElementById("address");
    if (adr.innerHTML === "Real Address: 44 Old Brick Road") {
        adr.innerHTML = "Fake Address: 22 Jons street";
    } else {
        adr.innerHTML = "Real Address: 44 Old Brick Road";
    }
};

// EX 10 ---> Add Class To href link Toggle
function addClass() {
    let element = document.querySelectorAll("a");
    for (let i = 0; i < element.length; i++)
        if (element[i].classList.contains("mylink")) {
            element[i].classList.remove("mylink");
        }
    else {
        element[i].classList.add("mylink")
    }
};

// EX ---> 11 Toggle Hide Images - array

function toggleBtnClick() {
    let imgToggle = document.querySelectorAll("img");
    for (let i = 0; i < imgToggle.length; i++) {
        if (imgToggle[i].style.display === "none") {
            imgToggle[i].style.display = "block";
        } else {
            imgToggle[i].style.display = "none";
        }
    }
};

//  EX 12 ---> Toggle Price colour array each price should be different colour
let colors = ['red', 'blue', 'green', 'teal', 'goldenyellow', 'orange', 'magenta', 'silver'];
let prices = document.querySelectorAll(".price");

function changePriceColour() {
    for (i = 0; i < prices.length; i++) {
        // Pick a random color from the array 'colors'.
        prices[i].style.color = colors[Math.floor(Math.random() * colors.length)];
        prices[i].style.width = '100px';
        prices[i].style.height = '100px';
        prices[i].style.display = 'inline-block';
    }
};