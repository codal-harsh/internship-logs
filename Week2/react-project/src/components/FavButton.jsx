import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router";

const FavButton = () => {
  return (
    <Button className="border  rounded-circle">
      <i className="ri-star-fill text-black fs-3"></i>
    </Button>
  );
};

export default FavButton;
