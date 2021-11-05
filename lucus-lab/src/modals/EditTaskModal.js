import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTaskModal = ({ modal, toggle, updateTask, task }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTaskName(task.name);
    setDescription(task.description);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let taskObj = {
      name: taskName,
      description: description,
    };
    updateTask(taskObj);
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Your Task</ModalHeader>
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
        <Button className="modal-btn" color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button className="modal-btn" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskModal;
