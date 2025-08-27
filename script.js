//const hand = ["rock", "paper", "scissors"];
const hand = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore =0;

function getComputerChoice() {

    let randomNumber = Math.random();
    console.log(randomNumber);

    let index = Math.floor(randomNumber * 3);
    return hand[index];

}

function getHumanChoice() {
    let choice = prompt("Enter Rock, paper, or scissors");
    return choice;
}

function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice) {
        return "It's a tie XD"
    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! rock beats scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! paper beats rock";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! scissors beats paper";
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

    function playGame() {

    for (let i = 0; i < 3; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        console.log("Round " + (i + 1));
        console.log("You chose: " + humanSelection);
        console.log("Computer chose: " + computerSelection);
        
        let result = playRound(humanSelection, computerSelection);
        console.log(result);
        console.log("Score - You: " + humanScore + " Computer: " + computerScore);
        console.log("---");
    }
    
    if (humanScore > computerScore) {
        return "You win the game!";
    } else if (computerScore > humanScore) {
        return "You lose the game!";
    }
}


console.log(playGame());