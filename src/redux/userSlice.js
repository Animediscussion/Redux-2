import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: false,
    loading: false,
    param: null,
  },
  reducers: {
    userLoading: (state) => {
      state.error = false;
      state.loading = true;
    },
    userError: (state) => {
      state.error = true;
      state.loading = false;
    },
    userData: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    getParam: (state, action) => {
      state.param = action.payload;
    },
  },
});

export const { userLoading, userError, userData, getParam } = userSlice.actions;
export default userSlice.reducer;
