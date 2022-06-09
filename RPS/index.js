function startGame(totalPlays){
    console.log(`Okay lets play the game ${totalPlays} times`)
    let i = totalPlays;
    let FinalUser = 0, tiedGames = 0; 

    while(i>0){
        var didUserWin = onePlay();
        if(typeof(didUserWin)==null){
            console.log("It was a tie")
            tiedGames++;
        }
        else{
            if(didUserWin){
                FinalUser++;
            }

        }
        i--;
    }
    console.log("Summary of the game :")
    console.log(`Total Matches Played: ${totalPlays}`)
    console.log(`The user won ${FinalUser} times`)
    console.log(`The Computer Won ${totalPlays-tiedGames-FinalUser} times`)
}
function onePlay(ButtonInput){
    let userInput = prompt("Enter Rock , Paper , scissors").toLowerCase()
    let computerOptions = ['rock','paper','scissors','rock']
    let computerChoice = computerOptions[Math.floor(Math.random()*3)]
    console.log(`The user plays ${userInput}`)
    console.log(`The computer plays ${computerChoice}`)
    if(userInput==computerChoice){
        console.log("Its a tie")
        return null;
    }
    else if(computerOptions.indexOf(userInput)-1==computerOptions.indexOf(computerChoice)){
        console.log("User Wins")
        return 1;
    }
    else {
        console.log("Computer Wins")
        return 0;}
}

// startGame(prompt("How many times do you want to play this game ?"))

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener('click',onePlay(rock))

