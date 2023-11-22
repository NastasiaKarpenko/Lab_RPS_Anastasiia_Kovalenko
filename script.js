let userName;
let compOption;
let userWins = 0;
let roundsPlayed = 0;


function play(){
    if (roundsPlayed < 3) {

    userName=document.getElementById("userName").value;
    let messageWin="Congratulation "+userName+", you won!";
    let messageLose=userName+", you lose";
    let messageDraw="It's a draw";

    
    let userChoice=document.getElementById("userChoice").value.toLowerCase();
    let compChoice=(Math.floor(Math.random() * 10))%3+1;

    if (compChoice==1){
        compOption="Rock";
    }
    else if(compChoice==2){
        compOption="Paper";
    }
    else{
        compOption="Scissors";
    }


    if (userChoice=="rock"){
        if (compChoice==1){
            document.getElementById("gameResult").innerHTML=messageDraw;
        }
        else if(compChoice==2){
            document.getElementById("gameResult").innerHTML=messageLose;
        }
        else{
            document.getElementById("gameResult").innerHTML=messageWin;
            userWins++;
        }

    }
    else if (userChoice=="paper"){
        if (compChoice==1){
            document.getElementById("gameResult").innerHTML=messageWin;
            userWins++;
        }
        else if(compChoice==2){
            document.getElementById("gameResult").innerHTML=messageDraw;
        }
        else{
            document.getElementById("gameResult").innerHTML=messageLose;
        }

    }
    else if (userChoice=="scissors"){
        if (compChoice==1){
            document.getElementById("gameResult").innerHTML=messageLose;
        }
        else if(compChoice==2){
            document.getElementById("gameResult").innerHTML=messageWin;
            userWins++;
        }
        else{
            document.getElementById("gameResult").innerHTML=messageDraw;
        }

    }
    else{
        alert("Invalid input. Try again");
        return;
    }
    roundsPlayed++;
    
        document.getElementById("compChoice").innerHTML = "Computer choose: " + compOption;
        document.getElementById("roundsPlayed").innerHTML = "Rounds Played: " + roundsPlayed;
        document.getElementById("userWins").innerHTML = userName+" wins: " + userWins;

    } 
    
    else {
        alert("You've already played 3 rounds. The game is over.");
    }
}

