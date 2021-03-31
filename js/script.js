let nextRound = "Сейчас ходит Х";
let gamer = true;
let gameMatrix = [[null, null, null], [null, null, null], [null, null, null]];


const renderTable = () => {
    const block = document.querySelector('.block');
    const table = document.createElement('table');
    table.classList.add('game-table');

    let row, cell;

    for (let i = 0; i < 3; i++) {
        row = document.createElement('tr');
        row.classList.add(`coord__y_${i}`);
        for (let j = 0; j < 3; j++) {
            cell = document.createElement('td');
            cell.setAttribute('y', i);
            cell.setAttribute('x', j);
            cell.setAttribute('inner-text', false);
            cell.addEventListener('click', turnRound)
            row.append(cell);
        }
        table.append(row);
    }

    return block.append(table);
}

const turnRound = (e) => {
    let yCoord = e.target.getAttribute('y');
    let xCoord = e.target.getAttribute('x');
    let innText = e.target.getAttribute('inner-text');

    if (innText == "false") {

        if (gamer) {
            nextRound = "Сейчас ходит O";
            document.querySelector('p').innerText = nextRound;
            e.target.innerText = "X";
            e.target.setAttribute('inner-text', true);
            gameMatrix[yCoord][xCoord] = true;
        }

        else {
            nextRound = "Сейчас ходит Х";
            document.querySelector('p').innerText = nextRound;
            e.target.innerText = "O";
            e.target.setAttribute('inner-text', true);
            gameMatrix[yCoord][xCoord] = false;
        }
    };

    if ((gameMatrix[yCoord][0] == gamer && gameMatrix[yCoord][1] == gamer && gameMatrix[yCoord][2] == gamer) ||
        (gameMatrix[0][xCoord] == gamer && gameMatrix[1][xCoord] == gamer && gameMatrix[2][xCoord] == gamer) ||
        (gameMatrix[0][0] === gamer && gameMatrix[1][1] === gamer && gameMatrix[2][2] === gamer) ||
        (gameMatrix[2][0] === gamer && gameMatrix[1][1] === gamer && gameMatrix[0][2] === gamer)) {
        alert(`${gamer ? 'X' : 'O'} have won this game!!!`);
    };
    gamer = !gamer;

    console.log(`${yCoord} - ${xCoord}`);
    console.log(gameMatrix);
}

renderTable();

document.querySelector('.start-game').addEventListener('click', () => location.reload());
