let defaultColor = "black";
let defaultMode = "none";
let buttons = document.querySelectorAll(".buttons")
buttons.forEach(element => {element.addEventListener('click',buttonClick)})
let slider = document.querySelector("#slider")
slider.addEventListener('change',printSlider)
let parentGrid  = document.querySelector("#displaycomponent")
let memory = '';
setUpGrid(50)

function setUpGrid(side){
    parentGrid.innerHTML =''
    parentGrid.style.gridTemplateColumns = `repeat(${side}, 1fr)`
    parentGrid.style.gridTemplateRows = `repeat(${side}, 1fr)`
  
    for (let i = 0; i < side * side; i++) {
        const block= document.createElement('div')
        block.addEventListener('mouseover',changeColor);
        parentGrid.appendChild(block)
      }
}

function changeColor(e){
    if(defaultMode=='draw'){e.target.style.backgroundColor = defaultColor;}
    else if(defaultMode=='erase'){e.target.style.removeProperty('background-color')}
}

function printSlider(sliderValue = slider.target.value){
    console.log(`${slider.value} is the slider value`)
    setUpGrid(sliderValue)
}

function buttonClick(e){
    let clickedButton = document.querySelector(`#${e.target.id}`);
    if(clickedButton.classList.contains('selected')){
        clearButtons()
        defaultMode = "none";
    }
    else{
        clearButtons()
        clickedButton.classList.add('selected')    
        defaultMode = `${e.target.id}`;
    }
    console.log(`${e.target.id} is the current button being pressed`)
    if(e.target.id =="clear" ){
        clear()
    }
    else if(e.target.id=='save' && e.target.textContent=="Save"){
        save()
        e.target.textContent="Revert"
    }
    else if(e.target.id='save' && e.target.textContent=="Revert"){
        printSlider(memoryslider)
        e.target.textContent="Save"
    }
}

function save(){
    memoryslider = slider.value;

}
function clear(){
    // slider.value = 50;
    setUpGrid(slider.value)
}

const clearButtons = () =>{ buttons.forEach(element=>{element.classList.remove('selected')})}
