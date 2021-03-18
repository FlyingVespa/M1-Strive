// assign variables to the classes (grab from DOM)
const submitForm = document.querySelector(".add");
const addButton = document.querySelector(".add-task");
const taskList = document.querySelector(".bingoboard");
const list = document.querySelectorAll(".tasks li");

//
let listLength = list.lenght;

const generateNewTask = function (task) {
  const document = `
                    <li>
                  <input type="checkbox" id="task">
                  <label for="task">
                    <span class="check"></span>
                    ${task}
                  </label>
                  <i class="fas fa-minus-square delete fa-lg" style="color: rgb(149, 7, 7) "></i>
                </li>
               `;
  taskList.innerHTML += document;
};

const addTasks = function (e) {
  e.preventDefault();
  const task = submitForm.add.value;
  if (task.length > 0) {
    generateNewTask(task);
    submitForm.reset();
  }
};

// Listens to click and submit events that instantiates the function addTasks
submitForm.addEventListener("submit", addTasks);
addButton.addEventListener("click", addTasks);

//gen a randomNumber
let randomNumber = function (min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
  
    return Math.floor(Math.random() * (max - min) + min)
  
  };
  let bingGeneratedNumber = randomNum(1, 76);



  
  //compare random number with existing number
  for(i=0 ; i < genCells.length; i++ )

  let matchingNum = function (e)




if (bingGeneratedNumber === numberincell){
    e.target.getElementById("cell"){
       style.backgroundcolor("yellow")

    })
}


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