import "./App.css";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

const dummyData = ["Games"];

function App() {
  const [todoList, setToDoList] = useState(dummyData);

  const AddInputHandler = function (todo) {
    setToDoList((todoList) => {
      return [todo, ...todoList];
    });
    console.log(todoList);
  };

  const todoDeleteHandler = function (id) {
    let newTodoList = todoList;
    newTodoList.splice(id, 1);
    setToDoList([...newTodoList]);
  };
  return (
    <div className="main-container">
      <div className="center-Conatiner">
        <TodoInput onAddInputHandler={AddInputHandler}></TodoInput>
        <h1 className="addtodo">Add ToDo</h1>
        <hr className="horiLine"></hr>
        <TodoList
          item={todoList}
          onDeleteHandler={todoDeleteHandler}
        ></TodoList>
      </div>
    </div>
  );
}

export default App;
