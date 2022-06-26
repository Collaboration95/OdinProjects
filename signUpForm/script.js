let components = document.querySelectorAll('.component');
components.forEach(element => {element.addEventListener('focusout',inputField)});

let labels = document.querySelectorAll('label');
labels.forEach(element=>{element.classList.add('responsive')})
function inputField(e){
    console.log(e)
    if(e.target.value!=""){
        e.target.classList.remove('responsive')
        e.target.classList.add('defaultlabel')
    }
}

