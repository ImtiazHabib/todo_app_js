// Capture elements by their IDs
const user_input = document.getElementById('todo-input');
const todo_form = document.getElementById('todo-form');
const todo_list_ul = document.getElementById('todo-list');

// Store todos in an array
const todos = [];

// Function to render todos
function get_todos() {
  // Clear the current list
  todo_list_ul.innerHTML = "";

  // Loop through todos and create list items
  todos.forEach((todo, index) => {
    // Create li element
    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = todo;

    // Create delete button
    const delete_button = document.createElement("button");
    delete_button.className = "btn btn-danger btn-sm";
    delete_button.textContent = "Delete";

    // Add delete functionality
    delete_button.addEventListener("click", () => {
      todo_delete(index);
    });

    // Append delete button to li, then li to ul
    li.appendChild(delete_button);
    todo_list_ul.appendChild(li);

    // create an update button 
    const update_button = document.createElement('button');
    update_button.className = "btn btn-success btn-sm";
    update_button.textContent = "Update";

    // Add update functionality
    update_button.addEventListener("click", () => {
        todo_update(index);
    });

    // Append update button to the list 
    li.appendChild(update_button);
  });
}

// Delete a todo by index
function todo_delete(index) {
  todos.splice(index, 1);
  get_todos();
}

// Update a todo bu index
function todo_update(index){
    const present_todo = todos[index];
    const edited_todo = prompt("write new todo", present_todo);

     if (edited_todo !== null && edited_todo.trim() !== "") {
    todos[index] = edited_todo.trim();
    get_todos();
  }
}

// Add a new todo
function add_todo(todotext) {
  if (todotext.trim() === "") return;
  todos.push(todotext.trim());
  get_todos();
  user_input.value = '';
}

// Listen for form submit event
todo_form.addEventListener('submit', function (e) {
  e.preventDefault();
  add_todo(user_input.value);
});
