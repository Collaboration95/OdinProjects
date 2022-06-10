const Options = document.querySelectorAll("#humanOptions div");

Options.forEach(element=>{element.addEventListener('click',passHumanOption)})
let infoArray = [5,0,0]

const resetButton = document.querySelector("div #reset")
resetButton.addEventListener('dblclick',resetProgress)

function onePlay(userOption ,computerOption){
    let computerOptions = ['rock','paper','scissors','rock']
    let userInput = userOption, computerChoice = computerOption
    if(userInput==computerChoice){

        updateScore(null);
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
    Options.forEach(element=>{element.addEventListener('click',passHumanOption)})
    document.querySelector("#PlayerScores").textContent = 0;
    document.querySelector("#ComputerScores").textContent = 0;
    document.querySelector("#ResultScores").textContent = (document.querySelector("#ResultScores").textContent).replace("this","last")

    resetInfo();
}

function updateScore(gameOutcome){
    if(typeof(gameOutcome)==null){
        console.log("It was a tie")

    }
    else{
        if(gameOutcome){
            console.log("User Won")
            infoArray[1]++;

        }
        else{
            console.log("Computer Won")
            infoArray[2]++;
        }

    }
    updateGeneral(infoArray)
    infoArray[0]--;
    console.log(`You have turns ${infoArray[0]} left`)
    if(infoArray[0]==0){
        if(infoArray.indexOf(Math.max(infoArray[1],infoArray[2]))==1){
            document.querySelector("#ResultScores").textContent = "User Won this series !"
        }
        else{document.querySelector("#ResultScores").textContent = "Computer Won this series !"}
        Options.forEach(element=>{element.removeEventListener('click',passHumanOption)})

        printSummary(infoArray);
        resetInfo();
    }
}
const resetInfo = () =>{infoArray =[5,0,0]}


function printSummary(userInfo){
    console.log("The following is a game summary")
    console.log(`The computer won ${userInfo[2]} games , the user won ${userInfo[1]} games, ${5-userInfo[1]-userInfo[2]} games were tied`)
}

function passHumanOption(event){
    console.log(event.target.id)

    onePlay(event.target.id,simulateComputerChoice())
}

function simulateComputerChoice(){
    let computerOptions = ['rock','paper','scissors','rock']   
    return computerOptions[Math.floor(Math.random()*3)]
}


function updateGeneral(infoArray){
    document.querySelector("#PlayerScores").textContent = infoArray[1]
    document.querySelector("#ComputerScores").textContent = infoArray[2]
}

document.querySelector("#overlayButton").addEventListener('click',clearOverlay)
function clearOverlay(){
    document.querySelector("#overlay").remove("overlay")
}
document.querySelector("#overlayButton").addEventListener('click',addOverlay)

