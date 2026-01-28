import React from "react";
import { useSelector } from "react-redux";

const ColorBox = () => {
  const color = useSelector((state) => state.color);

  return (
    <div style={{ background: color, width: "100px", height: "100px" }}></div>
  );
};

export default ColorBox;
