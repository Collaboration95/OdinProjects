let defaultColor = "black";
let defaultMode = "none";
let currentMode = defaultMode;
let memory = 0;
let memoryArray  = []

let buttons = document.querySelectorAll(".buttons")
buttons.forEach(element => {element.addEventListener('click',buttonClick)})
let slider = document.querySelector("#slider")
slider.addEventListener('change',printSlider)
let parentGrid  = document.querySelector("#displaycomponent")

setUpGrid(slider.value)

function setUpGrid(side,previousLife= []){
    parentGrid.innerHTML ='';
    parentGrid.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
    parentGrid.style.gridTemplateRows = `repeat(${side}, 1fr)`;
    if(previousLife){
        previousLife = previousLife.map(element=>{return parseInt(element)});
        console.log(previousLife)
        for (let i = 0; i < side * side; i++) {
            const block= document.createElement('div');
            block.setAttribute("id",i)
            if (previousLife.indexOf(i)!=-1){
                console.log(i)
                block. classList.add("on")
            }
            block.addEventListener('mouseover',changeColor);
            block.addEventListener('touchstart',changeColor)
            block.addEventListener('mousedown',changeColor);
            parentGrid.appendChild(block);
          }
    }
    else{
        for (let i = 0; i < side * side; i++) {
            const block= document.createElement('div');
            block.setAttribute("id",i)
            block.addEventListener('mouseover',changeColor);
            block.addEventListener('touchstart',changeColor)
            block.addEventListener('mousedown',changeColor);
            parentGrid.appendChild(block);
          }
    }
}

function changeColor(e){
    if(currentMode=='draw'){e.target.style.backgroundColor = defaultColor; e.target.classList.add("on")}
    else if(currentMode=='erase'){e.target.style.removeProperty('background-color'); e.target.classList.remove("on")}
}

function printSlider(){
    console.log(`${slider.value} is the slider value`)
    setUpGrid(slider.value)
}

function buttonClick(e){
    let clickedButton = document.querySelector(`#${e.target.id}`);
    if(clickedButton.classList.contains('selected')){
        console.log(`${clickedButton.id} alreadySelected`)
        currentMode = defaultMode;
        clearButtons()
    }
    else{
        clearButtons()
        clickedButton.classList.add('selected')   
        currentMode = `${clickedButton.id}`
        console.log(currentMode)
    }

    console.log(`${clickedButton.id} is the current button being pressed`)
    
    if(e.target.id =="clear") {clear()}
    else if(e.target.id=="save" && e.target.textContent=="Save")
    {
        printInner()
        e.target.textContent="Revert";
    }
    else if(e.target.id=="save" && e.target.textContent=="Revert")
    {
        console.log(memoryArray);
        setUpGrid(memory,memoryArray);
        memoryArray= [];
        memory = 0;
        e.target.textContent="Save";
    }
}

function clear(){
    setUpGrid(slider.value)
}

const clearButtons = () =>{ buttons.forEach(element=>{element.classList.remove('selected')})}

function printInner (){
    let childElements = document.querySelectorAll("#displaycomponent div")
    memory = Math.sqrt(childElements.length)
    childElements.forEach(element=>{
        if(element.classList.contains("on"))
        {memoryArray.push(element.id)};
    })
}