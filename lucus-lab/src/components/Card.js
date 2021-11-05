import React, { useState } from "react";

/** Modals Imports */
import EditTaskModal from "../modals/EditTaskModal";

/** Images Imports */
import Edit from "../assets/img/edit.png";
import Delete from "../assets/img/bin.png";

const Card = ({ task, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  return (
    <div className="card-wrapper">
      <div className="card-top"></div>
      <div className="task-holder">
        <span className="card-header">{task.name}</span>
        <span className="card-desc">{task.description}</span>
        <div className="card-buttons">
          <button className="edit-btn" onClick={() => setModal(true)}>
            <img src={Edit} alt="Edit" />
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            <img src={Delete} alt="Bin" />
          </button>
        </div>
      </div>
      <EditTaskModal
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        task={task}
      />
    </div>
  );
};

export default Card;
