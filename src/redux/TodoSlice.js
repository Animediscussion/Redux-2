import { createSlice } from "@reduxjs/toolkit";
import TodoList from "../Components/TodoList";
const TodoSlice = createSlice({
  name: "TodoSlice",
  initialState: {
    inputValue: "",
    todoList: [],
  },
  reducers: {
    setInputValue: (state, data) => {
      console.log(data.payload);
      state.inputValue = data.payload;
    },
    addTask: (state, data) => {
      const currTask = data.payload;
      state.todoList.push(currTask);
    },
  },
});
