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
};

function doneTodo (todoId) {
    const selectedTodoIndex = todoList.findIndex(myTodo => myTodo.id == todoId);
    todoList[selectedTodoIndex].isDone = true;
}
