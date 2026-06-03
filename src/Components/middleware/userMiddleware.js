import userSlice from "../../redux/userSlice";

const { userLoading, userError, userData } = userSlice.actions;
export const fetchUserMiddleware = (param) => {
  return async (dispatch) => {
    return async (dispatch) => {
      if (!param) return;
      try {
        dispatch(userLoading());
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${param}`,
        );
        if (!response.ok) {
          throw new Error("User not found");
        }
      } catch (err) {
        dispatch(userError());
      } finally {
      }
    };
  };
};
