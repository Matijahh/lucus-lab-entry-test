import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditPostModal = ({ modal, toggle, post }) => {
  const [postName, setPostName] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    setPostName(post.title);
    setPostBody(post.body);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "postName") {
      setPostName(value);
    } else {
      setPostBody(value);
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update The Post</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Post Name</label>
            <input
              className="form-control"
              type="text"
              value={postName}
              onChange={handleChange}
              name="postName"
            />
          </div>
          <div className="form-group">
            <label>Post Body</label>
            <textarea
              className="form-control"
              rows="5"
              value={postBody}
              onChange={handleChange}
              name="postbody"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button className="modal-btn" color="primary" onClick={() => {}}>
          Update
        </Button>{" "}
        <Button className="modal-btn" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditPostModal;
