import React from "react";
import { useSelector } from "react-redux";

const CounterRedux = () => {
  const { count } = useSelector((store) => store.counterState);
  return <div>CounterRedux</div>;
};

export default CounterRedux;
