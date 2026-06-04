import React, { use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserMiddleware } from "./middleware/userMiddleware";

const userRedux = () => {
  const dispatch = useDispatch();
  useDispatch();
  const { loading, error, user, param } = useSelector(
    (store) => store.userState,
  );

  const [value, setValue] = useState("");

  useEffect(() => {
    if (param) {
      dispatch(fetchUserMiddleware(param));
    }
  }, [param, dispatch]);

  const heading = <h2>User Example</h2>;
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
