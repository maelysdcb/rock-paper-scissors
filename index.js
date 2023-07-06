let computerP = document.querySelector("#computer span");
let playerP = document.querySelector("#player span");
let computerHand;
let playerHand;
let log = document.querySelector("#description h1");
const scoreNumberElement = document.querySelector("#score p:last-child");

//FUNCTION DECIDE WINNER
function decideWinner(player, computer) {
  const score = parseInt(scoreNumberElement.textContent);
  if (player === computer) {
    log.textContent = "DRAW";
  } else if (
    (computer === "scissors ✌️" && player === "paper 🤚") ||
    (computer === "rock ✊" && player === "scissors ✌️") ||
    (computer === "paper 🤚" && player === "rock ✊")
  ) {
    if (score > 0) {
      scoreNumberElement.textContent = score - 1;
    }
    log.textContent = "YOU LOSE";
  } else {
    log.textContent = "YOU WIN";
    scoreNumberElement.textContent = score + 1;
  }
}

// COMPUTER FUNCTION
function randomComputerChoice() {
  let choices = ["rock ✊", "paper 🤚", "scissors ✌️"];
  let rand = Math.floor(Math.random() * choices.length);
  computerHand = choices[rand];
}

// PLAY FUNCTION
function play(attacks) {
  playerHand = attacks;
  randomComputerChoice();
  reset();
  playerP.textContent = `${playerHand}`;
  setTimeout(() => {
    computerP.textContent = `${computerHand}`;
  }, 900);
  setTimeout(() => {
    decideWinner(playerHand, computerHand);
  }, 1600);
}

function reset() {
  computerP.textContent = ``;
  log.textContent = ``;
}
