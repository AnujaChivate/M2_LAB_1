// Phase 1
// User makes a choice. How will we collect the user’s choice?
// STEPS 1, 2, 3, 4, 5, 6
function getUserChoice() {
    var userChoice = window.prompt("Select your choice (rock/ scissors/ paper)");

    if(
        userChoice.toLowerCase() === "rock" ||
        userChoice.toLowerCase() === "scissors" ||
        userChoice.toLowerCase() === "paper")
    {
        return userChoice;
    } else {
       window.alert("Invalid Input!");
       return;
    }
}

// Phase 2
// Computer makes a choice. How will we collect the computer’s choice?
function getComputerChoice() {
    var computerChoice =  Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    };
}

// Phase 3
// A conditional that determines who wins
function gameWinner() {
    var computerChoice = getComputerChoice();
    var userChoice = getUserChoice();
         
    if(userChoice === computerChoice) {
        alert("Game is a tie.");
        return;
    }
    else if(userChoice === "rock") {
        if(computerChoice === "scissors") {
            alert("You won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice + ".");
        }
        else if(computerChoice === "paper") {
            alert("Computer won!"  + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice + ".");
        }              
    }
    else if(userChoice === "scissors") {
        if(computerChoice === "paper") {
            alert("You won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice + ".");
        }
        else if(computerChoice === "rock") {
            alert("Computer won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice + ".");
        }
    }
    else if(userChoice === "paper") {
        if(computerChoice === "rock") {
            alert("You won!" + " your choice is: " + userChoice + "  & Computer Choice is: " + computerChoice + ".");
        }
        else if(computerChoice === "scissors") {
            alert("Computer won!" + " your choice is: " + userChoice + " & Computer Choice is: " + computerChoice + ".");
        }              
    }
}

// start playing and continue the game if user selects Okay.
function playRockPaperScissor()
{
    do {
        gameWinner();
        var playAgain = window.confirm("Play Again?") ;
    } while(playAgain);
}

playRockPaperScissor();