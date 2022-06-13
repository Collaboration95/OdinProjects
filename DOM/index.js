let element = document.querySelector("body")
function addP(Text){
    const variable = document.createElement("p")
    variable.textContent = Text;
    variable.style.color = "red";
    return variable

}

function blueheader(type, Text1){
    const variable = document.createElement(type);
    variable.textContent = Text1;
    variable.style.color = "blue";
    return variable;
}

function addDiv(){
    const variable  = document.createElement("div")
    variable.style["border-color"]="black";
    variable.style["background-color"]= "pink";
    variable.appendChild(blueheader("h1","I\'m in a div"))
    variable.appendChild(addP("Me TOO"))
    return variable;


}

element.appendChild(addP("Hey I am Red"))
console.log("HEY this is working")
element.appendChild(blueheader("h3","Im a blue h3"))
element.appendChild(addDiv())


document.querySelector("#btn").addEventListener('click',function (e){
    console.log(Object.keys(e.target.style.background = "blue"))
})
document.querySelector("#btn").addEventListener('dblclick', function(e){
    e.target.style.background= "red";    
})
