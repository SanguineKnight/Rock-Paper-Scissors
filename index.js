const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
   let randomIndex = Math.floor(Math.random() * choices.length)
   let computerSelection = choices[randomIndex]
   return computerSelection
}

function playRound(playerSelection, computerSelection) {
    console.log("You picked: " + playerSelection) 
    console.log("Opponent picked: " + computerSelection)
    if (playerSelection == computerSelection) {
        console.log("draw")
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose")
    } else {
        console.log("You Win!")
    }
}

let playerSelection = prompt("pick: rock, paper, or scissors")

let computerSelection = getComputerChoice()

playRound(playerSelection, computerSelection)
