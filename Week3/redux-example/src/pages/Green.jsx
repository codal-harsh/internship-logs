import { useDispatch } from "react-redux";
import { changeColor } from "../slices/colorSlice";
import React from "react";

const Green = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(changeColor("green"));
    setState((prev) => !prev);
  };

  console.log("green");
  return (
    <div>
      <button onClick={handleClick}>Green</button>
    </div>
  );
};

export default React.memo(Green);
