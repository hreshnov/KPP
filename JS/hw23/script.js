const gridSize = 8;
const totalMines = 10;
let flagsCount = 0;
let gameBoard = [];
let gameOver = false;

const gameBoardElement = document.getElementById('game-board');
const flagCountElement = document.getElementById('flag-count');
const resetBtn = document.getElementById('reset-btn');
const messageElement = document.getElementById('message');

function initGame() {
    flagsCount = 0;
    gameOver = false;
    gameBoard = [];
    gameBoardElement.innerHTML = '';
    messageElement.innerHTML = '';
    flagCountElement.innerText = `Флажки: ${flagsCount} / ${totalMines}`;

    for (let row = 0; row < gridSize; row++) {
        gameBoard[row] = [];
        for (let col = 0; col < gridSize; col++) {
            gameBoard[row][col] = {
                isMine: false,
                isOpen: false,
                isFlagged: false,
                surroundingMines: 0
            };
        }
    }

    let placedMines = 0;
    while (placedMines < totalMines) {
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);
        
        if (!gameBoard[row][col].isMine) {
            gameBoard[row][col].isMine = true;
            placedMines++;
        }
    }

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (gameBoard[row][col].isMine) continue;
            let surroundingMines = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    const newRow = row + i;
                    const newCol = col + j;
                    if (newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize) {
                        if (gameBoard[newRow][newCol].isMine) {
                            surroundingMines++;
                        }
                    }
                }
            }
            gameBoard[row][col].surroundingMines = surroundingMines;
        }
    }

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;

            cell.addEventListener('click', () => handleClick(cell));
            cell.addEventListener('contextmenu', (e) => handleRightClick(e, cell));

            gameBoardElement.appendChild(cell);
        }
    }

    resetBtn.style.display = 'none';
}

function handleClick(cell) {
    if (gameOver) return;

    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    const cellData = gameBoard[row][col];

    if (cellData.isOpen || cellData.isFlagged) return;

    if (cellData.isMine) {
        revealMines();
        gameOver = true;
        showGameOverMessage();
        return;
    }

    openCell(row, col);

    if (cellData.surroundingMines === 0) {
        openSurroundingCells(row, col);
    }

    checkWin();
}

function openSurroundingCells(row, col) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize) {
                openCell(newRow, newCol);
            }
        }
    }
}

function openCell(row, col) {
    const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    const cellData = gameBoard[row][col];

    if (cellData.isOpen) return;

    cellData.isOpen = true;
    cell.classList.add('open');
    if (cellData.surroundingMines > 0) {
        cell.innerText = cellData.surroundingMines;
    }
}

function handleRightClick(e, cell) {
    e.preventDefault();

    if (gameOver) return;

    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    const cellData = gameBoard[row][col];

    if (cellData.isOpen) return;

    if (flagsCount >= totalMines && !cellData.isFlagged) {
        alert("Все флажки использованы!");
        return;
    }

    if (cellData.isFlagged) {
        cellData.isFlagged = false;
        cell.classList.remove('flag');
        flagsCount--;
    } else {
        cellData.isFlagged = true;
        cell.classList.add('flag');
        flagsCount++;
    }

    flagCountElement.innerText = `Флажки: ${flagsCount} / ${totalMines}`;
    checkWin();
}

function checkWin() {
    let openedCells = 0;
    let flaggedCells = 0;

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cellData = gameBoard[row][col];
            if (cellData.isOpen) openedCells++;
            if (cellData.isFlagged) flaggedCells++;
        }
    }

    if (openedCells === gridSize * gridSize - totalMines) {
        gameOver = true;
        alert("Вы выиграли!");
    }
}

function revealMines() {
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cellData = gameBoard[row][col];
            const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
            if (cellData.isMine) {
                cell.classList.add('mine');
                cell.innerText = '💣';
            }
        }
    }
}

function showGameOverMessage() {
    messageElement.innerHTML = 'Вы проиграли! Игра завершена.';
    resetBtn.style.display = 'block';
}

resetBtn.addEventListener('click', initGame);

initGame();
