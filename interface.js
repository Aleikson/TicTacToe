const containerModal = document.querySelector('[data-modal="container"]');
const btnClose = document.querySelector('[data-modal="close"]');
const btnRestart = document.querySelector('[data-modal="restart"]');
const statusTxt = document.querySelector('#status');
const turnTxt = document.querySelector('#turn');

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    turnTxt.textContent = `Your Turn ${playerTime == 0 ? symbols[1] : symbols[0]}`;
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (board[position] !== '') {
        return;
    }

    if (handleMove(position)) {
        setTimeout(() => {
            containerModal.classList.add('active');
            if (gameOver === "tie") {
                statusTxt.innerHTML = "<h4> Tie  </h4>";
            } else {
                statusTxt.innerHTML = "<h4> The Winner <span class='status'>" + (playerTime == 0 ? symbols[1] : symbols[0]) + "</span></h4>";
            }
        }, 10);
    };

    updateSquare(position);
    turnTxt.textContent = `Your Turn ${playerTime == 0 ? symbols[1] : symbols[0]}`;
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

btnRestart.addEventListener("click", function () {
    restartGame();
});

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    turnTxt.textContent = `Your Turn ${playerTime == 0 ? symbols[1] : symbols[0]}`;

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.innerHTML = '';
        square.classList.remove("blink")
    });

    containerModal.classList.remove("active");
}