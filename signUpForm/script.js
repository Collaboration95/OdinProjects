let components = document.querySelectorAll('.component');
components.forEach(element => {element.addEventListener('focusout',inputField)});

let submitButton = document.querySelector(".button")
submitButton.addEventListener('click',submitForm)

let password = document.querySelector("input[name='Password']")
let Confirm = document.querySelector("input[name='ConfirmPassword']")
Confirm.addEventListener('focusout',checkPassword)


let labels = document.querySelectorAll('label');
labels.forEach(element=>{element.classList.add('responsive');})

function inputField(e){
    let label = e.target.previousElementSibling;
    if(e.target.value!=""){
        label.classList.remove('responsive')
        label.classList.add('defaultlabel')
    }
    else{
        label.classList.remove('defaultlabel')
        label.classList.add('responsive')
    }
    if(e.target.name=="Email" && e.target.value!==""){
        if(!e.target.checkValidity()){
            console.log("Not True")
            e.target.classList.add('invalid')
        }
        else{
            e.target.classList.remove('invalid')
        }
    }
}

function checkPassword(e){
    if(e.target.value!=""){
        if(e.target.value!=password.value){
            e.target.setCustomValidity("Passwords Do not Match")
            password.setCustomValidity("Passwords Do Not Match")
        }
    }
}
function submitForm(){}