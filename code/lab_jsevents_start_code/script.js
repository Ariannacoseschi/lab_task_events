const button = document.querySelector("#enter");
const toDoList = document.querySelector("#list");
const newToDo = document.querySelector("#new-todo");

button.addEventListener("click", () =>{
    //console.log("button clicked");
    const newListItem = document.createElement("li");
    newListItem.innerText = newToDo;
});

