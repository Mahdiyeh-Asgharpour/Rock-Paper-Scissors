let p1 = 0;
let p2 = 0;

function getRobotPick() {
    const randomNumber = Math.random() * 3;
    if (randomNumber <= 1) {
        return "rock";
    } else if (randomNumber <= 2) {
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
    if (p1 == 3 || p2 == 3) {
        if (p1 == 3 && p2 == 3) {
            document.getElementById('endgame').innerText = "Tie";
        } else if (p1 == 3 && p2 != 3) {
            document.getElementById('endgame').innerText = "Win";
        } else if (p2 == 3 && p1 != 3) {
            document.getElementById('endgame').innerText = "Lose";
        }
        p1 = 0;
        p2 = 0;

    }
}

function gameLoop(userPick) {
    const robotPick = getRobotPick();
    checkRoundWinner(userPick, robotPick);
    alertPicksAndScore(userPick, robotPick);
    endGame();
}
