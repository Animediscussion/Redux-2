import React, { use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserMiddleware } from "./middleware/userMiddleware";
import userSlice from "../redux/userSlice";

const { getParam } = userSlice.actions;

const userRedux = () => {
  const dispatch = useDispatch();
  const { loading, error, user, param } = useSelector(
    (store) => store.userState,
  );

  useEffect(() => {
    if (param) {
      dispatch(fetchUserMiddleware(param));
    }
  }, [param]);

  const heading = (
    <>
      <h2>User Example</h2>
      <input
        type="text"
        value={param}
        onChange={(e) => dispatch(getParam(e.target.value))}
      />
    </>
  );
  if (loading) {
    return (
      <>
        {heading}
        <h3>...Loading</h3>
      </>
    );
  }
  if (error) {
    return (
      <>
        {heading}
        <h3>Error occured</h3>
      </>
    );
  }
  return (
    <>
      {heading}
      <h4>Name: {user?.name || "N/A"}</h4>
      <h4>Phone: {user?.phone || "N/A"}</h4>
    </>
  );
};

export default userRedux;
