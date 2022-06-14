const Options = document.querySelectorAll(".options");
Options.forEach(element=>{element.addEventListener('click',passHumanOption)})
let roundNames = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"]
let roundVariable  = 0;
let infoArray = [5,0,0,0]

const resetButton = document.querySelector("#bigredbutton")
resetButton.addEventListener('dblclick',resetProgress)

function onePlay(userOption ,computerOption){
    let computerOptions = ['rock','paper','scissors','rock']
    let userInput = userOption, computerChoice = computerOption
    if(userInput==computerChoice){
        updateScore(null);
    }
    else if(userInput=="rock" && computerChoice =="scissors"){
        updateScore(1);
    }
    else if(userInput=="scissors" && computerChoice=="rock"){
        updateScore(0)
    }
    else if(computerOptions.indexOf(userInput)-1==computerOptions.indexOf(computerChoice)){
        updateScore(1);
    }
    else {
 
        updateScore(0);
    }
}

// startGame(prompt("How many times do you want to play this game ?"))
function resetProgress(){
    console.log("progress has been reset")
    document.querySelector("#round").textContent  = "Round One"
    Options.forEach(element=>{element.addEventListener('click',passHumanOption)})
    document.querySelector("#PlayerScores").textContent = 0;
    document.querySelector("#ComputerScores").textContent = 0;
    roundVariable =1 ;
    let resultString = ""
    if(infoArray.indexOf(Math.max(infoArray[1],infoArray[2]))==1){
        resultString = "user Wins"
    }
    else{
        resultString = "Computer Wins"
    }
    document.querySelector("#ResultDisplay").textContent = resultString
    resetInfo();
}

function updateScore(gameOutcome){
    let currentWinner = null;
    console.log(`GameOutcome is ${gameOutcome}`)
    if(gameOutcome===null){
        console.log("It was a tie")
        infoArray[0]++;
        infoArray[3]++;
    }
    else{
        if(gameOutcome){
            currentWinner="User"
            console.log("User Wins")
            infoArray[1]++;

        }
        else{
            currentWinner="Computer"
            console.log("Computer Wins")
            infoArray[2]++;
        }

    }
    updateGeneral(infoArray,currentWinner)

    console.log(`You have turns ${infoArray[0]} left`)
    if(infoArray[0]==0){
        document.querySelector("#round").textContent= "Game Over "
        if(infoArray.indexOf(Math.max(infoArray[1],infoArray[2]))==1){
            document.querySelector("#ResultDisplay").textContent = "User Wins Game!"
        }
        else{document.querySelector("#ResultDisplay").textContent = "Computer Wins Game!"}
        Options.forEach(element=>{element.removeEventListener('click',passHumanOption)})
    

        printSummary(infoArray);
        resetInfo();
    }
}
const resetInfo = () =>{infoArray =[5,0,0,0]}


function printSummary(userInfo){
    console.log("The following is a game summary")
    console.log(`The computer won ${userInfo[2]} games , the user won ${userInfo[1]} games, ${userInfo[3]} games were tied`)
}

function passHumanOption(event){
    console.log(event.target.textContent)

    onePlay((event.target.textContent).toLowerCase(),simulateComputerChoice())
}

function simulateComputerChoice(){
    let computerOptions = ['rock','paper','scissors','rock']    
    let a = computerOptions[Math.floor(Math.random()*3)]
    console.log(`Computer Chooses ${a}`)
    return a
}

function updateGeneral(infoArray,winner){
    document.querySelector("#PlayerScores").textContent = infoArray[1]
    document.querySelector("#ComputerScores").textContent = infoArray[2]

    document.querySelector("#round").textContent = `Round ${roundNames[roundVariable]}`

    roundVariable++;
    let resultString = "";
    if(winner!==null){resultString =  `${winner} Wins`}
    else{resultString = `It was a tie`}
    document.querySelector("#ResultDisplay").textContent = resultString;
    infoArray[0]--;
}

// document.querySelector("#overlayButton").addEventListener('click',clearOverlay)
// function clearOverlay(){
//     document.querySelector("#overlay").remove("overlay")
// }
// document.querySelector("#overlayButton").addEventListener('click',addOverlay)

