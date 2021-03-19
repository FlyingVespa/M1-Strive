// EX 7 ---> change h1 color
document.getElementById("shop-name").style.color = "#000066";
document.querySelector("h1").innerHTML = " Panarotti's Restuarant ";

// EX 8 ---> Toggle Background colour
function changeBackground() {
  document.body.classList.toggle("dark-mode");
}

// Ex ---> 9 Toggle between real and fake address.
function changeAddress() {
  let adr = document.getElementById("address");
  if (adr.innerHTML === "Real Address: 44 Old Brick Road") {
    adr.innerHTML = "Fake Address: 22 Jons street";
  } else {
    adr.innerHTML = "Real Address: 44 Old Brick Road";
  }
}

// EX 10 ---> Add Class To href link Toggle
function addClass() {
  let element = document.querySelectorAll("a");
  for (let i = 0; i < element.length; i++)
    if (element[i].classList.contains("mylink")) {
      element[i].classList.remove("mylink");
    } else {
      element[i].classList.add("mylink");
    }
}

// EX ---> 11 Toggle Hide Images - array
// can also do as Ex 8 but need to additional class names
function toggleBtnClick() {
  let imgToggle = document.querySelectorAll("img");
  for (let i = 0; i < imgToggle.length; i++) {
    if (imgToggle[i].style.visibility === "hidden") {
      imgToggle[i].style.visibility = "visible";
    } else {
      imgToggle[i].style.visibility = "hidden";
    }
  }
}

//  EX 12 ---> Toggle Price colour array each price should be different colour
function changePriceColour() {
  let colors = [
    "red",
    "blue",
    "green",
    "teal",
    "goldenyellow",
    "orange",
    "magenta",
    "silver",
  ];
  let prices = document.querySelectorAll(".price");
  for (i = 0; i < prices.length; i++) {
    // Pick a random color from the array 'colors'.
    let price = prices[i].style;
    let randomColorIndex = Math.floor(Math.random() * colors.length);

    price.color = colors[randomColorIndex];
    price.width = "100px";
    price.height = "100px";
    price.display = "inline-block";
  }
}
