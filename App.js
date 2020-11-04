let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

function getComputerChoice(){
    const choices = ['rock', 'paper','scissors','lizard','spock'];
    const randomNubmer = Math.floor(Math.random() *5);
    return choices[randomNubmer];
}

function win(userPick, computerPick){
    const smallUserWord = "user".fontsize(2.5).sub();
    const smallCompWord = "comp".fontsize(2.5).sub();
    const userChoice_div = document.getElementById(userPick);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userPick}${smallUserWord}  wins against  ${computerPick}${smallCompWord}. You win!`
    userChoice_div.classList.add('green-glow');
    setTimeout(()=> userChoice_div.classList.remove('green-glow') , 500);
}

function lose(userPick, computerPick){
    const smallUserWord = "user".fontsize(2.5).sub();
    const smallCompWord = "comp".fontsize(2.5).sub();
    const userChoice_div = document.getElementById(userPick);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userPick}${smallUserWord}  loses against  ${computerPick}${smallCompWord}. You lost...`
    userChoice_div.classList.add('red-glow');
    setTimeout(() =>userChoice_div.classList.remove('red-glow') , 500);
}

function draw(userPick, computerPick){
    const smallUserWord = "user".fontsize(2.5).sub();
    const smallCompWord = "comp".fontsize(2.5).sub();
    const userChoice_div = document.getElementById(userPick);
    result_p.innerHTML = `${userPick}${smallUserWord}  equals  ${computerPick}${smallCompWord}. It's a draw...`
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow') , 500);
}

function game(userChoice){
    const ComputerChoice = getComputerChoice();
    switch (userChoice+ComputerChoice){
        //user wins
        case "paperrock":
        case "scissorspaper":  
        case "rocklizard":
        case "lizardspock":
        case "spockscissors":
        case "scissorslizard":
        case "lizardpaper":
        case "paperspock":
        case "spockrock":
        case "rockscissors":
          win(userChoice,ComputerChoice);
          break;

        //computer wins
        case "rockpaper":
        case "paperscissors":  
        case "lizardrock":
        case "spocklizard":
        case "scissorsspock":
        case "lizardscissors":
        case "paperlizard":
        case "spockpaper":
        case "rockspock":
        case "scissorsrock":
          lose(userChoice,ComputerChoice);
          break;

        //a draw
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
          draw(userChoice,ComputerChoice);
          break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("rock"));
    
    paper_div.addEventListener('click', () => game("paper"));
    
    scissors_div.addEventListener('click', () => game("scissors"));
    
    lizard_div.addEventListener('click', () => game("lizard"));
    
    spock_div.addEventListener('click', () => game("spock"));   
}

main();
