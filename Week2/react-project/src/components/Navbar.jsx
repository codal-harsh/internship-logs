import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppNavbar() {
  return (
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
  );
}

export default AppNavbar;
