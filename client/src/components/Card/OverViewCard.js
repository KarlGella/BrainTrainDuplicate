import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Link from "../Link";

const OverViewCard = ({
  text,
  selectedRoute,
  selectDifficulty,
  selectQuarter,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectedPath = (texts, index) => {
    const quarterNumber = index + 1;

    if (selectedRoute === "./categories") {
      return (
        <Link
          className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
          href={selectedRoute}
        >
          {texts.routeHeader}
          <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
        </Link>
      );
    } else {
      return (
        <Button
          variant="outline-light"
          onClick={() => {
            selectQuarter(quarterNumber);
            handleShow();
          }}
          style={{ color: "black", textAlign: "left" }}
        >
          {texts.routeHeader}
          <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
        </Button>
      );
    }
  };

  const renderedCard = text.map((texts, index) => {
    return (
      <div className="col-lg-6 mt-4">
        <div
          className="card h-100 p-3 border-radius-lg"
          style={{
            backgroundImage: `url(img/${texts.pic}.png)`,
            borderRadius: "15px",
          }}
        >
          <div
            className="
                  overflow-hidden
                  position-relative
                  border-radius-lg
                  bg-cover
                  h-100
                  bg-white
                "
          >
            <div
              className="
                    card-body
                    position-relative
                    z-index-1
                    d-flex
                    flex-column
                    h-100
                    p-3
                  "
            >
              <h5 className="font-weight-bolder mb-4 pt-2">{texts.head}</h5>
              <p className="">{texts.details}</p>
              {selectedPath(texts, index)}
            </div>
          </div>
        </div>
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Select Difficulty</Modal.Title>
            </Modal.Header>
            <Modal.Body>Choose Easy, Medium, or Hard!</Modal.Body>
            <Modal.Footer>
              <Button
                variant="success"
                onClick={(e) => {
                  selectDifficulty(10);
                  handleClose();
                }}
              >
                <Link
                  className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                  href={selectedRoute}
                >
                  Easy
                  <i
                    className="fas fa-arrow-right text-sm ms-1"
                    aria-hidden="true"
                  ></i>
                </Link>
              </Button>
              <Button
                onClick={(e) => {
                  selectDifficulty(20);
                  handleClose();
                }}
                variant="warning"
              >
                <Link
                  className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                  href={selectedRoute}
                >
                  Medium
                  <i
                    className="fas fa-arrow-right text-sm ms-1"
                    aria-hidden="true"
                  ></i>
                </Link>
              </Button>
              <Button
                onClick={(e) => {
                  selectDifficulty(40);
                  handleClose();
                }}
                variant="danger"
              >
                <Link
                  className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                  href={selectedRoute}
                >
                  Hard
                  <i
                    className="fas fa-arrow-right text-sm ms-1"
                    aria-hidden="true"
                  ></i>
                </Link>
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  });

  /**
   *
   */

  return renderedCard;
};

export default OverViewCard;
