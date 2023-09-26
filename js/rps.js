//My javascript file

console.log('Hello!');

function getRandomInt(min = 1 , max = 3) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

function getComputerChoice(numberForChoice) {
    switch (numberForChoice) {
        case 1:
            return ("Rock");
            break;
        case 2:
            return ("Paper");
            break;
        case 3:
            return ("Scissors");
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
        // Player
        let playerInput = this.id;
        logPlayerChoice(playerInput);
        console.log("You chose: " + playerInput);

        // Computer
        let randomInt = getRandomInt();
        let computerChoice = getComputerChoice(randomInt);
        logComputerChoice(computerChoice);
        console.log("The Computer chose: " + computerChoice);

        // Round result
        let resultRound = playRound(playerInput,computerChoice);

        increaseScore(resultRound);
        console.log("SCORE - You: " + playerScore + " Computer: " + computerScore + "\n --------------------------");
            
        highestScore = getHighestScore();
        console.log(highestScore);

        // Final result
        if (highestScore === 5) {    
        giveFinalResult();
        };
}

function logPlayerChoice(playerInput) {
    const contentPlayer = document.createElement('div');
    contentPlayer.classList.add('content');
    contentPlayer.textContent = `You chose: ${playerInput}`;
    const containerPlayer = document.querySelector('#containerPlayer');
    containerPlayer.appendChild(contentPlayer);
}

function logComputerChoice(computerChoice) {
    const contentComputer = document.createElement('div');
    contentComputer.classList.add('content');
    contentComputer.textContent = `The computer chose: ${computerChoice}`;
    const containerComputer = document.querySelector('#containerComputer');
    containerComputer.appendChild(contentComputer);
}

function logRoundResult(result) {
    const contentResult = document.createElement('div');
    contentResult.classList.add('content');
    if (result === "Won") {
        contentResult.textContent = "You Win this round!";
    } else {
        contentResult.textContent = "You Lose this round!";
    };
    const containerPlayer = document.querySelector('#containerResult');
    containerPlayer.appendChild(contentResult);
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        const contentResult = document.createElement('div');
        contentResult.classList.add('content');
        contentResult.textContent = "Ooops, it's a tie... Try again! (This round doesn't count)";
        const containerResult = document.querySelector('#containerResult');
        containerResult.appendChild(contentResult);
        }
        else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            let resultContest = "Won";
            logRoundResult(resultContest);
        } else {
            let resultContest = "Lost";
            logRoundResult(resultContest);
        }
        }
        else if (playerSelection === "Paper") {
            if (computerSelection === "Scissors") {
                let resultContest = "Lost";
                logRoundResult(resultContest);
            } else {
                let resultContest = "Won";
                logRoundResult(resultContest);
            }
            }
            else if (playerSelection === "Scissors") {
                if (computerSelection === "Rock") {
                    let resultContest = "Lost";
                    logRoundResult(resultContest);
                } else {
                    let resultContest = "Won";
                    logRoundResult(resultContest);
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