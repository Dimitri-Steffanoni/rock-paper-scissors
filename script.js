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
    content.textContent = "Draw! no one wins";
    return "Draw! no one wins";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    content.textContent = "You won! Paper beats Rock.";
    return "You won! Paper beats Rock.";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    content.textContent = "You lose! Scissors beats Paper.";
    return "You lose! Scissors beats Paper.";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    content.textContent = "You won! Rock beats scissors.";
    return "You won! Rock beats scissors.";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    content.textContent = "You lose! Paper beats Rock.";
    return "You lose! Paper beats Rock.";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    content.textContent = "You won! Scissors beats Paper.";
    return "You won! Scissors beats Paper.";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    content.textContent = "You lose! Rock beats Scissors.";
    return "You lose! Rock beats Scissors.";
  } else return "Something went wrong";
}

function playGame() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  console.log(playRound(humanChoice, computerChoice));
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const score = document.querySelector("#score");
const result = document.querySelector("#result");

rock.addEventListener("click", () => console.log(playRound("rock", getComputerChoice())));
paper.addEventListener("click", () => console.log(playRound("paper", getComputerChoice())));
scissors.addEventListener("click", () => console.log(playRound("scissors", getComputerChoice())));


let humanScore = 0;
let computerScore = 0;

