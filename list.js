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

