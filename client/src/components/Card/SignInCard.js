import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Link from "../Link";
import Modal from "react-bootstrap/Modal";

const SignInCard = () => {
  const [email, selectEmail] = useState("");
  const [password, selectPassword] = useState("");
  const [show, setShow] = useState(false);
  const [statement, selectStatement] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Enterred");
    if (email === "" || password === "") {
      selectStatement("Empty field");
      handleShow();
    } else {
      axios
        .post("/api/login", { email: email, password: password })
        .then((res) => {
          if (res.data === "Logged In") {
            window.location.assign("/");
          } else if (res.data === "Error!") {
            selectStatement("Wrong email or password");
            handleShow();
          }
        });
    }
  };

  const onGoogleClick = () => {
    window.location.assign("auth/google");
  };

  return (
    <>
      <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
        <div className="card-plain mt-4">
          <br />
          <br />
          <br />
          <h3 className="text-center text-dark mb-4">Sign In.</h3>

          <button
            onClick={() => onGoogleClick()}
            value="Google OAuth"
            id="google"
            className="btn w-100 mb-0"
            style={{
              color: "#efca2e",
              border: "1px solid #efca2e",
              backgroundColor: "white",
            }}
          >
            <i className="fa fa-google-plus-square">&nbsp;</i> Sign in with
            Google
          </button>
          <div className="card-body">
            <form
              role="form text-left"
              onSubmit={(e) => {
                onLoginSubmit(e);
              }}
            >
              <div className="mb-3">
                <p>
                  <small>
                    <center>
                      <b>OR</b>
                    </center>
                  </small>
                </p>
              </div>
              <div className="mb-3">
                <input
                  onChange={(event) => {
                    selectEmail(event.target.value);
                  }}
                  id="username"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="email-addon"
                />
              </div>
              <div className="mb-2">
                <input
                  onChange={(event) => {
                    selectPassword(event.target.value);
                  }}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="password-addon"
                />
              </div>
              <div className="">
                <a
                  href="/forgotPass"
                  className="forgot"
                  id=""
                  style={{ fontSize: "13px" }}
                >
                  <u>Forgot Password?</u>
                </a>
              </div>
              <button
                onClick={(e) => onLoginSubmit(e)}
                id="sign-in"
                type="submit"
                className="btn w-100 my-4 mb-2"
                style={{ backgroundColor: "#efac2e", color: "white" }}
              >
                Sign In
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
            </form>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{statement}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {statement === "Thank you for signing up!" ? (
              <Link href="/">Go back to homepage</Link>
            ) : (
              <>Close</>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignInCard;
