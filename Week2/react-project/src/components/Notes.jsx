import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Notes = ({ title, description, date, favorite }) => {
  return (
    <Card
      bg="primary"
      key="primary"
      style={{ width: "25rem", height: "12rem" }}
      className="p-1 cursor-p"
    >
      <Card.Header className="d-flex justify-content-between align-content-center">
        <h4 className="pt-1">Date: {date}</h4>
        <Button className="fs-4 bg-transparent p-0 d-flex align-content-center border-0">
          <i className="ri-star-line pb-1"></i>
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="three-line-truncate">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Notes;
