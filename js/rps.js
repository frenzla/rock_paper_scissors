//My javascript file

console.log('Hello!');

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

alert("Let's play! The first to get to 5 wins!");

let playerScore = 0;
let computerScore = 0;
let highestScore = 0;

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', play));

function play (e) {
        let playerInput = this.id;
        console.log("You chose: " + playerInput);

        let randomInt = getRandomInt();
        let computerChoice = getComputerChoice(randomInt);
        console.log("The Computer chose: " + computerChoice);

        let resultRound = playRound(playerInput,computerChoice);

        increaseScore(resultRound);
        console.log("SCORE - You: " + playerScore + " Computer: " + computerScore + "\n --------------------------");
            
        highestScore = getHighestScore();
        console.log(highestScore);
    
        if (highestScore === 5) {    
        giveFinalResult();
        };
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        alert("Ooops, it's a tie... Try again! (This round doesn't count)");
        console.log("Ooops, it's a tie... Try again! (This round doesn't count)");
        }
        else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            alert("You Win this round! Rock beats Scissors!");
            console.log("You Win this round! Rock beats Scissors!");
            let resultContest = "Won";
            return resultContest;
        } else {
            alert("You Lose this round! Paper beats Rock!");
            console.log("You Lose this round! Paper beats Rock!");
            let resultContest = "Lost";
            return resultContest;
        }
        }
        else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                alert("You Lose this round! Scissors beats Paper!");
                console.log("You Lose this round! Scissors beats Paper!");
                let resultContest = "Lost";
                return resultContest;
            } else {
                alert("You Win this round! Paper beats Rock!");
                console.log("You Win this round! Paper beats Rock!");
                let resultContest = "Won";
                return resultContest;
            }
            }
            else if (playerSelection === "scissors") {
                if (computerSelection === "rock") {
                    alert("You Lose this round! Rock beats Scissors!");
                    console.log("You Lose this round! Rock beats Scissors!");
                    let resultContest = "Lost";
                    return resultContest;
                } else {
                    alert("You Win this round! Scissors beats Paper!");
                    console.log("You Win this round! Scissors beats Paper!");
                    let resultContest = "Won";
                    return resultContest;
                }
                }
            }

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

function giveFinalResult() {
    if (computerScore === 5) {
        alert("Ouch! You've been beaten!")
    } else {
        alert("Well done! You won!")
    }
}