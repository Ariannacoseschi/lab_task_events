const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const newToDo = document.querySelector("#new-todo");
document.querySelector("#enter").addEventListener("click", function (event) {
    event.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = newToDo.value;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function(){
        newListItem.remove();
    });
    newListItem.appendChild(deleteButton);
    list.appendChild(newListItem);
    newToDo.value = "";
});
// document.addEventListener("DOMContentLoaded", function () {
//     const button = document.querySelector("#enter");
//     const list = document.querySelector("#list");
//     const newToDo = document.querySelector("#new-todo");
//     document.querySelector("#todo-form").addEventListener("submit", function (event) {
//         event.preventDefault();
//         const newListItem = document.createElement("li");
//         newListItem.innerText = newToDo.value;
//         list.appendChild(newListItem);
//         newToDo.value = "";
//     });
// });