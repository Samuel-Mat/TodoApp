let tagCounter = 0;
let createCounter = 0;
var dateUntils;
//setInterval(TimeCounter(), 1000);

//If you press the submit button
function CreateToDo() {

if(Validate() === true)
{
//var declaration
const all = document.getElementById("all");
const toDo = document.createElement('li');
const allLists = document.getElementsByClassName("showlist");
const chosenTag = document.getElementById("tags").value;
const full = document.createElement("div");
const text = document.createElement('textarea');
const prio = document.getElementById("priority").value;
const todoPrio = document.createElement("p");
const todoTag = document.createElement("p");
const todoDate = document.createElement("p");
const date = document.getElementById("date").value;
const todoMid = document.createElement("div");
const todoBtns = document.createElement("div");
const deleteBtn = document.createElement("button");
const editBtn = document.createElement("button");

//set diffrent attributes and clone the element
toDo.setAttribute("width", "50%");
text.setAttribute("class", "todoText");
text.setAttribute("readonly", "true")
full.setAttribute("class", "full");
todoTag.setAttribute("class", "todoTag");
todoPrio.setAttribute("class", "todoPrio");
todoDate.setAttribute("class", "todoDate");
todoMid.setAttribute("class", "todoMid");
todoBtns.setAttribute("class", "todoBtns");
deleteBtn.setAttribute("class", "deleteBtn");
deleteBtn.setAttribute("id", createCounter);
editBtn.id = createCounter;
editBtn.setAttribute("class", "editBtn");
editBtn.setAttribute("id", createCounter);


text.value = document.getElementById("txt").value;
todoPrio.textContent = prio;
todoTag.textContent = chosenTag;
todoDate.textContent = date;
deleteBtn.textContent = "X"
editBtn.textContent ="Edit"
toDo.appendChild(full);
full.appendChild(text);
todoMid.appendChild(todoTag);
todoMid.appendChild(todoDate);
full.appendChild(todoMid);
full.appendChild(todoPrio);
todoBtns.appendChild(editBtn);
todoBtns.appendChild(deleteBtn);
full.appendChild(todoBtns);
toDo.setAttribute("class", "ToDo");
toDo.setAttribute("id", createCounter);
const toDo2 = toDo.cloneNode(true);


//add the Todo to the List with the chosen Tag
for(let i = 0; i < allLists.length; i++){
  if(allLists[i].id === chosenTag){
    allLists[i].appendChild(toDo);
    
  }

}
//add the object to the List all
all.appendChild(toDo2);
AddEvs();
createCounter++;

document.getElementById("txt").value = "";
}

}

//If you change the option in the Choose a Tag field
function CreateTag(){

//var declaration
  const chosenTag = document.getElementById("tags").value;
  const show = document.getElementById("show");
  const tags = document.getElementById("tags");
  const todoList = document.getElementById("todoList");

//If you choose Create New Tag
  if(chosenTag === "new")
  {
  let tagName = prompt("What is the name of the new Tag?",0)
  if(tagName !== null){
    const newTag = document.createElement("option");
    const newList = document.createElement("ul");
    newList.id = tagName;
    newTag.id = tagName;
    newList.setAttribute("class", "showlist");
    newList.style.display="none";
    newTag.textContent = tagName;
    const newTag2 = newTag.cloneNode(true);
    newList.appendChild
    tags.appendChild(newTag); 
    show.appendChild(newTag2);
    todoList.appendChild(newList);
    tagCounter++;    
    }
  
  //Create New Tag goes to the end of the again Dropdown
  const clone = document.getElementById("new");
  const newChosenTag = clone.cloneNode(true);
  clone.remove();
  tags.appendChild(newChosenTag);
  }
}
  
  
//When you use the Show Todos Dropdown
function ShowTags(){
  const chosenTag = document.getElementById("show").value;
  const allLists = document.getElementsByClassName("showlist");
  for(let i = 0; i < allLists.length; i++){
    if(allLists[i].id === chosenTag){
      allLists[i].style.display="flex";
    }
    else{
      allLists[i].style.display="none"; 
    }
  }
}


function TimeCounter(){
 var dates = document.getElementsByClassName("todoDate");
 for(let i = 0; i < dates.length; i++ )
 {
    var timeRemain = Math.abs(date - dateUntils[i] )
 }
}

function Validate(){
  var check = true;
  if(document.getElementById("txt").value === ""){
    alert("Please write a Text for your ToDo");
    check = false;
  }
  else if(document.getElementById("date").value === ""){
    alert("You didn't set a date");
    check = false;
  }
  return check;
}




function AddEvs(){
var delets = document.getElementsByClassName("deleteBtn");
var edits = document.getElementsByClassName("editBtn");
const ToDos = document.getElementsByClassName("ToDo");
for(let i = 0; i < delets.length; i++){
  delets[i].addEventListener("click", function(){
    let x = 0;
    while(x < 2)
    {
    for(let i = 0; i < ToDos.length; i++)
    {
     if(ToDos[i].id === this.id){
       while(ToDos[i].hasChildNodes()){
         ToDos[i].removeChild(ToDos[i].firstChild);
       }
       ToDos[i].remove();
     }
    }
    x++;
  }
})}
  for(let i = 0; i < edits.length; i++){
    let newText = "";
    edits[i].addEventListener("click", function(){
      let x = 0;
     
      for(let i = 0; i < ToDos.length; i++)
      {
       if(ToDos[i].id === this.id){
        const textarea = ToDos[i].querySelector("textarea");
        if(x === 0)
        {
        newText = prompt("What is the new Text of your ToDo?");
        }
        if(newText !== ""){
          textarea.value = newText;
        }
        x++;
       }
      
     
      
    }
  }
  
);
  }}
