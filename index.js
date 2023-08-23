$(function() {
  let currentPlayer = "X";
  const cells = Array.from($(".cell"));

  cells.forEach(cell => {
    $(cell).on("click", function() {
      if (!$(cell).text()) {
        $(cell).text(currentPlayer);
        if (checkWin(currentPlayer)) {
          alert(`${currentPlayer} wins!`);
          resetGame();
        } else if (cells.every(cell => $(cell).text())) {
          alert("It's a draw!");
          resetGame();
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });
  });

  function checkWin(player) {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    return winningCombos.some(combo => {
      return combo.every(index => $(cells[index]).text() === player);
    });
  }

  function resetGame() {
    cells.forEach(cell => $(cell).text(""));
    currentPlayer = "X";
  }
});
