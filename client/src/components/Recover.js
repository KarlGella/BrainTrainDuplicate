import React, { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const Recover = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email_forgot"));
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleClose = () => (setShow(false), window.location.assign("/"));
  const handleShow = () => setShow(true);
  const handleCloseModal = () => setShow(false);

  const onButtonClick = () => {
    "Password mismatch. Wrong Confirm Password";
    if (password === confirmPassword) {
      setMsg(
        "We have changed your account's password successfully. Please log-in to Brain Train"
      );
      axios
        .post("api/new_password", { email: email, password: password })
        .then((res) => {
          localStorage.removeItem("email_forgot");
          handleShow();
        });
      return;
    }
    setMsg("Password Mismatch. Wrong Confirm Password");
    handleShow();
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onButtonClick();
  };

  return (
    <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
      <div className="card-plain mt-4">
        <div className="card-body">
          <form role="form text-left" onSubmit={(e) => onFormSubmit(e)}>
            <h3 className="text-center text-dark mb-2">Change Password</h3>
            <div className="mb-0">
              <p>
                <small>
                  <center>
                    <b>Change Password of Brain Train Account: {email}</b>
                  </center>
                </small>
              </p>
            </div>

            <div className="mb-3">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="New Password"
              />
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Confirm New Password"
              />
              <button
                onClick={() => onButtonClick()}
                id="sign-in"
                type="button"
                className="btn w-100 my-4 mb-2"
                style={{ backgroundColor: "#efac2e", color: "white" }}
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={(e) =>
              msg === "Password Mismatch. Wrong Confirm Password"
                ? handleCloseModal()
                : handleClose()
            }
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Recover;
