import React from "react";
import moment from "moment";

function List({ todo, removeTask, toggleTask }) {
  const resultTime = moment(todo.date).subtract(10, "days").calendar();

  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
        {"   "}
        {resultTime}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        х
      </div>
    </div>
  );
}

export default List;
