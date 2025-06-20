const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const startGame = () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game started!');
    const playerSelection = getPlayerChoice();
    console.log(`Player's choice: ${playerSelection}`);
    const computerChoice = getComputerChoice();
    console.log(`Computer's choice: ${computerChoice}`);
    const winner = getWinner(computerChoice, playerSelection);
    const msg = `You picked ${playerSelection}, computer picked ${computerChoice}. Result is ${winner}!`;
    console.log(winner);
    alert(msg);
    gameIsRunning = false;
}

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();

    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS) { 
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you.`);
        return DEFAULT_USER_CHOICE;
    }
    return selection
}

const getWinner = (computerChoice, playerChoice) => {
    if (computerChoice === playerChoice) {
        return RESULT_DRAW;
    } else if ((computerChoice === ROCK && playerChoice === SCISSORS) ||
               (computerChoice === PAPER && playerChoice === ROCK) ||
               (computerChoice === SCISSORS && playerChoice === PAPER)) {
        return RESULT_COMPUTER_WINS;
    } else {
        return RESULT_PLAYER_WINS;
    }
}


const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

startGameBtn.addEventListener('click',  startGame);