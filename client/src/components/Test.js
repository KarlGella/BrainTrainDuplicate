import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStopwatch } from "react-timer-hook";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Link from "./Link";
import Button from "@restart/ui/esm/Button";

const Test = ({
  difficulty,
  quarter,
  selectQuestions,
  selectTestData,
  selectTotalScore,
  selectTime,
  selectMinute,
}) => {
  const { seconds, minutes, start, pause } = useStopwatch({
    autoStart: true,
  });

  const totalNum = difficulty;
  const numberOfQuestions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  ];
  const [num, selectNum] = useState(0);
  const [testQuestions, selectTestQuestions] = useState([]);
  const [pageNum, selectPageNum] = useState(numberOfQuestions[num]);
  const [ranNums, selectRanNums] = useState([1, 2, 3]);
  const [activeRadio, selectActiveRadio] = useState(null);
  const [score, selectScore] = useState(0);
  const [answer, selectAnswer] = useState("");

  const [show, setShow] = useState(false);
  const [noShow, setNoShow] = useState(false);

  const handleClose = () => (setShow(false), start());
  const handleShow = () => setShow(true);

  const handleNoClose = () => (setNoShow(false), start());
  const handleNoShow = () => setNoShow(true);

  const activeQuestion = ranNums[pageNum - 1] - 1;

  var choices = [];
  var currentQuestion = "";
  var ifImage = null;
  var imageChoice = false;

  //Question randomizer
  useEffect(() => {
    const shuffle = (array) => {
      var i = array.length,
        j = 0,
        temp;

      while (i--) {
        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return array;
    };

    var randNums = shuffle([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80,
    ]);
    selectRanNums(randNums);
    selectQuestions(randNums);

    //Axios request
    axios.get(`/api/find_questions${quarter}`).then((res) => {
      const questions = res.data;
      selectTestQuestions(questions);
      selectTestData(questions);
    });

    onButtonClick();
  }, []);

  //Removes radio after answer
  useEffect(() => {
    selectActiveRadio(null);
  }, [activeRadio]);

  useEffect(() => {
    selectTotalScore(score);
  }, [score]);

  //Display
  if (testQuestions.length !== 0) {
    choices = [
      { option: "a", term: testQuestions[activeQuestion].a },
      { option: "b", term: testQuestions[activeQuestion].b },
      { option: "c", term: testQuestions[activeQuestion].c },
      { option: "d", term: testQuestions[activeQuestion].d },
    ];
    currentQuestion = testQuestions[activeQuestion].q;

    if (testQuestions[activeQuestion].img == true) {
      ifImage = (
        <img src={`img/q${quarter}/${testQuestions[activeQuestion].num}.png`} />
      );
    }

    if (testQuestions[activeQuestion].imgChoice == true) {
      imageChoice = true;
    } else {
      imageChoice = false;
    }
  }

  //Button click
  const onButtonClick = () => {
    if (answer === "" && num !== 0) {
      pause();

      handleNoShow();
    } else if (num < totalNum) {
      selectNum(num + 1);
      selectPageNum(numberOfQuestions[num]);
      selectActiveRadio(false);

      if (testQuestions.length !== 0) {
        answer === testQuestions[activeQuestion].ans
          ? selectScore(score + 1)
          : selectScore(score + 0);
      }
    } else {
      selectActiveRadio(false);

      answer === testQuestions[activeQuestion].ans
        ? selectScore(score + 1)
        : selectScore(score + 0);

      selectTotalScore(score);

      pause();
      selectMinute(minutes);
      selectTime(`${minutes}:${seconds}`);
      handleShow();
    }
    selectAnswer("");
  };

  //Render pageions
  const renderedItems = numberOfQuestions.map((num, index) => {
    const active = index === pageNum - 1 ? "active" : "disabled";
    if (index > totalNum - 1) {
      return;
    }
    return (
      <>
        <li className="list-inline-item">
          <button className={`btn btn-outline-success btn-sm ${active} `}>
            {num}
          </button>
        </li>
      </>
    );
  });

  //When clicking answer choice
  const onRadioChange = (e) => {
    selectAnswer(e.target.value);

    selectActiveRadio(null);
  };

  //Render radio choices
  const renderedChoices = choices.map((choice) => {
    if (`${choice.term}` === "undefined") {
      return;
    }

    if (imageChoice == true) {
      return (
        <div>
          <input
            checked={activeRadio}
            onChange={(e) => onRadioChange(e)}
            name="group1"
            type="radio"
            value={choice.option}
          />

          <img
            src={`img/q${quarter}/${testQuestions[activeQuestion].num}${choice.term}.png`}
          />
        </div>
      );
    } else {
      return (
        <div>
          <input
            checked={activeRadio}
            onChange={(e) => onRadioChange(e)}
            name="group1"
            type="radio"
            value={choice.option}
          />

          {` ${choice.option}. ${choice.term}`}
        </div>
      );
    }
  });

  const onNext =
    num < totalNum ? (
      <>
        {" "}
        <li className="list-inline-item">
          <button
            onClick={(e) => onButtonClick()}
            className="btn btn-outline-success btn-rounded btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#modal-default"
          >
            next
          </button>
        </li>
      </>
    ) : (
      <li className="list-inline-item">
        <button
          onClick={(e) => onButtonClick()}
          className="btn btn-outline-success btn-rounded btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#modal-default"
        >
          Submit
        </button>
      </li>
    );

  //Main return
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12 mt-4">
          <div className="card mb-4">
            <div className="card-header pb-0 p-3">
              <p className="text-center">
                Time: <span>{minutes}</span>:<span>{seconds}</span>
              </p>
              <p className="text-center">
                Question <span>{pageNum}</span> of {totalNum}
              </p>

              <p className="text-start ">{currentQuestion}</p>
            </div>
            <div className=" p-3 d-flex justify-content-center">{ifImage}</div>
            <div className="card-body p-3 d-flex justify-content-center">
              <div className="row d-flex justify-content-left">
                <div>
                  <Form>{renderedChoices}</Form>
                </div>
                <ul className="pagination-success pagination-sm justify-content-center">
                  {renderedItems}
                  {onNext}
                </ul>
              </div>
            </div>
            {/**Pop-up here */}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Check your Answers?</Modal.Body>
        <Modal.Footer>
          <Link href="/result">
            <Button> Yes</Button>
          </Link>
          <Button>No</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={noShow} onHide={handleNoClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have not selected an answer</Modal.Body>
      </Modal>
    </div>
  );
};

export default Test;
