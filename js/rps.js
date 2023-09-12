//My javascript file



function getRandomInt(min = 1 , max = 3) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

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

function getPlayerChoice() {
    let getPlayerInput = prompt("Choose from Rock, Paper or Scissors!");
    let resultPlayerInput = getPlayerInput.toLowerCase();
    return resultPlayerInput;
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Ooops, it's a Tie... Try again!");
        // return resultContest;
        }
        else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log("You Win! Rock beats Scissors!");
            let resultContest = "Won";
            return resultContest;
        } else {
            console.log("You Lose! Paper beats Rock!");
            let resultContest = "Lost";
            return resultContest;
        }
        }
        else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                console.log("You Lose! Scissors beats Paper!");
                let resultContest = "Lost";
                return resultContest;
            } else {
                console.log("You Win! Paper beats Rock!");
                let resultContest = "Won";
                return resultContest;
            }
            }
            else if (playerSelection === "scissors") {
                if (computerSelection === "rock") {
                    console.log("You Lose! Rock beats Scissors!");
                    let resultContest = "Lost";
                    return resultContest;
                } else {
                    console.log("You Win! Scissors beats Paper!");
                    let resultContest = "Won";
                    return resultContest;
                }
                }
            }

let playerScore = 0;
let computerScore = 0;
let highestScore = 0;

function increaseScore(resultRound) {
    if (resultRound === "Won") {
        ++playerScore;
    } else if (resultRound === "Lost") {
        ++computerScore;
    }
    }

function getHighestScore() {
    if (computerScore>playerScore) {
        return computerScore
    } else {
        return playerScore
    }
}

function game() {
    alert("Let's play! The first to get to 5 wins!");
    while (highestScore<5) {
        
        let randomInt = getRandomInt();
        console.log(randomInt);
        let computerChoice = getComputerChoice(randomInt);
        console.log(computerChoice);
        
        let playerInput = getPlayerChoice();
        console.log(playerInput);
        
        let resultRound = playRound(playerInput,computerChoice);
        console.log(resultRound);
        
        increaseScore(resultRound);
        console.log("SCORE - Player: " + playerScore + " Computer: " + computerScore);
        
        highestScore = getHighestScore();
        console.log("The highest score is " +highestScore);
    }
}

game();
