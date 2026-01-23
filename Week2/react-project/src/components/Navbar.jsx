import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import {
  clearUser,
  getUser,
  readNotesFromStorage,
} from "../storage/localstorage.handler";

function AppNavbar({ notes, setNote }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(-1);
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search) ||
      note.description.toLowerCase().includes(search),
  );

  const logout = () => {
    clearUser();
    navigate("/");
    return;
  };

  useEffect(() => {
    if (!search) {
      setNote(readNotesFromStorage());
      return;
    }

    setNote(filteredNotes);

    const handleKeyDown = (e) => {
      if (!filteredNotes.length) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) =>
            prev < filteredNotes.length - 1 ? prev + 1 : 0,
          );
          break;

        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) =>
            prev > 0 ? prev - 1 : filteredNotes.length - 1,
          );
          break;

        case "Enter":
          if (activeIndex >= 0) {
            navigate(`/card/${filteredNotes[activeIndex].id}`);
          }
          break;

        case "Escape":
          setActiveIndex(-1);
          // optionally close search here
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, search]);

  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Navbar.Brand className="fs-3" href="/">
          {getUser()?.email}
        </Navbar.Brand>
        <Nav.Link href="/" onClick={logout}>
          Logout
        </Nav.Link>

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
            filteredNotes.map((note, index) => (
              <Card
                className={`cursor-p mb-2 ${
                  index === activeIndex ? "border border-2 border-black" : ""
                }`}
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
