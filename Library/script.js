let rotate = document.querySelectorAll(".icon");
rotate.forEach(element=>{element.addEventListener('click',rotateCard)})

function rotateCard(e){
    console.log(e.target)
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
    let textarea1 = document.createElement('textarea')
    let textarea2 = document.createElement('textarea')
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
    // Adding TextContent To Button
    publish.textContent="Publish";
    publish.addEventListener('click',GetData)
    Delete.textContent= "Delete";
    // Appending Stuff                                                                                                     
    div1.appendChild(publish);
    div2.appendChild(Delete)
    let titleinput  = document.createElement('input')
    titleinput.setAttribute('type', 'text');
    title.appendChild(titleinput)
    let authorinput  = document.createElement('input')
    authorinput.setAttribute('type', 'text')
    author.appendChild(authorinput)
    summary.appendChild(textarea1)
    read.appendChild(document.createElement("input"))
    total.appendChild(document.createElement("input"))
    read.setAttribute('type','text');
    total.setAttribute('type','text');
    summary2.appendChild(textarea2)
    icon.addEventListener('click',rotateCard)
    icon2.addEventListener('click',rotateCard)
    pages.append(read,total);
    thefront.append(icon2,title,author,summary,icon,pages);
    theback.append(icon,summary2,div1,div2)
    thecard.append(thefront,theback);
    maincontainer.append(thecard);
    document.querySelector('main').appendChild(maincontainer);
}


let mylibrary = [];
function Book(){
    this.title = title;
    this.author = author;
    this.shortSummary = shortSummary;
    this.read = read;
    this.total = total;
    this.summary = summary;
    this.read = false;
}


function GetData(e){
    console.log(e)
    let title  = ((e.path[3]).childNodes[0]).childNodes[1]
    let author  = ((e.path[3]).childNodes[0]).childNodes[2]
    let summary  = ((e.path[3]).childNodes[0]).childNodes[3]
    let read  = (((e.path[3]).childNodes[0]).childNodes[4]).childNodes[0]
    let total  = (((e.path[3]).childNodes[0]).childNodes[4]).childNodes[0]
    let summary2  = ((e.path[3]).childNodes[1]).childNodes[1]

   


}