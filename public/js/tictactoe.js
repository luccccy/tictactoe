/*//HTML elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector('.reset');
const cellDiv = document.querySelectorAll('.game-cell');

//game constance
const xSymbol = 'x';
const oSymbol = 'o';

//game variables
let gameIsLive = true;
let xIsNext = true;

//functions
function letterToSymbol(letter) {
    if(letter === 'x') {
        return xSymbol;
    }
    else {
        return oSymbol;
    }
}

function handleWin(letter) {
    gameIsLive = false;
    if(letter === 'x') {
        statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`
    }
    else {
        statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`
    }
}

function checkGameStatus() {
    const tl = cellDiv[0].classList[1];
    const tm = cellDiv[1].classList[1];
    const tr = cellDiv[2].classList[1];
    const ml = cellDiv[3].classList[1];
    const mm = cellDiv[4].classList[1];
    const mr = cellDiv[5].classList[1];
    const bl = cellDiv[6].classList[1];
    const bm = cellDiv[7].classList[1];
    const br = cellDiv[8].classList[1];

    if(tl && tl === tm && tl === tr) {
        handleWin(tl)
        cellDiv[0].classList.add('won');
        cellDiv[1].classList.add('won');
        cellDiv[2].classList.add('won');
    }
    else if (tl && tl === ml && tl === bl) {
       handleWin(tl);
        cellDiv[0].classList.add('won');
        cellDiv[3].classList.add('won');
        cellDiv[6].classList.add('won');
    }
    else if (tl && tl === mm && tl === br) {
        handleWin(tl)
        cellDiv[0].classList.add('won');
        cellDiv[4].classList.add('won');
        cellDiv[8].classList.add('won');
    }
    else if (bl && bl === bm && bm === br) {
        handleWin(bl);
        cellDiv[6].classList.add('won');
        cellDiv[7].classList.add('won');
        cellDiv[8].classList.add('won');
    }
    else if (bl && bl === mm && bl === tr) {
        handleWin(bl);
        cellDiv[2].classList.add('won');
        cellDiv[4].classList.add('won');
        cellDiv[6].classList.add('won');
        }
    else if (ml && ml === mm && ml === mr) {
        handleWin(ml);
        cellDiv[3].classList.add('won');
        cellDiv[4].classList.add('won');
        cellDiv[5].classList.add('won');
    }
    else if (tm && tm === mm && tm === bm) {
        handleWin(tm);
        cellDiv[1].classList.add('won');
        cellDiv[4].classList.add('won');
        cellDiv[7].classList.add('won');
    }
    else if (tr && tr === mr && tr === br) {
        handleWin(tr);
        cellDiv[2].classList.add('won');
        cellDiv[5].classList.add('won');
        cellDiv[8].classList.add('won');
    }
    else if (tl && tm && tr && ml && mm && mr && bl && bm && br) {
        gameIsLive = false;
        statusDiv.innerHTML = 'Game is tied!'
    }
    else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            statusDiv.innerHTML = `${xSymbol} is next! `;
        }
        else {
            statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
        }
    }
}

function handleReset (e) {
    xIsNext = true;
    statusDiv.innerHTML = `${xSymbol} is next`;
    for (const cellD of cellDiv) {
        cellD.classList.remove('x');
        cellD.classList.remove('o');
        cellD.classList.remove('won');
    }
    gameIsLive = true;
}

function handleCellClick(e) {
    const classList = e.target.classList;
    if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
        return;
    }
    if (xIsNext) {
        classList.add('x');
        checkGameStatus();
    }
    else {
        classList.add('o');
        checkGameStatus();
    }
}

resetDiv.addEventListener('click', handleReset );
for (const cellD of cellDiv) {
    cellD.addEventListener('click', handleCellClick());
*/










// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

// game constants
const xSymbol = '×';
const oSymbol = '○';

// game variables
let gameIsLive = true;
let xIsNext = true;


// functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
    gameIsLive = false;
    if (letter === 'x') {
        statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
    } else {
        statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
    }
};

const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];

    // check winner
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        handleWin(middleLeft);
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        handleWin(bottomLeft);
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        handleWin(topMiddle);
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        handleWin(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        handleWin(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
        gameIsLive = false;
        statusDiv.innerHTML = 'Game is tied!';
    } else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            statusDiv.innerHTML = `${xSymbol} is next`;
        } else {
            statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
        }
    }
};


// event Handlers
const handleReset = (e) => {
    xIsNext = true;
    statusDiv.innerHTML = `${xSymbol} is next`;
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
    gameIsLive = true;
};

const handleCellClick = (e) => {
    const classList = e.target.classList;

    if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
        return;
    }

    if (xIsNext) {
        classList.add('x');
        checkGameStatus();
    } else {
        classList.add('o');
        checkGameStatus();
    }
};


// event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick)
}