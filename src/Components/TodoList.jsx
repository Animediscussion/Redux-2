import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const { inputValue, addTask } = useSelector((store) => store.todoState);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>TodoList</h2>
      <div>
        <div className="inputbox">
          <input type="text" value={inputValue} onChange={handleChange} />
          <button onClick={handleAddTask}> Submit</button>
        </div>
        <div>
          {todoList.map((task, id) => {
            return (
              <li key={id}>
                {id}: {task}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
