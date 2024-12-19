const squares = document.querySelectorAll('.square');
const playerDisplay = document.getElementById('Player');
let currentPlayer = 1; 
let gameBoard = Array(9).fill(null); 


squares.forEach(square => {
    square.addEventListener('click', () => {
        const index = square.getAttribute('data-index');

        // Only proceed if the square is empty
        if (gameBoard[index] === null) {
            gameBoard[index] = currentPlayer === 1 ? 'X' : 'O'; 
            square.textContent = currentPlayer === 1 ? 'X' : 'O'; 

            // Check for win or draw
            if (checkWinner()) {
                // setTimeout(() => alert(`Player ${currentPlayer} wins!`), 100);
                alert(`Player ${currentPlayer} wins!`) ; 
            } else if (gameBoard.every(cell => cell !== null)) {
                // setTimeout(() => alert('It\'s a draw!'), 100);
                alert('It\'s a draw!') ; 
            }

            // Switch player
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            playerDisplay.textContent = currentPlayer; 
        }
    });
});

// Function to check for a winner
function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true; 
        }
    }
    return false; // No winner
}


const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    gameBoard = Array(9).fill(null); // Reset the board
    squares.forEach(square => square.textContent = '_'); 
    currentPlayer = 1; 
    playerDisplay.textContent = currentPlayer; 
});
