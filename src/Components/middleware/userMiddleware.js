import userSlice from "../../redux/userSlice";

const { userLoading, userError, userData } = userSlice.actions;
export const fetchUserMiddleware = (param) => {
  return async (dispatch) => {
    return async (dispatch) => {
      if (!param) return;
      try {
      } catch (err) {
        dispatch();
      } finally {
      }
    };
  };
};
