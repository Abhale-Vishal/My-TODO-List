import "./TodoList.css";
import React from "react";

function TodoList(props) {
  return (
    <div className="main-list">
      {props.item.map((item, i) => {
        return (
          <li key={i} className="list">
            {item}
            <div className="center">
              <span
                className="delete-btn"
                onClick={() => {
                  props.onDeleteHandler(i);
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </span>
            </div>
          </li>
        );
      })}
    </div>
  );
}
export default TodoList;
