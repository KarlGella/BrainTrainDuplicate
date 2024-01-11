import React, { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const ForgotPassCard = () => {
  const [show, setShow] = useState(false);
  const [email, selectEmail] = useState("");

  const handleClose = () => (setShow(false), window.location.assign("/"));
  const handleShow = () => setShow(true);

  const onButtonClick = () => {
    localStorage.setItem("email_forgot", email);
    axios.post("api/forgot_pass", { email: email });
    handleShow();
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onButtonClick();
  };

  return (
    <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
      <div className="card-plain mt-4">
        <br />
        <br />
        <br />

        <div className="card-body">
          <form
            onSubmit={(e) => {
              onFormSubmit(e);
            }}
            role="form text-left"
          >
            <h3 className="text-center text-dark mb-2">Forgot Password?</h3>
            <div className="mb-0">
              <p>
                <small>
                  <center>
                    <b>
                      We'll send you an email to reset your password
                      successfully.
                    </b>
                  </center>
                </small>
              </p>
            </div>

            <div className="mb-3">
              <input
                onChange={(e) => selectEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="email-addon"
              />
              <button
                onClick={() => onButtonClick()}
                id="sign-in"
                type="button"
                className="btn w-100 my-4 mb-2"
                style={{ backgroundColor: "#efac2e", color: "white" }}
              >
                Send Confirmation Email
              </button>
              <p className="mb-0" id="last-text" style={{ fontSize: "10.5px" }}>
                Don't have an account?{" "}
                <a
                  href="sign-up.html"
                  className="font-weight-bolder"
                  id="flexCheckDefault"
                  target="_blank"
                  style={{ color: "#efac2e" }}
                >
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We have sent an email to the given email address.</p> Please look
          at it for further instructions.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ForgotPassCard;
