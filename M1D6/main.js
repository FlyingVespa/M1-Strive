//change h1 color
document.getElementById("shop-name").style.color = "#000066";
document.querySelector("h1").innerHTML = " Panarotti's Restuarant "


let changeBackground = function() {
    document.body.style.backgroundColor = 'green';
};

let changeAddress = function() {
    document.getElementById("address").innerHTML =  "21 New Amsterdam ListeningStateChangedEvent, Old Square, Little ROck, USA"
  }


function toggleBtnClick() {
    let imgToggle = document.getElementById("foodimg");
    if (imgToggle.style.display === "none") {
        imgToggle.style.display = "block";
    } else {
        imgToggle.style.display = "none";
    }
};
