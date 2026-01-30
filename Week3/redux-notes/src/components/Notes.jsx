import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notes = ({ title, description, date, favorite, id, setNote }) => {
  const [isFav, setFav] = useState(favorite);
  const navigate = useNavigate();
  return (
    <Card
      bg="primary"
      key="primary"
      style={{ width: "25rem", height: "12rem" }}
      className="p-1 "
    >
      <Card.Header className="d-flex justify-content-between align-content-center">
        <h4 className="pt-1">Date: {date}</h4>
        <Button
          onClick={(e) => {
            toggleFavorite(setNote, id, setFav);
          }}
          className="fs-4 bg-transparent p-0 d-flex align-content-center border-0"
        >
          <i className={`ri-star-${isFav ? "fill" : "line"} pb-1`}></i>
        </Button>
      </Card.Header>
      <Card.Body
        className="cursor-p"
        onClick={() =>
          navigate(`/card/${id}`, {
            state: { title, description },
          })
        }
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text className="three-line-truncate">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Notes;
