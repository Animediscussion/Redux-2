import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue, addTask } from "../redux/TodoSlice";

const TodoList = () => {
  const { inputValue, todoList } = useSelector((store) => store.todoState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const val = e.target.value;
    dispatch(setInputValue(val));
  };

  const handleAddTask = () => {
    dispatch(addTask(inputValue));
  };
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
