// 
let playerWins = 0;
let compWins = 0;

const compChoices = ["rock","paper","scissors"]

function getComputerChoice() {
    return compChoices[Math.floor(Math.random() * 3)];
}

// console.log(getComputerChoice());

function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

// console.log(getPlayerChoice());

function playRound(playerSelection, compSelection) {
    if (playerSelection === compSelection) {
        console.log("Draw! Player Chose:", playerSelection, "and Computer Chose:", compSelection);
        return 0;
    }
    else if ((playerSelection == "rock" && compSelection == "scissors") ||
    (playerSelection == "paper" && compSelection == "rock") ||
    (playerSelection == "scissors" && compSelection == "paper")) {
        console.log("Winner! Player Chose:", playerSelection, "and Computer Chose:", compSelection);
        return 1;
    }
    else if ((playerSelection == "rock" && compSelection == "paper") ||
    (playerSelection == "paper" && compSelection == "scissors") ||
    (playerSelection == "scissors" && compSelection == "rock")) {
        console.log("Loser! Player Chose:", playerSelection, "and Computer Chose:", compSelection);
        return 2;
    }
}

for (let i = 0; i < 5; i++) {
    let result = playRound(getPlayerChoice(), getComputerChoice());
    if (result === 1) {
        playerWins++;
    }
    else if (result === 2) {
        compWins++;
    }
}

if (playerWins > compWins) {
    console.log("Player Wins!");
}
else if (compWins > playerWins) {
    console.log("Computer Wins!");
}
else if (playerWins === compWins) {
    console.log("It's a Draw!");
}
else {
    console.log("Result Error, please check code!");
}