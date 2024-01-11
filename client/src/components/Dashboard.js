import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="container-fluid py-4">
      <section id="section-one" style={{ margin: "15px" }}>
        <div className="row">
          <div className="col-lg-12 mb-lg-0 mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 bg">
                  <div className="position-relative d-flex align-items-center justify-content-center h-100">
                    <img
                      alt="bt-Background"
                      className="w-70 position-relative z-index-2 pt-4"
                      id="brain"
                      src="/img/background/brain.gif"
                    />
                  </div>
                </div>
                <div className="col-lg-6 ms-auto text-center mt-5 mt-lg-0 text">
                  <br />
                  <br />
                  <br />
                  <br />
                  <h1 className="text-center text-dark">BRAIN TRAIN</h1>
                  <p className="">
                    A Learning and Practice Application for Grade 7 English
                    Students
                  </p>
                  <br />
                  <br />
                  <a
                    href="#section-two"
                    id="explore"
                    role="button"
                    className="btn w-100 my-4"
                    style={{ backgroundColor: "#B6C9F0", color: "black" }}
                  >
                    Let's Explore!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-two">
        <div
          className="row section-two"
          style={{
            backgroundImage: "url(img/background/body.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            textAlign: "center",
          }}
        >
          <div className="col-lg-12 mb-lg-0 mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 bg">
                  <div className="position-relative d-flex align-items-center justify-content-center h-100">
                    <img
                      alt="kids"
                      className="w-90 position-relative z-index-2 pt-4"
                      id="brain"
                      src="/img/background/kids.png"
                    />
                  </div>
                </div>
                <div className="col-lg-6 ms-auto text-center mt-5 mt-lg-0 text">
                  <img
                    alt="assessments"
                    className="w-90 position-relative z-index-2 pt-4"
                    id="brain"
                    src="/img/background/assessments.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="row section-three"
        style={{
          backgroundImage: "url(img/background/section-three.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <div className="col-lg-12 mb-lg-0 mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 bg">
                <div className="position-relative d-flex align-items-center justify-content-center h-100">
                  <img
                    alt="drills"
                    className="w-90 position-relative z-index-2 pt-4"
                    id="brain"
                    src="/img/background/drills.png"
                  />
                </div>
              </div>
              <div className="col-lg-6 ms-auto text-center mt-5 mt-lg-0 text">
                <img
                  alt="progress"
                  className="w-90 position-relative z-index-2 pt-4"
                  id="brain"
                  src="/img/background/progress.png"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <center>
          <a
            href="#section-three"
            id="team"
            type="button"
            className="btn w-auto my-4 text"
            style={{ backgroundColor: "#3D087B", color: "#f8f9fa" }}
          >
            Meet the Team!
          </a>
        </center>
        <br />
        <br />
      </div>
      <section id="section-three">
        <div
          className="row section-four"
          style={{
            backgroundImage: "url(img/background/section-four.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            textAlign: "center",
          }}
        >
          <p>&nbsp;</p>
          <h1 className="text-dark mt-5">Meet the Team!</h1>
          <p>&nbsp;</p>
          <div className="container">
            <div className="row">
              <div className="col intro">
                <span>
                  <img alt="" src="/img/background/N1_0011.png" />
                  <h1>Nicole</h1>
                  <p className="text-sm">
                    <b>Project Manager & Head UI Designer</b>
                  </p>
                </span>
              </div>
              <div className="col intro">
                <span>
                  <img alt="" src="/img/background/L1_0011.png" />
                  <h1>Lor</h1>
                  <p className="text-sm">
                    <b>Head Front-End Developer & Original Project Proponent</b>
                  </p>
                </span>
              </div>
              <div className="col intro">
                <span>
                  <img alt="" src="/img/background/K1_0011.png" />
                  <h1>Karl</h1>
                  <p className="text-sm">
                    <b>Head Back-End Developer & Technical Consultant</b>
                  </p>
                </span>
              </div>
              <div className="col intro">
                <span>
                  <img alt="" src="/img/background/J1_0011.png" />
                  <h1>Jermaine</h1>
                  <p className="text-sm">
                    <b>Head Quality Assurance Officer</b>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
