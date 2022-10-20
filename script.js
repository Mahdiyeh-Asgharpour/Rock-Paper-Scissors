while (true) {
    var player2 = (Math.random() * 3);
    var p1 = 0;
    var p2 = 0;
    rock() {
        if ((number(player2)) <= 1) {
            player2 = 'rock';

        } else if ((number(player2)) <= 2) {
            player2 = 'paper';
            p2++;

        } else if ((number(player2)) <= 3) {
            player2 = 'scissors';
            p1++;

        }
        alert("You :" + String(p1) + "Robot : " + String(p2));


    }
    paper() {
        if ((number(player2)) <= 1) {
            player2 = 'rock';
            p1++;

        } else if ((number(player2)) <= 2) {
            player2 = 'paper';

        } else if ((number(player2)) <= 3) {
            player2 = 'scissors';
            p2++;

        }
        alert("You :" + String(p1) + "Robot : " + String(p2));


    }
    scissors() {
        if ((number(player2)) <= 1) {
            player2 = 'rock';
            p2++;

        } else if ((number(player2)) <= 2) {
            player2 = 'paper';
            p1++;

        } else if ((number(player2)) <= 3) {
            player2 = 'scissors';

        }
        alert("You :" + String(p1) + "Robot : " + String(p2));


    }
    if (p1 == 3 || p2 == 3) {
        if (p1 == 3 && p2 == 3) {
            alert('Tie');
            break;
        } else if (p1 == 3 && p2 != 3) {
            alert('Win');
            break;
        } else if (p2 == 3 && p1 != 3) {


            alert('Lose');
            break;
        }

    }

}
