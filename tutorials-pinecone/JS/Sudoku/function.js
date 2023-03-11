let board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
let root = document.getElementById("root");
let selectedElement;

function generateFields(board) {
  let sudokuField = document.createElement("div");
  sudokuField.setAttribute("id", "sudokuField");

  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[i].length; j++) {
      let newDiv = document.createElement("div");
      newDiv.setAttribute("class", "field");
      newDiv.setAttribute("id", i + "-" + j);
      newDiv.addEventListener("click", () => {
        console.log(newDiv.id);
        selectedElement = [parseInt(newDiv.id[0]), parseInt(newDiv.id[2])];
      });
      if (board[i][j] !== 0) {
        newDiv.innerText = board[i][j];
      }
      sudokuField.appendChild(newDiv);
    }
  }
  root.appendChild(sudokuField);
}

function generateButtons() {
  let buttons = document.createElement("div");
  buttons.setAttribute("id", "buttons");

  for (i = 0; i < 9; i++) {
    let newDiv = document.createElement("button");
    newDiv.setAttribute("class", "button");
    newDiv.innerText = i + 1;
    buttons.appendChild(newDiv);
  }
  root.appendChild(buttons);
}

function initialGame() {
  //random numbe generate fill board[0][0] -> board[2][2]
  //davhtsahgui 1-9 hoornd random too generate hiine
}

function validation(board) {
  // end shalgana true false butsaana
  // jishee n shalgah 3n nohtsol baigaa
  // center 5 iin too oruulhad
  // (center squere- d 5n too banyy?) || (i==4) uyd 5n too bainyy || (j==4) uyd 5n too bainyy
}

generateFields(board);
generateButtons();

document.getElementById("test").addEventListener("click", () => {
  board[selectedElement[0]][selectedElement[1]] = "8";
  generateFields(board);
});
