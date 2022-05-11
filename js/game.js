function computerPlay(){
    let random = Math.floor(Math.random()*3);

    switch(random){
      case 0: return "Rock";
      case 1: return "Paper"; 
      case 2: return "Scissors";
    }
}

function singleRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection().toLowerCase();

    if(playerSelection == computerSelection){
        console.log("Tie in the round!");
        return 0;

    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You won the round! Rock beat scissors.");
        return 1;

    }else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You won the round! Paper beat rock.");
        return 1;

    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You won the round! Scissors beat paper.");
        return 1;

    }else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lost the round! Paper beat rock.");
        return 2;
        
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You lost the round! Scissors beat paper.");
        return 2;

    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lost the round! Rock beat scissors.");
        return 2;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i<5 ;i++){
      let playerSelection = prompt("Type symbol:");
      let roundResult = singleRound(playerSelection, computerPlay);

        if(roundResult == 1){
            playerScore++;

        }else{
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