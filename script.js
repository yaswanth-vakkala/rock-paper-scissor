function computerSelection(){
    let values = ["Rock", "Paper", "Scissor"];
    const randomValue = values[Math.floor(Math.random() * values.length)]
    return randomValue.toLowerCase()
}

function playerSelection(){
    let value = prompt("Enter your selection here: ");
    return value.toLowerCase()
}

function playGame(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection == "paper"){
        return "computer won!"
    }else if(playerSelection == "rock" && computerSelection == "scissor"){
        return "player won!"
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "player won!"
    }else if(playerSelection == "paper" && computerSelection == "scissor"){
        return "computer won!"
    }else if(playerSelection == "scissor" && computerSelection == "rock"){
        return "computer won!"
    }else if(playerSelection == "scissor" && computerSelection == "paper"){
        return "player won!"
    }
}

function game(){
    playerScore = 0;
    computerScore = 0;
    let result;
    for (let i = 0; i < 5; i++){
        result = playGame(playerSelection(), computerSelection())
        if (result === "player won!"){
            playerScore++;
        }else if(result === "computer won!"){
            computerScore++;
        }
    }
    if (playerScore > computerScore){
        return "player won in 5 rounds";
    }else if (playerScore < computerScore){
        return "compter won in 5 rounds";
    }
}

console.log(game())