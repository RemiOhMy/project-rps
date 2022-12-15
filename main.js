// 

let playerWins = 0;
let compWins = 0;
let playerWinCount = document.getElementById("player-win-count");
let compWinCount = document.getElementById("comp-win-count");

let body = document.body;
let rockBtn = document.getElementById("rps-rock");
let paperBtn = document.getElementById("rps-paper");
let sciBtn = document.getElementById("rps-scissors");
let roundResult = document.getElementById("round-result");
let gameResult = document.getElementById("game-result");

const compChoices = ["rock","paper","scissors"]

function getComputerChoice() {
    return compChoices[Math.floor(Math.random() * 3)];
}

rockBtn.onclick = () => playRound("rock", getComputerChoice());
paperBtn.onclick = () => playRound("paper", getComputerChoice());
sciBtn.onclick = () => playRound("scissors", getComputerChoice());

function playRound(playSel, compSel) {
    if (playSel === compSel) {
        updateResults(playSel, compSel, 0)
    }
    else if ((playSel == "rock" && compSel == "scissors") ||
    (playSel == "paper" && compSel == "rock") ||
    (playSel == "scissors" && compSel == "paper")) {
        playerWins++;
        updateResults(playSel, compSel, 1)
    }
    else if ((playSel == "rock" && compSel == "paper") ||
    (playSel == "paper" && compSel == "scissors") ||
    (playSel == "scissors" && compSel == "rock")) {
        compWins++
        updateResults(playSel, compSel, 2)
    }
}

function updateResults(playSel, compSel, result) {
    if (result === 0) {
        roundResult.textContent = `Draw! Player Chose: ${playSel}, and Computer Chose: ${compSel}`
    }
    else if (result === 1) {
        roundResult.textContent = `Winner! Player Chose: ${playSel}, and Computer Chose: ${compSel}`
        playerWinCount.textContent = playerWins;
    }
    else if (result === 2) {
        roundResult.textContent = `Loser! Player Chose: ${playSel}, and Computer Chose: ${compSel}`
        compWinCount.textContent = compWins;
    }

    if (playerWins === 5 || compWins === 5) {
        if (playerWins === 5) {
            gameResult.textContent = "Player Wins! Congratulations!"
        }
        else {
            gameResult.textContent = "Computer Wins! Maybe Next Time!"
        }

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        sciBtn.disabled = true;

        let restartBtn = document.createElement("button");
        restartBtn.classList.add("rps-button")
        restartBtn.textContent = "Try Again?"
        restartBtn.onclick = () => location.reload();
        body.append(restartBtn);
    }
}