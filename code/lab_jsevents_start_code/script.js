document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#todo-form");
    const newToDo = document.querySelector("#new-todo");
    const list = document.querySelector("#list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (newToDo.value.trim() !== "") {
            // Create a new list item
            const newListItem = document.createElement("li");

            // Set its text content to the input value
            newListItem.innerText = newToDo.value;

            // Create a delete button for the list item
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.addEventListener("click", function () {
                // Remove the corresponding list item when the delete button is clicked
                newListItem.remove();
            });

            // Append the delete button to the list item
            newListItem.appendChild(deleteButton);

            // Append the new list item to the existing list
            list.appendChild(newListItem);

            // Clear the input field after adding the item
            newToDo.value = "";
        }
    });
});






