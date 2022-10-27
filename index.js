const choices = ["rock", "paper", "scissors"];
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissor-btn");
const outcome = document.getElementById("outcome");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
   let randomIndex = Math.floor(Math.random() * choices.length)
   let computerSelection = choices[randomIndex]
   return computerSelection
}

rockButton.addEventListener("click", function() {

    playerSelection = "rock";
    computerSelection = getComputerChoice();
    let result = "";

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            result = ("Draw")
        } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
            result = ("You Lose")
            computerPoints++
        } else {
            result = ("You Win!")
            playerPoints++
        }
    }

    playRound(playerSelection, computerSelection);

    outcome.innerText = `You Choose: ${playerSelection}
    
    Computer Chooses: ${computerSelection} 

    ${result} `

    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;

    if (playerPoints == 3) {
        outcome.innerText = "Congrats you win the game!"
        playerPoints = 0
        computerPoints = 0
    } else if (computerPoints == 3) {
        outcome.innerText = "Oh no, you lose! Try again?"
        playerPoints = 0
        computerPoints = 0
    }
});

paperButton.addEventListener("click", function() {

    playerSelection = "paper";
    computerSelection = getComputerChoice();
    let result = "";

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            result = ("Draw")
        } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
            result = ("You Lose")
            computerPoints++
        } else {
            result = ("You Win!")
            playerPoints++
        }
    }

    playRound(playerSelection, computerSelection);

    outcome.innerText = `You Choose: ${playerSelection} 

    Computer Chooses: ${computerSelection} 

    ${result} `

    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;

    if (playerPoints == 3) {
        outcome.innerText = "Congrats you win the game!"
        playerPoints = 0
        computerPoints = 0
    } else if (computerPoints == 3) {
        outcome.innerText = "Oh no, you lose! Try again?"
        playerPoints = 0
        computerPoints = 0
    }

});

scissorsButton.addEventListener("click", function() {

    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    let result = "";

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            result = ("Draw")
        } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
            result = ("You Lose")
            computerPoints++
        } else {
            result = ("You Win!")
            playerPoints++
        }
    }

    playRound(playerSelection, computerSelection);

    outcome.innerText = `You Choose: ${playerSelection} 

    Computer Chooses: ${computerSelection} 

    ${result} `

    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;

    if (playerPoints == 3) {
        outcome.innerText = "Congrats you win the game!"
        playerPoints = 0
        computerPoints = 0
    } else if (computerPoints == 3) {
        outcome.innerText = "Oh no, you lose! Try again?"
        playerPoints = 0
        computerPoints = 0
    }

});
