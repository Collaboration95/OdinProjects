let defaultColor = "black";
let defaultMode = "none";
let currentMode = defaultMode;
let memory = '';

let buttons = document.querySelectorAll(".buttons")
buttons.forEach(element => {element.addEventListener('click',buttonClick)})
let slider = document.querySelector("#slider")
slider.addEventListener('change',printSlider)
let parentGrid  = document.querySelector("#displaycomponent")

setUpGrid(slider.value)

function setUpGrid(side){
    parentGrid.innerHTML ='';
    parentGrid.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
    parentGrid.style.gridTemplateRows = `repeat(${side}, 1fr)`;
  
    for (let i = 0; i < side * side; i++) {
        const block= document.createElement('div');
        block.addEventListener('mouseover',changeColor);
        block.addEventListener('mousedown',changeColor);
        parentGrid.appendChild(block);
      }
}

function changeColor(e){
    if(currentMode=='draw'){e.target.style.backgroundColor = defaultColor;}
    else if(currentMode=='erase'){e.target.style.removeProperty('background-color')}
}

function printSlider(sliderValue = slider.target.value){
    console.log(`${slider.value} is the slider value`)
    setUpGrid(sliderValue)
}

// function buttonClick(e){
//     let clickedButton = document.querySelector(`#${e.target.id}`);

//     if(clickedButton.classList.contains('selected')){
//         currentMode = defaultMode;
//         console.log("background is black")
//         clearButtons()
//     }
//     else{
//         clearButtons()
//         clickedButton.classList.add('selected')    
//         currentMode = `${clickedButton.id}`;
//     }
//     console.log(`${clickedButton.id} is the current button being pressed`)
//     if(e.target.id =="clear" ){
//         clear()
//     }
//     else if(e.target.id=='save' && e.target.textContent=="Save"){
//         save()
//         e.target.textContent="Revert"
//     }
//     else if(e.target.id='save' && e.target.textContent=="Revert"){
//         printSlider(memoryslider)
//         e.target.textContent="Save"
//     }
// }
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
    // else if(e.target.id=='save' && e.target.textContent=="Save")
    //     {
    //     save()
    //     e.target.textContent="Revert"
    //     }
    // else if(e.target.id='save' && e.target.textContent=="Revert"){
    //     printSlider(memoryslider)
    //     e.target.textContent="Save"
    //     }
    
}

function save(){
    memoryslider = slider.value;

}
function clear(){
    // slider.value = 50;
    setUpGrid(slider.value)
}

const clearButtons = () =>{ buttons.forEach(element=>{element.classList.remove('selected')})}
