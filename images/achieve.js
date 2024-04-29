function addTask() {
    var taskInput = document.getElementById("task");
    var taskValue = taskInput.value;
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    var textNode = document.createTextNode(taskValue);
    li.appendChild(textNode);
    var ul = document.getElementById("task-list");
    ul.appendChild(li);
    // Clear the input field
    taskInput.value = "";
}
function deletecheck(e){
    const item= e.target;
    if(item.classList[0]==="trash-btn"){
const todo= item.parentElement;
todo.classList.add("slides")
removelocalTodos(todo);
todo.addEventListener("transitionend",function(){
    todo.remove()
})
    }
    if(item.classList[0]==="complete-btn"){
        const todo= item.parentElement;
        todo.classList.toggle("completed")
    }
}