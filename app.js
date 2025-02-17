// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");


// btn.addEventListener("click" , function() {
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "Delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value= "";
   
// });
// ul.addEventListener("click", function(event){
//     if(event.target.nodeName == "BUTTON"){
//         let listItem = event.target.parentNode.remove();
//         listItem.remove();
//        console.log("delete")
//     }
    
// })


let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    // Get input value and trim whitespace
    const inputValue = inp.value.trim();

    // Validate input - prevent empty tasks
    if (inputValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item with proper classes
    let item = document.createElement("li");
    item.className = "todo-item";
    
    // Create task text span and delete button
    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = inputValue;

    const delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.textContent = "Delete";

    // Assemble the todo item
    item.appendChild(taskText);
    item.appendChild(delBtn);

    // Add to list and clear input
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.closest("li").remove();
        console.log("Task deleted");
    }
});