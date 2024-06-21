player1 = "";
player2 = "";
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];


numbers.forEach(number => {
    document.getElementById(number).style.backgroundColor = "white";
    
});



function check() {
    if (
        one.style.backgroundColor == "green" && two.style.backgroundColor == "green" && three.style.backgroundColor == "green" ||
        one.style.backgroundColor == "green" && five.style.backgroundColor == "green" && nine.style.backgroundColor == "green" ||
        one.style.backgroundColor == "green" && four.style.backgroundColor == "green" && seven.style.backgroundColor == "green" ||
        two.style.backgroundColor == "green" && five.style.backgroundColor == "green" && eight.style.backgroundColor == "green" ||
        three.style.backgroundColor == "green" && six.style.backgroundColor == "green" && nine.style.backgroundColor == "green" ||
        three.style.backgroundColor == "green" && five.style.backgroundColor == "green" && seven.style.backgroundColor == "green" ||
        four.style.backgroundColor == "green" && five.style.backgroundColor == "green" && six.style.backgroundColor == "green" ||
        seven.style.backgroundColor == "green" && eight.style.backgroundColor == "green" && nine.style.backgroundColor == "green"
    ) {
        document.getElementById("winner").innerHTML = "Player 1 wins";
        player1 = "won";
    };
    if (one.style.backgroundColor == "red" && two.style.backgroundColor == "red" && three.style.backgroundColor == "red" ||
        one.style.backgroundColor == "red" && five.style.backgroundColor == "red" && nine.style.backgroundColor == "red" ||
        one.style.backgroundColor == "red" && four.style.backgroundColor == "red" && seven.style.backgroundColor == "red" ||
        two.style.backgroundColor == "red" && five.style.backgroundColor == "red" && eight.style.backgroundColor == "red" ||
        three.style.backgroundColor == "red" && six.style.backgroundColor == "red" && nine.style.backgroundColor == "red" ||
        three.style.backgroundColor == "red" && five.style.backgroundColor == "red" && seven.style.backgroundColor == "red" ||
        four.style.backgroundColor == "red" && five.style.backgroundColor == "red" && six.style.backgroundColor == "red" ||
        seven.style.backgroundColor == "red" && eight.style.backgroundColor == "red" && nine.style.backgroundColor == "red"
    ) {
        document.getElementById("winner").innerHTML = "Player 2 wins";
        player2 = "won";
    };
}




function test(id) {
    idwaarde = id;
    console.log('>>>', document.getElementById(idwaarde).classList)
    if (player1 == "won" || player2 == "won") {
        return;
    }
    if (player1 > player2) {
        if (document.getElementById(idwaarde).style.backgroundColor == "white") {
            console.log()
            document.getElementById(idwaarde).style.backgroundColor = "red";
            player2++;
    document.getElementById("winner").innerHTML = "player 1 kies";

            
        }
    } else {
        if (document.getElementById(idwaarde).style.backgroundColor == "white") {
            document.getElementById(idwaarde).style.backgroundColor = "green";
            player1++;
            document.getElementById("winner").innerHTML = "player 2 kies";

        }
    }

    check();
}

function reset() {
    numbers.forEach(number => {
        document.getElementById(number).style.backgroundColor = "white";
        
    });
    player1 = 0;
    player2 = 0;
    document.getElementById("winner").innerHTML = "player 1 start";

}

