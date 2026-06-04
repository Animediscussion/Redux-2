import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./TodoSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    counterState: counterSlice,
    todoState: todoSlice,
    userState: userSlice,
  },
});
export default store;
