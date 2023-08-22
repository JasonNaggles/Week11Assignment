// Initiate the game state

let currentPlayer = "X";
let cells = ["", "", "", "", "", "", "", "", ""];

//Get the cells and reset button elements 
let cellElements = document.querySelectorAll('td');
let resetButton = document.getElementById('reset-button');

//Add click event listeners to cells and reset button
cellElements.forEach(function(cellElement, index) {
    cellElement.addEventListener("click", function() {
        if (cells[index] === "") {
            cells[index] = currentPlayer;
        if (checkWin()) {
            alert(currentPlayer + " wins!");
            resetGame();
        } else if (checkTie()) {
            alert("Tie game!");
        } else {
            currentPlayer = (currentPlayer === "X") ? "O" : "X";
        }
    }
});
});

resetButton.addEventListener("Click", resetGame);

//Check if a player has won
function checkWin() {
    if ((cells[0] === currentPlayer && cells[1] === currentPlayer && cells[2] === currentPlayer) ||
        (cells[3] === currentPlayer && cells[4] === currentPlayer && cells[5] === currentPlayer) ||
        (cells[6] === currentPlayer && cells[7] === currentPlayer && cells[8] === currentPlayer) ||
        (cells[0] === currentPlayer && cells[3] === currentPlayer && cells[6] === currentPlayer) ||
        (cells[1] === currentPlayer && cells[4] === currentPlayer && cells[7] === currentPlayer) ||
        (cells[2] === currentPlayer && cells[5] === currentPlayer && cells[8] === currentPlayer) ||
        (cells[0] === currentPlayer && cells[4] === currentPlayer && cells[8] === currentPlayer) ||
        (cells[2] === currentPlayer && cells[4] === currentPlayer && cells[6] === currentPlayer)) {
        return true;
        }
        return false;
        }

//Check if the game is a tie
function checkTie() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i] === "") {
            return false;
        }
    }
    return true;
}

//Reset game
function resetGame() {
    currentPlayer = "X";
    cells = ["", "", "", "", "", "", "", "", ""];
    cellElements.forEach(function(cellElement) {
        cellElement.textContent = "";
    });
}
