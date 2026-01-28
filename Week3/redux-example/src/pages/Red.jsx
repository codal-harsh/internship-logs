import { useDispatch } from "react-redux";
import { changeColor } from "../slices/colorSlice";
import React from "react";

const Red = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(changeColor("red"));
    setState((prev) => !prev);
  };

  console.log("red");

  return (
    <div>
      <button onClick={handleClick}>Red</button>
    </div>
  );
};

export default React.memo(Red);
