//window.onload = initAll;

const createCells = new Array(76);
const genCells = [];
console.log(createCells);
// assign variables to the classes (grab from DOM)
//const addNewCard = document.querySelector(".plus");
//const deleteLastCard = document.querySelector(".delete");
const newBingoCard = document.querySelector(".bingocards");
let lotto = "";

let gen = function () {
for (let i = 0; i < createCells.length; ++i) {
  genCells[i] = Math.ceil(Math.random() * 100);
  if (i === 0) {
    lotto = lotto + genCells[i];
  } else {
    lotto += "-" + genCells[i];
  }
};
console.log(gen());

const generateNewCard = function (e) {
  const document = `
    <div class="bingocard">
    <table>
      <tr>
        <th width="20%">B</th>
        <th width="20%">I</th>
        <th width="20%">N</th>
        <th width="20%">G</th>
        <th width="20%">O</th>
      </tr>
      <tr>
        <td id="square0">&nbsp;</td>
        <td id="square1">&nbsp;</td>
        <td id="square2">&nbsp;</td>
        <td id="square3">&nbsp;</td>
        <td id="square4">&nbsp;</td>
      </tr>
      <tr>
        <td id="square5">&nbsp;</td>
        <td id="square6">&nbsp;</td>
        <td id="square7">&nbsp;</td>
        <td id="square8">&nbsp;</td>
        <td id="square9">&nbsp;</td>
      </tr>
      <tr>
        <td id="square10">&nbsp;</td>
        <td id="square11">&nbsp;</td>
        <td id="free">Free</td>
        <td id="square12">&nbsp;</td>
        <td id="square13">&nbsp;</td>
      </tr>
      <tr>
        <td id="square14">&nbsp;</td>
        <td id="square15">&nbsp;</td>
        <td id="square16">&nbsp;</td>
        <td id="square17">&nbsp;</td>
        <td id="square18">&nbsp;</td>
      </tr>
      <tr>
        <td id="square19">&nbsp;</td>
        <td id="square20">&nbsp;</td>
        <td id="square21">&nbsp;</td>
        <td id="square22">&nbsp;</td>
        <td id="square23">&nbsp;</td>
      </tr>
    </table>
  </div>
                 `;
  newBingoCard.innerHTML += document;
};

// function to add new card, append to div.bingocards

// function to compare computer card vs player card

// DeleteCard
const deleteCard = function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.classList.remove("bingocard");
  }
};

const addTasks = function (e) {
    e.preventDefault();
    const task = submitForm.add.value;
    if (task.length > 0) {
      generateNewTask(task);
      submitForm.reset();
    }
  };

  var el = document.getElementById('bingocards');
  var body = document.getElementsByTagName('body');
  el.innerHTML = '<p><a id="clickme" href="#">Click me</a></p>';
  document.getElementById('clickme').onclick = function (e) {
      e.preventDefault();
      document.body.innerHTML += generateNewCard()