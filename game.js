let board = ['', '', '', '', '', '', '', '', '']
let symbols = ['o', 'x'];
let playerTime = 0;
let gameOver = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function handleMove(position) {
    if (gameOver) {
        return;
    }
    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0;

            if (board.indexOf('') == -1) {
                gameOver = 'tie';
            }
        }
    }
    return gameOver;
}

function isWin() {
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {

            let squares = document.querySelectorAll(".square");
            squares[pos1].classList.add("blink");
            squares[pos2].classList.add("blink");
            squares[pos3].classList.add("blink");

            return true;
        }
    }
    return false;
}