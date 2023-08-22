const buttons = document.querySelector('.btn-group-vertical').children;
const resetButton = document.getElementById('resetButton');
let currentPlayer = 'X';

for (let button of buttons) {
    button.addEventListener('click', () => handleButtonClick(button));
}

function handleButtonClick(button) {
    if (!button.textContent) {
        button.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    // Logic to check for a winning combination
    // You need to implement this part
}

resetButton.addEventListener('click', resetGame);

function resetGame() {
    for (let button of buttons) {
        button.textContent = '';
    }
    currentPlayer = 'X';
}