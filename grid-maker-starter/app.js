document.addEventListener("DOMContentLoaded", function () {
  // Add code here
  var board = document.getElementById("board");
  // let row = parseInt(prompt("How many rows would you like?"));
  // let column = prompt("How many columns would you like?");
  let row;
  let column;

  // input form
  const body = document.getElementsByTagName("body")
  const form = document.createElement("form");
  form.setAttribute("action", "");
  //input for row
  const label1 = document.createElement("label");
  label1.innerText = "How many rows?"
  form.appendChild(label1);
  const inputRows = document.createElement("input");
  inputRows.setAttribute("type", "text");
  inputRows.setAttribute("id", "rowId");
  form.appendChild(inputRows);
  //input for col
  const label2 = document.createElement("label");
  label2.innerText = "How many columns?"
  form.appendChild(label2);
  const inputCols = document.createElement("input");
  inputCols.setAttribute("type", "text");
  inputCols.setAttribute("id", "colId");
  form.appendChild(inputCols);
  // button
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.onclick = submitInfo;
  button.innerText = "Submit";
  // binding
  form.appendChild(button);
  body[0].appendChild(form);
  //function for submit button
  function submitInfo(e) {
    row = document.getElementById("rowId").value;
    column = document.getElementById("colId").value;
    createGrid();
  }
  // rng for color in rgb
  function randomColor() {
    return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
  }
  // clears children of board
  function clearChildren() {
    while(board.firstChild) {
      board.removeChild(board.firstChild);
    }
  }
  // creates grid
  function createGrid() {
    clearChildren();
    for (let j = 0; j < row; j++) {
      const row1 = document.createElement("div");
      row1.setAttribute("class", "row");
      for (let i = 0; i < column; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "col");
        row1.appendChild(square);
      }
      board.appendChild(row1);
    }
    let squares = document.getElementsByClassName("col");
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", function (e) {
        e.target.style.background = randomColor();
      })
    }
  }
});
