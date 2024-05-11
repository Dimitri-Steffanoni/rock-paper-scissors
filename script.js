console.log("Let's fight");

function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);

  if (i == 0) {
    return "rock";
  } else if (i == 1) {
    return "paper";
  } else {
    return "scrissors";
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

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice==computerChoice){
        return humanChoice + " vs " + computerChoice + " no one wins";
    } else {
        return "brrrrr";
    }
}

console.log(playRound());

let humanScore = 0;
let computerScore = 0;
