const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const newToDo = document.querySelector("#new-todo");
const showDateButton = document.querySelector("#show-date");


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


showDateButton.addEventListener("click", function (){
    const today = new Date();

    const formattedDate = today.toLocaleDateString('en-GB');

    console.log("Today's Date is " + formattedDate);
});
