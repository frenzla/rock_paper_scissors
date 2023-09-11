//My javascript file



function getRandomInt(min = 1 , max = 3) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

let randomInt = getRandomInt();
console.log(randomInt);

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

let computerChoice = getComputerChoice(randomInt);

console.log(computerChoice);