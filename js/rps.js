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

let playerScore = 0;
let computerScore = 0;
let highestScore = 0;

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', play));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('selected');
  }

function play (e) {
        
        const buttonPressed = document.querySelector(`#${this.id}`)
        buttonPressed.classList.add('selected');
        const btns = Array.from(document.querySelectorAll('.btn'));
        btns.forEach(btn => btn.addEventListener('transitionend', removeTransition));

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
        showScore();
//      console.log("SCORE - You: " + playerScore + " Computer: " + computerScore + "\n --------------------------");
            
        highestScore = getHighestScore();
        console.log(highestScore);

        // Final result
        if (highestScore === 5) {    
        giveFinalResult();
        };
}

function showScore () {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `SCORE - You: ${playerScore} Computer: ${computerScore}`;
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
        contentResult.textContent = "It's a tie (this round doesn't count)";
        const containerResult = document.querySelector('#containerResult');
        containerResult.appendChild(contentResult);
        }
        else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            let resultContest = "Won";
            logRoundResult(resultContest);
            return resultContest;
        } else {
            let resultContest = "Lost";
            logRoundResult(resultContest);
            return resultContest;
        }
        }
        else if (playerSelection === "Paper") {
            if (computerSelection === "Scissors") {
                let resultContest = "Lost";
                logRoundResult(resultContest);
                return resultContest;
            } else {
                let resultContest = "Won";
                logRoundResult(resultContest);
                return resultContest;
            }
            }
            else if (playerSelection === "Scissors") {
                if (computerSelection === "Rock") {
                    let resultContest = "Lost";
                    logRoundResult(resultContest);
                    return resultContest;
                } else {
                    let resultContest = "Won";
                    logRoundResult(resultContest);
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
        const computerWon = document.createElement('div');
        computerWon.classList.add('finalScore');
        computerWon.textContent = "Ouch! You've been beaten! 😭";
        const containerFinalScore = document.body;
        containerFinalScore.appendChild(computerWon);
    } else {
        const computerWon = document.createElement('div');
        computerWon.classList.add('finalScore');
        computerWon.textContent = "Well done! You won! 👏";
        const containerFinalScore = document.body;
        containerFinalScore.appendChild(computerWon);
    }
    const buttonsToRemove = document.querySelector('.buttons');
    const bodyParent = document.body;
    bodyParent.removeChild(buttonsToRemove);
}