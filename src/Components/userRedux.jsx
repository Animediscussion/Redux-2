import React from "react";

const userRedux = () => {
  const dispatch = useDispatch();
  const { loading, error, user, param } = useSelector(
    (store) => store.userState,
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
