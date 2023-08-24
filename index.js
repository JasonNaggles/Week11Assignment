const cells = $('#td');
const resetButton = $('#resetButton');
const displayMessage = $('#displayMessage');
let currentPlayer = 'X';
let gameActive = true;

// Add click event listeners to grid cells
cells.on('click', function() {
    if (!$(this).text() && gameActive) {
        $(this).text(currentPlayer);
        checkWinner();
        checkDraw();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});

// Check for a winner
function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells.eq(a).text() && cells.eq(a).text() === cells.eq(b).text() && cells.eq(a).text() === cells.eq(c).text()) {
            gameActive = false;
            highlightWinner(cells.eq(a), cells.eq(b), cells.eq(c));
            displayMessage.text(`Player ${currentPlayer} wins!`);
            break;
        }
    }
}

// Check for a draw
function checkDraw() {
    if (cells.toArray().every(cell => $(cell).text() !== '') && gameActive) {
        gameActive = false;
        displayMessage.text("It's a draw!");
    }
}

// Highlight the winning combination
function highlightWinner(cell1, cell2, cell3) {
    cell1.addClass('winner');
    cell2.addClass('winner');
    cell3.addClass('winner');
}

// Reset the game
resetButton.on('click', resetGame);

function resetGame() {
    cells.text('');
    cells.removeClass('winner');
    currentPlayer = 'X';
    gameActive = true;
    displayMessage.text('');
}
