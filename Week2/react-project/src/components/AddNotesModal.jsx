import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { createNote } from "../utils/create.note.utils";

const AddNotesModal = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    const date = new Date();
    const dateToSave = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const note = {
      title: title,
      description: desc,
      date: dateToSave,
      favorite: false,
    };
    createNote(props.notes, props.setNote, note);
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="border"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Title Goes Here"
              autoFocus
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              value={desc}
              placeholder="Description Goes Here"
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="success" type="submit" onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNotesModal;
