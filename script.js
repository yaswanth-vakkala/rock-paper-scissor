function computerSelection() {
  let values = ["Rock", "Paper", "Scissor"];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  return randomValue.toLowerCase();
}

function playerSelection() {
  let value = prompt("Enter your selection here: ");
  return value.toLowerCase();
}

const result = document.querySelector(".result");
const cscore = document.querySelector(".cscore");
const pscore = document.querySelector(".pscore");
pscore.textContent = 0;
cscore.textContent = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection == "paper") {
    cscore.textContent = parseInt(cscore.textContent) + 1; // or single +
    console.log(cscore.textContent);
    // result.textContent = "computer won!";
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    pscore.textContent = parseInt(pscore.textContent) + 1;
    // result.textContent = "player won!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    pscore.textContent = parseInt(pscore.textContent) + 1;
    // result.textContent = "player won!";
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    cscore.textContent = parseInt(cscore.textContent) + 1;
    // result.textContent = "computer won!";
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    cscore.textContent = parseInt(cscore.textContent) + 1;
    // result.textContent = "computer won!";
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    pscore.textContent = parseInt(pscore.textContent) + 1;
    // result.textContent = "player won!";
  }

  if(parseInt(cscore.textContent) >= 5){
    result.textContent = "Computer Won!";
    cscore.textContent = 0;
    pscore.textContent = 0;
  }else if(parseInt(pscore.textContent) >= 5){
    result.textContent = "Player Won!";
    cscore.textContent = 0;
    pscore.textContent = 0;
  }
}

// function game(){
//     playerScore = 0;
//     computerScore = 0;
//     let result;
//     for (let i = 0; i < 5; i++){
//         result = playRound(playerSelection(), computerSelection())
//         if (result === "player won!"){
//             playerScore++;
//         }else if(result === "computer won!"){
//             computerScore++;
//         }
//     }
//     if (playerScore > computerScore){
//         return "player won in 5 rounds";
//     }else if (playerScore < computerScore){
//         return "compter won in 5 rounds";
//     }
// }

// console.log(game())
