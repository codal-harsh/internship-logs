import React, { useEffect, useState } from "react";
import { findNoteById } from "../utils/read.note.utils";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { updateSingleNote } from "../utils/update.note.utils";

const Note = ({ notes, setNotes }) => {
  const params = useParams();
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

  return (
    <div className="w-100 h-100 bg-primary ps-5">
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
      </Form>
    </div>
  );
};

export default Note;
