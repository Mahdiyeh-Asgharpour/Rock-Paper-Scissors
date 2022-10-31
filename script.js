let p1 = 0;
let p2 = 0;
var number = prompt('How many times do you want to play?');
Number = Number(number);


function getRobotPick() {
    const randomNumber = Math.random() * Number;
    if (randomNumber <= (Number / 3)) {
        return "rock";
    } else if (randomNumber <= ((2 * Number) / 3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function checkRoundWinner(yourPick, robotPick) {
    if (yourPick == robotPick) {
        return;
    } else if (yourPick == "rock" && robotPick == "scissors") {
        p1++;
        return;
    } else if (yourPick == "paper" && robotPick == "rock") {
        p1++;
        return;
    } else if (yourPick == "scissors" && robotPick == "paper") {
        p1++;
        return;
    } else {
        p2++;
        return;
    }
}

function alertPicksAndScore(yourPick, robotPick) {
    let str = `You picked ${yourPick} - Robot picked ${robotPick}
You: ${p1} Robot: ${p2}
  `;
    document.getElementById('alert').innerText = str;
}

function endGame() {
    if (p1 == Number || p2 == Number) {
        if (p1 == Number && p2 == Number) {
            document.getElementById('endgame').innerText = "Tie";
        } else if (p1 == Number && p2 != Number) {
            document.getElementById('endgame').innerText = "Win";
        } else if (p2 == Number && p1 != Number) {
            document.getElementById('endgame').innerText = "Lose";
        }

        p1 = 0;
        p2 = 0;
        // const h1 = document.querySelector("h1");
        // const textnode = h1.nextSibling;
        // textnode.remove();
        window.setTimeout(location.reload(), 10000);


    }


}

function gameLoop(userPick) {
    const robotPick = getRobotPick();
    checkRoundWinner(userPick, robotPick);
    alertPicksAndScore(userPick, robotPick);
    endGame();
}
