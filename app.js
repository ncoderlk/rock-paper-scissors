document.getElementById("app").style.display = "block";
document.getElementById("final-result").style.display = "none";
let userScore = 0;
let computerScore = 0;
const userScoreElm = document.getElementById("user-score");
const compScoreElm = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.getElementById("result");
const rockElm = document.getElementById("r");
const paperElm = document.getElementById("p");
const scissorsElm = document.getElementById("s");

let gotResult = false;
let result;
let userDisplayChoice;
let compDisplayChoice;

const methods = [
  //User Wins
  ["rs", "pr", "sp"],
  //Computer wins
  ["rp", "ps", "sr"],
  //Match will darw
  ["rr", "pp", "ss"],
];

function end(msg) {
  document.getElementById("app").style.display = "none";
  document.getElementById("final-result").style.display = "block";
  document.getElementById("final-msg").innerHTML = msg;
}

function getCompChoice() {
  const compChoice = ["r", "p", "s"];
  const randomNum = Math.floor(Math.random() * 3);
  return compChoice[randomNum];
}
function game(userChoice) {
  switch (userChoice) {
    case "r":
      userDisplayChoice = "rock";
      break;
    case "p":
      userDisplayChoice = "paper";
      break;
    case "s":
      userDisplayChoice = "scissors";
      break;
  }
  const computerChoice = getCompChoice();
  switch (computerChoice) {
    case "r":
      compDisplayChoice = "rock";
      break;
    case "p":
      compDisplayChoice = "paper";
      break;
    case "s":
      compDisplayChoice = "scissors";
      break;
  }
  let currentMethod = userChoice + computerChoice;
  for (let i in methods[0]) {
    if (currentMethod == methods[0][i]) {
      result = "user won";
      gotResult = true;
      break;
    } else {
      gotResult = false;
    }
  }
  if (!gotResult) {
    for (let j in methods[1]) {
      if (currentMethod == methods[1][j]) {
        result = "user lost";
        gotResult = true;
        break;
      } else {
        gotResult = false;
      }
    }
  }

  if (!gotResult) {
    for (let m in methods[2]) {
      if (currentMethod == methods[2][m]) {
        result = "match was draw";
        gotResult = true;
        break;
      } else {
        gotResult = false;
      }
    }
  }
  if (gotResult) {
    result_div.innerHTML = ` 
  <ul>
    <li><b>User:</b> ${userDisplayChoice}</li>
    <li><b>Computer:</b> ${compDisplayChoice}</li>
  </ul>`;
    switch (result) {
      case "user won":
        userScore += 1;
        break;
      case "user lost":
        computerScore += 1;
        break;
      case "match was draw":
        console.log("draw");
        break;
    }
    if (userScore == 5) {
      end("Congratulations, You have won the game 🥳🥳");
    }
    if (computerScore == 5) {
      end("Oops, You have lost the game 🐌🐌");
    }
    if (userScore == 5 && computerScore == 5) {
      end("Omg, Match was draw 😇😇");
    }
  }
  userScoreElm.innerHTML = userScore;
  compScoreElm.innerHTML = computerScore;
}
function main() {
  rockElm.addEventListener("click", () => game("r"));
  paperElm.addEventListener("click", () => game("p"));
  scissorsElm.addEventListener("click", () => game("s"));
}

main();
// result_div.innerHTML = ``;
