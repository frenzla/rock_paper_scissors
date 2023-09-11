//My javascript file



function getRandomInt(min = 1 , max = 3) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

let randomInt = getRandomInt();
console.log(randomInt);

function getComputerChoice(numberForChoice) {
    switch (numberForChoice) {
        case 1:
            return ("rock");
            break;
        case 2:
            return ("paper");
            break;
        case 3:
            return ("scissors");
            break;
        default:
            alert ("Houston, we have a problem!");
    }
}
let computerChoice = getComputerChoice(randomInt);
console.log(computerChoice);

function getPlayerChoice() {
    let getPlayerInput = prompt("Choose from Rock, Paper or Scissors!");
    let resultPlayerInput = getPlayerInput.toLowerCase();
    return resultPlayerInput;
}

let playerInput = getPlayerChoice();
console.log(playerInput);

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        let resultContest = "Ooops, it's a Tie... Try again!";
        return resultContest;
        }
        else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            let resultContest = "You Win! Rock beats Scissors!";
            return resultContest;
        } else {
            let resultContest = "You Lose! Paper beats Rock!";
            return resultContest;
        }
        }
        else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                let resultContest = "You Lose! Scissors beats Paper!";
                return resultContest;
            } else {
                let resultContest = "You Win! Paper beats Rock!";
                return resultContest;
            }
            }
            else if (playerSelection === "scissors") {
                if (computerSelection === "rock") {
                    let resultContest = "You Lose! Rock beats Scissors!";
                    return resultContest;
                } else {
                    let resultContest = "You Win! Scissors beats Paper!";
                    return resultContest;
                }
                }
            }

let resultRound = playRound(playerInput,computerChoice);
console.log(resultRound);