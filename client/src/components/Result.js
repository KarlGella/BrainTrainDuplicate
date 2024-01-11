import axios from "axios";
import cookieSession from "cookie-session";
import React, { useEffect } from "react";
import Link from "./Link";

const Result = ({
  user,
  difficulty,
  quarter,
  questions,
  testData,
  score,
  time,
  minute,
  setReset,
}) => {
  useEffect(() => {
    var totalAttempts = 0;
    console.log("reslrs are: ");
    console.log(score);
    switch (quarter) {
      case 1:
        totalAttempts = user.firstAttempts;
        console.log(score);
        if (difficulty === 10) {
          if (user.firstHighEasy) {
            score = score > user.firstHighEasy ? score : user.firstHighEasy;
          }
        } else if (difficulty === 20) {
          if (user.firstHighEasy) {
            score = score > user.firstHighMedium ? score : user.firstHighMedium;
          }
        } else if (difficulty === 40) {
          if (user.firstHighEasy) {
            score = score > user.firstHighHard ? score : user.firstHighHard;
          }
        }
        break;

      case 2:
        totalAttempts = user.secondAttempts;
        if (difficulty === 10) {
          if (user.firstHighEasy) {
            score = score > user.secondHighEasy ? score : user.secondHighEasy;
          }
        } else if (difficulty === 20) {
          if (user.firstHighEasy) {
            score =
              score > user.secondHighMedium ? score : user.secondHighMedium;
          }
        } else if (difficulty === 40) {
          if (user.firstHighEasy) {
            score = score > user.secondHighHard ? score : user.secondHighHard;
          }
        }
        break;
      case 3:
        totalAttempts = user.thirdAttempts;
        if (difficulty === 10) {
          if (user.firstHighEasy) {
            score = score > user.thirdHighEasy ? score : user.thirdHighEasy;
          }
        } else if (difficulty === 20) {
          if (user.firstHighEasy) {
            score = score > user.thirdHighMedium ? score : user.thirdHighMedium;
          }
        } else if (difficulty === 40) {
          if (user.firstHighEasy) {
            score = score > user.thirdHighHard ? score : user.thirdHighHard;
          }
        }
        break;

      case 4:
        totalAttempts = user.fourthAttempts;
        if (difficulty === 10) {
          if (user.firstHighEasy) {
            score = score > user.fourthHighEasy ? score : user.fourthHighEasy;
          }
        } else if (difficulty === 20) {
          if (user.firstHighEasy) {
            score =
              score > user.fourthHighMedium ? score : user.fourthHighMedium;
          }
        } else if (difficulty === 40) {
          if (user.firstHighEasy) {
            score = score > user.fourthHighHard ? score : user.fourthHighHard;
          }
        }
        console.log("end is:");
        console.log(score);
        break;
    }

    axios
      .post("api/score", {
        email: user.email,
        quarter: quarter,
        score: score,
        attempts: totalAttempts,
        difficulty: difficulty,
      })
      .then((res) => {
        setReset(score);
      });
  }, []);

  var medals = [];

  if (minute < 20) {
    medals.push(20);
  }
  if (minute < 15) {
    medals.push(15);
  }
  if (minute < 10) {
    medals.push(10);
  }

  axios
    .post("api/medals", {
      email: user.email,
      medals: medals,
    })
    .then((res) => {});

  const renderAnswers = questions.map((item, index) => {
    var answer =
      testData[item - 1].ans === "a"
        ? testData[item - 1].a
        : testData[item - 1].ans === "b"
        ? testData[item - 1].b
        : testData[item - 1].ans === "c"
        ? testData[item - 1].c
        : testData[item - 1].d;

    if (index < difficulty) {
      return (
        <div className="col-lg-12 mt-4">
          <div
            className=" card h-100 p-3 "
            style={{ backgroundColor: "#CB0C9F" }}
          >
            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100 bg-white">
              <span className="mask bg-gradient-dark"></span>
              <div
                className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3"
                style={{ backgroundColor: "white" }}
              >
                <h5 className="  font-weight-bolder mb-4 pt-2">
                  {`Question ${index + 1}`}
                </h5>
                <p className=" ">{testData[item - 1].q}</p>
                <p className=" ">Correct Answer:</p>
                <p className=" ">{`${testData[item - 1].ans}. ${answer}`}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  const renderedMedals = medals.map((item) => {
    return (
      <>
        <li className="list-inline-item">
          <img src={`img/${item}.png`} />
        </li>
      </>
    );
  });

  return (
    <>
      <div className="row">
        <div className="col-lg-6 mt-4">
          <div
            className=" card h-100 p-3 "
            style={{ backgroundColor: "#CB0C9F" }}
          >
            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100 bg-white">
              <span className="mask bg-gradient-dark"></span>
              <div
                className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3"
                style={{ backgroundColor: "white" }}
              >
                <div className="row">
                  <div className="col-xl-6 col-md-6 mb-xl-0 mb-4">
                    <div>
                      <div className="card-body px-1 pb-0">
                        <h4 className=" font-weight-bolder mb-4">
                          Assessment Result:
                        </h4>
                        <h5 className="  font-weight-bolder">
                          Time taken: {time}
                        </h5>
                        <h5 className="  font-weight-bolder">
                          {/*insertScoreRemark()*/}
                        </h5>
                        <p className=" ">
                          <span>{score}</span> out of <span>{difficulty}</span>{" "}
                          points
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6 mb-xl-0 mb-4">
                    <div>
                      <div className="card-body px-1 pb-0">
                        <h4 className=" font-weight-bolder mb-4">
                          {" "}
                          {`${(score / difficulty) * 100}%`}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4">
          <div
            className=" card h-100 p-3"
            style={{ backgroundColor: "#CB0C9F" }}
          >
            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100 bg-white">
              <span className="mask bg-gradient-dark"></span>
              <div
                className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3"
                style={{ backgroundColor: "white" }}
              >
                <h4 className="  font-weight-bolder mb-4 pt-4">
                  Acquired medals in this assessment:
                </h4>

                <ul className="list-inline-group">{renderedMedals}</ul>
              </div>
            </div>
          </div>
        </div>
        {renderAnswers}
        <div className="col-lg-12 mt-4">
          <div
            className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3"
            style={{ backgroundColor: "white" }}
          >
            <ul className="list-inline">
              <li className="list-inline-item">
                {" "}
                <Link className=" " href="/assessments">
                  <button
                    id="goToAssessmentBtn float-start"
                    className="btn bg-gradient-secondary mb-0 px-2 text-white"
                    type="button"
                  >
                    <i
                      className="fas fa-arrow-left text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                    Practice assessments{" "}
                  </button>
                </Link>
              </li>
              <li className="list-inline-item float-end">
                <Link href="/test">
                  <button
                    id="retakeBtn"
                    className="btn bg-gradient-primary mb-0 px-2 text-white"
                    type="button"
                  >
                    Retake assessment
                    <i
                      className="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
