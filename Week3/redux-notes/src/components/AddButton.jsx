import React from "react";
import { Button } from "react-bootstrap";
import AddNotesModal from "./AddNotesModal";

const AddButton = ({ notes, setNote }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        className="border rounded-circle"
        onClick={() => setModalShow(true)}
      >
        <i className="ri-add-line fs-3"></i>
      </Button>

      <AddNotesModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default AddButton;
