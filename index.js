const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!cell.textContent) {
      cell.textContent = currentPlayer;
      if (checkWin(currentPlayer)) {
        alert(`${currentPlayer} wins!`); //If there is a winner, a pop-up window all appear saying either "X's wins" or "O's wins" and the restart the game 
        resetGame();
      } else if (Array.from(cells).every(cell => cell.textContent)) {
        alert("It's a draw!"); // If there is a draw, a pop-up window will appear saying "It's a draw" and then restart the game
        resetGame();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});
resetButton.addEventListener('click', resetGame); // Gives the user the options to reset the game when the tic=tac-toe board is not completely filled out
// This function checks for the winner by presenting 3 X's or O's vertically, horizontally, or diagonally.
function checkWin(player) {
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winCombos.some(combo => {
    return combo.every(index => cells[index].textContent === player);
  });
}

function resetGame() {
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
}
