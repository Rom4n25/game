function computerPlay(){
    let random = Math.floor(Math.random()*3);

    switch(random){
      case 0: return "Rock";
      case 1: return "Paper"; 
      case 2: return "Scissors";
    }
}

function singleRound(playerSelection,computerSelection){
    result.textContent="";

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection().toLowerCase();

    if(playerSelection == computerSelection){
        results.textContent="Tie in the round!";
    
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        results.textContent="You won the round! Rock beats scissors.";
        playerScore++;

    }else if(playerSelection == "paper" && computerSelection == "rock"){
        results.textContent="You won the round! Paper beats rock.";
        playerScore++;

    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        results.textContent="You won the round! Scissors beats paper.";
        playerScore++;

    }else if(playerSelection == "rock" && computerSelection == "paper"){
        results.textContent="You lost the round! Paper beats rock.";
        computerScore++;
        
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        results.textContent="You lost the round! Scissors beats paper.";
        computerScore++;

    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        results.textContent="You lost the round! Rock beats scissors.";
        computerScore++;
    }

    if(computerScore == 5 || playerScore ==5){

        result(playerScore,computerScore);
        computerScore=0;
        playerScore=0;

        
    }

    playerPts.textContent=playerScore;
    computerPts.textContent=computerScore;
    
}

function result(playerScore, computerScore){

    if(playerScore>computerScore){
        results.textContent="You won the game!";

    }else if(playerScore<computerScore){
        results.textContent="You lost the game!";

    }else
        results.textContent="Tie in the game!";
}

function remove(e){
    if(e.propertyName!="transform") return;
    buttons.forEach(button => button.classList.remove("click"));
}

let playerScore=0;
let computerScore=0;
let playerSelection;

const buttons = document.querySelectorAll("button");
const results = document.querySelector(".roundInfo");
const playerPts = document.querySelector(".playerPts");
const computerPts = document.querySelector(".computerPts");

buttons.forEach(button => button.addEventListener("click",(e) => {
    playerSelection = e.target.className;
    singleRound(playerSelection,computerPlay);
    results.classList.add("click");
    button.classList.add("click");
    
}));

buttons.forEach(button => button.addEventListener("transitionend", e=>remove(e)));
results.addEventListener("transitionend",()=>results.classList.remove("click"));

