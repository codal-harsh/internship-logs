import React, { useEffect, useState } from "react";
import { findNoteById } from "../utils/read.note.utils";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Modal } from "react-bootstrap";
import { updateSingleNote } from "../utils/update.note.utils";
import { deleteNote } from "../utils/delete.note.utils";
import { toast } from "react-toastify";

const Note = ({ notes, setNotes }) => {
  const params = useParams();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [note, setNote] = useState({
    title: "",
    description: "",
    favorite: false,
    id: undefined,
    date: "",
  });
  const [editable, setEditable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const foundNote = findNoteById(notes, params.id);
    if (foundNote) {
      setNote(foundNote);
    }
  }, [notes, params.id]);

  const handleEditToggle = (e) => {
    setEditable((prev) => !prev);
    if (!editable) {
      return;
    }
    setNote(note);
    updateSingleNote(setNotes, note);
    e.preventDefault();
  };

  const handleDelete = () => {
    deleteNote(params.id, setNotes);
    toast("Note Deleted..");
    handleClose();
    navigate("/");
  };

  return (
    <div className="w-100 h-100 bg-primary px-5">
      <Button
        variant="primary"
        onClick={() => navigate("/")}
        className="rounded-circle position-absolute top-0 start-0 mt-1 bg-transparent"
      >
        <i className="ri-arrow-left-line fs-3"></i>
      </Button>
      <Form>
        <Form.Group className="mb-3" controlId="notes-title">
          <Form.Label className="d-none">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={note?.title}
            className="bg-primary fs-2 focus-ring-light"
            disabled={!editable}
            onChange={(e) => {
              setNote((prev) => {
                return {
                  title: e.target.value,
                  description: prev.description,
                  favorite: prev.favorite,
                  date: prev.date,
                  id: prev.id,
                };
              });
            }}
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="notes-description">
          <Form.Label className="d-none">Example textarea</Form.Label>
          <Form.Control
            className="bg-primary"
            value={note.description}
            as="textarea"
            rows={10}
            disabled={!editable}
            onChange={(e) => {
              setNote((prev) => {
                return {
                  title: prev.title,
                  description: e.target.value,
                  favorite: prev.favorite,
                  date: prev.date,
                  id: prev.id,
                };
              });
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          onClick={handleEditToggle}
          className="rounded-circle border position-absolute bottom-0 end-0 bg-black text-white m-4"
        >
          <i className={`ri-${editable ? "save-2" : "edit"}-fill fs-3`}></i>
        </Button>

        <Button
          variant="primary"
          onClick={handleShow}
          className="rounded-circle border position-absolute bottom-0 start-0 bg-danger text-white m-4"
        >
          <i className={`ri-delete-bin-5-fill fs-3`}></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this note?</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </div>
  );
};

export default Note;
