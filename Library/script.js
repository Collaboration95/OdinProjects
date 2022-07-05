let rotate = document.querySelectorAll(".icon2, .icon");
rotate.forEach(element=>{element.addEventListener('click',rotateCard)})

function rotateCard(e){
    e.path[2].classList.toggle("rotateClass")
    e.preventDefault()
}
