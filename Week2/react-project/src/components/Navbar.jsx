import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function AppNavbar({ notes }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search) ||
      note.description.toLowerCase().includes(search),
  );

  console.log(filteredNotes);

  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Navbar.Brand className="fs-3" href="/">
          React Notes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex align-items-center w-25 gap-1 position-relative">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ paddingLeft: "2.5rem" }}
            />
            <Button
              variant="outline-success"
              className="position-absolute p-2 start-0 border-0 bg-transparent text-black"
            >
              <i className="ri-search-line fs-4 opacity-50"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* 🔽 SEARCH RESULTS */}
      {search && (
        <div className="d-flex bg-primary flex-column flex-wrap position-absolute end-0 px-5">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <Card
                className="cursor-p"
                key={note.id}
                onClick={() => {
                  navigate(`/card/${note.id}`);
                }}
                style={{ width: "26rem" }}
              >
                <Card.Body>
                  <Card.Text>
                    <span className="fw-bold">{note.title}</span>:{" "}
                    {note.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </>
  );
}

export default AppNavbar;
