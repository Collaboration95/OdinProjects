let rotate = document.querySelectorAll(".icon");
rotate.forEach(element=>{element.addEventListener('click',rotateCard)})

function rotateCard(e){
    e.path[2].classList.toggle("rotateClass")
    e.preventDefault()
}

let plus = document.querySelector('.plus')
plus.addEventListener('click',inputBox);
// plus.addEventListener('dblclick',createData);

function inputBox(){
    // Creating Html elments
    var maincontainer = document.createElement('div')
    var thecard  = document.createElement("div");
    var thefront = document.createElement("div");
    var icon = document.createElement("i");
    var title = document.createElement("div");
    var author = document.createElement("div");
    var summary = document.createElement("div");
    var pages = document.createElement('div');
    var read= document.createElement('div');
    var total = document.createElement('div');
    var theback =  document.createElement('div');
    var icon2 = document.createElement("i");
    var summary2 = document.createElement("div");
    var publish = document.createElement('button');
    var Delete = document.createElement('button')
    let div1= document.createElement('div');
    let div2= document.createElement('div');
    let titleinput  = document.createElement('input')
    let authorinput  = document.createElement('input')
    let textarea1 = document.createElement('textarea');
    let textarea2 = document.createElement('textarea');
    let read_input =  document.createElement('input');
    let total_input = document.createElement('input');
    
    // Adding Classes
    maincontainer.classList.add('maincontainer')
    thecard.classList.add('thecard');
    thefront.classList.add("thefront");
    theback.classList.add('theback')
    icon.classList.add('icon','fa-solid','fa-rotate-left');
    title.classList.add('title')
    author.classList.add('author')
    summary.classList.add('summary');
    pages.classList.add('pages')
    read.classList.add('read');
    total.classList.add('total');
    icon2.classList.add('icon','fa-solid','fa-rotate-left');
    summary2.classList.add('summary2');
    publish.classList.add('publish')
    Delete.classList.add('Delete');
    textarea1.classList.add('textarea1');
    textarea2.classList.add('textarea2');
    read_input.classList.add("read_input")
    total_input.classList.add("total_input")
    titleinput.classList.add("title-input")
    authorinput.classList.add("author-input")
    
    // Adding TextContent To Button
    publish.textContent="Publish";
    Delete.textContent= "Delete";
    
    // Adding Event Listeners & Setting up attributes                                                                                        
    titleinput.setAttribute('type', 'text');
    authorinput.setAttribute('type', 'text')
    read_input.setAttribute('type','number');
    titleinput.required = "true";
    authorinput.required = "true";
    textarea1.required= "true";
    read_input.required="true";
    total_input.required="true";
    textarea2.required="true";
    total_input.setAttribute('type','number');
    icon.addEventListener('click',rotateCard)
    icon2.addEventListener('click',rotateCard)
    Delete.addEventListener('click',deleteCard)
    publish.addEventListener('click',GetData)    
    // Appending tags 
    div1.appendChild(publish);
    div2.appendChild(Delete)
    title.appendChild(titleinput)
    author.appendChild(authorinput)
    summary.appendChild(textarea1)
    summary2.appendChild(textarea2)
    read.appendChild(read_input)
    total.appendChild(total_input)
    pages.append(read,total);
    thefront.append(icon2,title,author,summary,icon,pages);
    theback.append(icon,summary2,div1,div2)
    thecard.append(thefront,theback);
    maincontainer.append(thecard);
    document.querySelector('#lastcard').before(maincontainer)
}


let mylibrary = new Array();
function Book(title,author,shortSummary,page,total,summary){
    this.title = title;
    this.author = author;
    this.shortSummary = shortSummary;
    this.page = page;
    this.total = total;
    this.summary = summary;
    this.read = false;
}

function GetData(e){
    var title  = ((((e.path[3]).childNodes[0]).childNodes[1]).childNodes[0]).value
    var author  = ((((e.path[3]).childNodes[0]).childNodes[2]).childNodes[0]).value
    var summary  = ((((e.path[3]).childNodes[0]).childNodes[3]).childNodes[0]).value
    var page  = (((((e.path[3]).childNodes[0]).childNodes[4]).childNodes[0]).childNodes[0]).value
    var total  = (((((e.path[3]).childNodes[0]).childNodes[4]).childNodes[1]).childNodes[0]).value
    var summary2  = ((((e.path[3]).childNodes[1]).childNodes[1]).childNodes[0]).value
    var arr = new Array();
    arr.push(title,author,summary,page,total,summary2);
    if(arr.indexOf("")!=-1){  
        console.log("Sorry Fill up the whole card")
    }
    else{
        var publish = (((e.path[3]).childNodes[1]).childNodes[2]).childNodes[0]
        publish.removeEventListener('click',GetData)
        let icon =  (((e.path[3]).childNodes[0]).childNodes[0])
        icon.click()
        saveData(title,author,summary,page,total,summary2)
        createCard()
        e.path[4].remove()
    }
}


function saveData(title,author,summary,page,total,summary2){
    var card = new Book(title,author,summary,page,total,summary2,false)
    mylibrary.push(card);
    console.log(mylibrary[mylibrary.length -1])
}

function deleteCard(e){  
    var title  = ((((e.path[3]).childNodes[0]).childNodes[1]).childNodes[0]).value
    deleteData(title);
    e.path[4].remove() // Traversing to .maincontainer and remove card
    console.log("Delete Card Function deleted a card")
}

function deleteData(title){
    console.log(`deleteData title is ${title}`)
    mylibrary.forEach(element=>{if(title==element.title){
        const index =mylibrary.indexOf(element);
        mylibrary.splice(index,1);
    }})
}

// Adding Delete Buton functionality for starting cards
let Del = document.querySelectorAll(".Delete")
Del.forEach(element=>{element.addEventListener('click',deleteCard)})

function createCard(){
    var currentData = mylibrary[mylibrary.length-1];
    var maincontainer = document.createElement('div')
    var thecard  = document.createElement("div");
    var thefront = document.createElement("div");
    var icon = document.createElement("i");
    var title = document.createElement("div");
    var author = document.createElement("div");
    var summary = document.createElement("div");
    var pages = document.createElement('div');
    var read= document.createElement('div');
    var total = document.createElement('div');
    var theback =  document.createElement('div');
    var icon2 = document.createElement("i");
    var summary2 = document.createElement("div");
    var Read = document.createElement('button');
    var Delete = document.createElement('button')
    var div1 = document.createElement('div')
    var div2 = document.createElement('div')
    
    // Adding Classes
    maincontainer.classList.add('maincontainer')
    thecard.classList.add('thecard');
    thefront.classList.add("thefront");
    theback.classList.add('theback')
    icon.classList.add('icon','fa-solid','fa-rotate-left');
    title.classList.add('title')
    author.classList.add('author')
    summary.classList.add('summary');
    pages.classList.add('pages')
    read.classList.add('read');
    total.classList.add('total');
    icon2.classList.add('icon','fa-solid','fa-rotate-left');
    summary2.classList.add('summary2');
    Read.classList.add('Read')
    Delete.classList.add('Delete');
  
    // Adding TextContent To Button
    Read.textContent="Read";
    Delete.textContent= "Delete";
    title.textContent=currentData.title;
    author.textContent=currentData.author;
    summary.textContent=currentData.shortSummary;
    read.textContent=currentData.page;
    total.textContent="/"+  currentData.total;
    summary2.textContent=currentData.summary;
    
    // Adding Event Listeners & Setting up attributes                                                                                        
    icon.addEventListener('click',rotateCard)
    icon2.addEventListener('click',rotateCard)
    Delete.addEventListener('click',deleteCard)
   
    // Appending tags 
    div1.appendChild(Read);
    div2.appendChild(Delete)

    pages.append(read,total);
    thefront.append(icon2,title,author,summary,icon,pages);
    theback.append(icon,summary2,div1,div2)
    thecard.append(thefront,theback);
    maincontainer.append(thecard);
    document.querySelector('#lastcard').before(maincontainer)
}