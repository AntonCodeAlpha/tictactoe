let written;
let isPlayer1OnMove = true;
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;
let button9;
let end = false;
let win = false;
function draw(ButtonId){
    if (!end) {if(document.getElementById(ButtonId).innerHTML == "") written = false;
    else written = true;
    if(!written && isPlayer1OnMove) document.getElementById(ButtonId).innerHTML = "X";
    if(!written && !isPlayer1OnMove) document.getElementById(ButtonId).innerHTML = "O";
    isPlayer1OnMove = !isPlayer1OnMove
    checkWin();}
}
function checkWin(){
    button1 = document.getElementById("button1").innerHTML
    button2 = document.getElementById("button2").innerHTML
    button3 = document.getElementById("button3").innerHTML
    button4 = document.getElementById("button4").innerHTML
    button5 = document.getElementById("button5").innerHTML
    button6 = document.getElementById("button6").innerHTML
    button7 = document.getElementById("button7").innerHTML
    button8 = document.getElementById("button8").innerHTML
    button9 = document.getElementById("button9").innerHTML
    if((button1 == "X" && button2 == "X" && button3 == "X") || (button4 == "X" && button5 == "X" && button6 == "X") || (button7 == "X" && button8 == "X" && button9 == "X")) {document.getElementById("win").innerHTML = "Spieler X hat gewonnen"; end = true; win = true};
    if((button1 == "X" && button4 == "X" && button7 == "X") || (button2 == "X" && button5 == "X" && button8 == "X") || (button3 == "X" && button6 == "X" && button9 == "X")) {document.getElementById("win").innerHTML = "Spieler X hat gewonnen"; end = true; win = true};
    if((button1 == "X" && button5 == "X" && button9 == "X") || (button3 == "X" && button5 == "X" && button7 == "X")) {document.getElementById("win").innerHTML = "Spieler X hat gewonnen"; end = true; win = true};
    if((button1 == "O" && button2 == "O" && button3 == "O") || (button4 == "O" && button5 == "O" && button6 == "O") || (button7 == "O" && button8 == "O" && button9 == "O")) {document.getElementById("win").innerHTML = "Spieler O hat gewonnen"; end = true; win = true};
    if((button1 == "O" && button4 == "O" && button7 == "O") || (button2 == "O" && button5 == "O" && button8 == "O") || (button3 == "O" && button6 == "O" && button9 == "O")) {document.getElementById("win").innerHTML = "Spieler O hat gewonnen"; end = true; win = true};
    if((button1 == "O" && button5 == "O" && button9 == "O") || (button3 == "O" && button5 == "O" && button7 == "O")) {document.getElementById("win").innerHTML = "Spieler O hat gewonnen"; end = true; win = true};
    if(button1 != "" && button2 != "" && button3 != "" && button4 != "" && button5 != "" && button6 != "" && button7 != "" && button8 != "" && button9 != "" && !win) {document.getElementById("win").innerHTML = "Unentschieden"; end = true; win = true}
}