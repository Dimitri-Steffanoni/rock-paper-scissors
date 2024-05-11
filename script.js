console.log("Let's fight");

function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);

  if (i == 0) {
    return "rock";
  } else if (i == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let resp = prompt("Choose rock paper or scissors");
  let human_answer = resp.toLowerCase();
  while (
    human_answer != "rock" &&
    human_answer != "paper" &&
    human_answer != "scissors"
  ) {
    human_answer = prompt("Choose rock paper or scissors");
  }
  return human_answer;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "Draw! no one wins";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    return "You won! Paper beats Rock.";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper.";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    return "You won! Rock beats scissors.";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    return "You lose! Paper beats Rock.";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    return "You won! Scissors beats Paper.";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors.";
  } else return "Something went wrong";
}

function playGame() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  console.log(playRound(humanChoice, computerChoice));
}

let humanScore = 0;
let computerScore = 0;

while (humanScore < 5 && computerScore < 5) {
  playGame();
  console.log(humanScore + " - " + computerScore);
}

if (humanScore == 5) {
  console.log("Congratulations! You won 5 to " + computerScore);
  alert("Congratulations! You won 5 to " + computerScore);
} else {
  console.log("Disgrace! You lost 5 to " + humanScore);
  alert("Disgrace! You lost 5 to " + humanScore);
}
