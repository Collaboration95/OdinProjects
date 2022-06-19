let body = document.querySelector("body")
body.addEventListener('keydown',captureKeys)
let history = document.querySelector("#history")
let result = document.querySelector("#result")
let alertMessage = document.querySelector("#alert")
let calculated = 0;
let first  = 1;


function captureKeys(e){
    let a = document.querySelector(`div[value="${e.key}"]`)
    if(a){
        a.classList.toggle('toggleButton');
        setTimeout(()=>{a.classList.toggle('toggleButton')},100)
        a.click();
    }
    else
    {
        if(e.key=="Enter"){
            // firstClick(first)
            document.querySelector(".equal").click();
        }
        else if(e.keyCode == 8){
            // firstClick(first)
            document.querySelector('div[value="C"]').click();
        }
    }
}

let memoryArray = []
let buttons = document.querySelectorAll(".button")
buttons.forEach(element=>{element.addEventListener('click',handleClick);memoryArray.push(element.textContent)})

function handleClick(e){
    exit();
    let clickedButton  = e.target.textContent;
    if(memoryArray.indexOf(clickedButton)!==-1){
        if(/^[0-9]$/.test(clickedButton)){
            console.log(`variable is ${clickedButton}`)
            if(history.textContent.length>10){alert("Please Clear the console")}
            else{history.textContent +=`${clickedButton}`}
        }
        else if(/^[C]$/.test(clickedButton)){
            console.log(`${clickedButton} is being pressed`)
            history.textContent = history.textContent.substr(0,history.textContent.length-1)
        }
        else if((/^[A]$/.test(clickedButton)) || clickedButton=="AC"){
            history.textContent = "";
        }
        else if(/^[-=./x%+]$/.test(clickedButton)){
            handleSpecial(clickedButton)
        }
        console.log(`handle click function ${clickedButton}`)
    }
}

function handleSpecial(clickedButton){
    if(clickedButton!="="){
        if(/[-=./x%+]/.test(history.textContent)){
            if(calculated){
                if(result.textContent.length==0){
                    alert("Only one operation allowed")   
                }
                else{
                    history.textContent = result.textContent+`${clickedButton}`;
                }
            }
            else{
                alert("Only one operation allowed")
            }

        }
        else if(history.textContent.length==0){
                if(result.textContent.length==0){
                    alert("Please Enter Content")
                    }
                else{
                    if(/^\d+$/.test(result.textContent)){
                    history.textContent = result.textContent+`${clickedButton}`}
                    else{alert("Please check operation")}
                    }
                }
        else{history.textContent+=`${clickedButton}`}   
    }
    else if(clickedButton==".")
    {
        console.log("functionality not added yet")
    }
    else{
        let numbers  =history.textContent.match(/\d+/g)
        let operand = history.textContent.match(/[-=./x%+]/)
        if(numbers && operand && numbers.length==2){
        numbers = numbers.map(element =>{return parseInt(element)})
        console.log(numbers)
        console.log(operand[0])
        handleOperations(numbers,operand[0])}
        else{
            alert("Please check")
        }
    }
}
function handleOperations(numbers,operation){
    if(operation=="/" && numbers[1]==0){
        alert("The Calculator which lived")
    }
    else {
        switch(operation){
            case "+":
                console.log("Addition")
                result.textContent = numbers[0]+numbers[1];
                break;
            case "-":
                result.textContent = numbers[0]-numbers[1];
                break;
            case "/":
                result.textContent = Math.round(numbers[0]/numbers[1])
                break;
            case "x":
                result.textContent = numbers[0]*numbers[1];
                break;
            default:
                console.log("Default case")
                console.log(operation)
        }
        calculated = 1
    }
}

function alertContent(Content){
    console.log(Content)
    alertMessage.textContent= Content;
    alertMessage.classList.remove('disappear');
    alertMessage.style.opacity =1;
    body.addEventListener('click',()=>{alertMessage.classList.add('disappear');})  
}