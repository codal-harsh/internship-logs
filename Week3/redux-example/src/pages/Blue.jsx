import { useDispatch } from "react-redux";
import { changeColor } from "../slices/colorSlice";
import React from "react";

const Blue = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(changeColor("blue"));
    setState((prev) => !prev);
  };

  console.log("blue");
  return (
    <div>
      <button onClick={handleClick}>Blue</button>
    </div>
  );
};

export default React.memo(Blue);
