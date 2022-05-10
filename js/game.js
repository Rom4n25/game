function computerPlay(){
    let random = Math.floor(Math.random()*3);

    switch(random){
      case 0: return "Rock";
      case 1: return "Paper"; 
      case 2: return "Scissors";
    }
}

function singleRound(playerSelection,computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection().toLowerCase();

    if(player == computer){
        return 0;

    }else if(player == "rock" && computer == "scissors"){
        return 1;
    }else if(player == "paper" && computer == "rock"){
        return 1;
    }else if(player == "scissors" && computer == "paper"){
        return 1;
    }else{
        return 2;
    }
}

function game(){

    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i<5 ;i++){
      let playerInput = prompt("Type symbol:");
      let resultOfRound = singleRound(playerInput, computerPlay);
        if(resultOfRound == 0){
            console.log("Tie in the round!");

        }else if(resultOfRound == 1){
            console.log("You won the round!");
            playerScore++;

        }else{
            console.log("You lost the round!");
            computerScore++;
        }
    }
    result(playerScore,computerScore);
}

function result(playerScore, computerScore){
    if(playerScore>computerScore){
        console.log("You won the game!");

    }else if(playerScore<computerScore){
        console.log("You lost the game!");

    }else
        console.log("Tie in the game!");
}

console.log(game());