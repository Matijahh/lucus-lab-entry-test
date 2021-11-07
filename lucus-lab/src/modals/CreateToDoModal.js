import React, { useState } from "react";

/** Reactstrap Components Imports */
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateToDoModal = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {
      name: taskName,
      description: description,
    };
    save(taskObj);
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Your Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
            <input
              className="form-control"
              type="text"
              value={taskName}
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              rows="5"
              value={description}
              onChange={handleChange}
              name="description"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button className="modal-btn" color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button className="modal-btn" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateToDoModal;
