// TO- DO

const todoList = [];

const todoListElement = document.querySelector("#myUL");
const todoBtn = document.querySelector("#todo_button");
todoBtn.addEventListener("click", addTodo)
//console.log(todoListElement);

function addTodo (){
    const todoText = document.querySelector("#myInput").value;

    const todoObject = {
        id: todoList.length,
        todoText: todoText,
        isDone: false,
    };

    todoList.push(todoObject);
    //console.log(todoObject);
    displayTodos();
}

function doneTodo (todoId) {
    const selectedTodoIndex = todoList.findIndex((item)=> item.id == todoId);
    todoList[selectedTodoIndex].isDone = true;

    displayTodos();
}

function displayTodos (){
    todoListElement.innerHTML = "";
    document.querySelector("#myInput").value = "";


    todoList.forEach((item) => {
        const listElement = document.createElement("li");
        listElement.innerText = item.todoText;
        listElement.setAttribute("data-id", item.id);
        

        if(item.isDone){
            listElement.classList.add("checked");
        } 

        listElement.addEventListener("click", function(e) {
            const selectedId = e.target.getAttribute("data-id");
            doneTodo(selectedId);
        });

        todoListElement.appendChild(listElement);
    });
}


