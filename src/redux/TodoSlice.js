import { createSlice } from "@reduxjs/toolkit";
import TodoList from "../Components/TodoList";
const TodoSlice = createSlice({
  name: "TodoSlice",
  initialState: {
    inputValue: "",
    TodoList: [],
  },
});
