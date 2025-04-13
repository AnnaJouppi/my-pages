function todo() {
  const todoInput = document.getElementById("todoInput").value;
  const todoList = document.getElementById("todoList");
  const li = document.createElement("li");
  li.textContent = todoInput;
  todoList.appendChild(li);

  // Add click event to remove the clicked list item
  li.onclick = function() {
    todoList.removeChild(li); // Remove the clicked list item
  };
}

// Tyhjentää listan
function clearList() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; 
}