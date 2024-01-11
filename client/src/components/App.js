import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollBar from "react-perfect-scrollbar";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar";
import Footer from "./Footer";
import OverView from "./OverView";
import Dashboard from "./Dashboard";
import Route from "./Route";
import SignIn from "./SignIn";
import Categories from "./Modules/Categories";
import Lessons from "./Modules/Lessons";
import Test from "./Test";
import Result from "./Result";
import Profile from "./Profile";
import QueryResult from "./QueryResult";
import Recover from "./Recover";

import "react-perfect-scrollbar/dist/css/styles.css";

const App = () => {
  const [lessonNum, selectLessonNum] = useState(0);
  const [lessonMax, selectLessonMax] = useState(0);
  const [header, selectHeader] = useState("");
  const [difficulty, selectDifficulty] = useState(10);
  const [quarter, selectQuarter] = useState(1);
  const [user, selectUser] = useState([{}]);
  const [questions, selectQuestions] = useState([]);
  const [testData, selectTestData] = useState([]);
  const [totalScore, selectTotalScore] = useState(0);
  const [time, selectTime] = useState("");
  const [minute, selectMinute] = useState(0);
  const [navbarPinned, selectNavBarPinned] = useState(false);
  const [reset, setReset] = useState(0);

  useEffect(() => {
    axios.get(`/api/current_user`).then((res) => {
      selectUser(res.data);
    });
  }, [reset]);

  if (user.email === undefined) {
    console.log("hello aat outside");
    localStorage.setItem("auth", "guest");
  } else {
    console.log("hello outside user");
    localStorage.setItem("auth", "user");
  }

  const pin = navbarPinned === true ? "g-sidenav-pinned" : "";

  if (
    window.location.pathname === "/sign-in" ||
    window.location.pathname === "/sign-up" ||
    window.location.pathname === "/forgotPass" ||
    window.location.pathname === "/recover"
  ) {
    return (
      <>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignIn />
        </Route>
        <Route path="/forgotPass">
          <SignIn />
        </Route>
        <Route path="/recover">
          <Recover />
        </Route>
      </>
    );
  } else {
    return (
      <body className={`g-sidenav-show ${pin} `}>
        <ScrollBar component="body">
          <SideBar user={user} />
          <main
            className="main-content position-relative  h-100 mt-1 border-radius-lg "
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <NavBar
              user={user}
              navbarPinned={navbarPinned}
              selectNavBarPinned={selectNavBarPinned}
            />
            <Route path="/">
              <Dashboard />
            </Route>

            <Route path="/assessments">
              <OverView
                selectDifficulty={selectDifficulty}
                selectQuarter={selectQuarter}
              />
            </Route>

            <Route path="/categories">
              <Categories
                selectLessonNum={selectLessonNum}
                selectLessonMax={selectLessonMax}
                selectHeader={selectHeader}
              />
            </Route>
            <Route path="/lesson">
              <Lessons
                lessonNum={lessonNum}
                lessonMax={lessonMax}
                header={header}
              />
            </Route>

            <Route path="/test">
              <Test
                difficulty={difficulty}
                quarter={quarter}
                selectQuestions={selectQuestions}
                selectTestData={selectTestData}
                selectTotalScore={selectTotalScore}
                selectTime={selectTime}
                selectMinute={selectMinute}
              />
            </Route>

            <Route path="/result">
              <Result
                user={user}
                difficulty={difficulty}
                quarter={quarter}
                questions={questions}
                testData={testData}
                score={totalScore}
                time={time}
                minute={minute}
                setReset={setReset}
              />
            </Route>

            <Route path="/profile">
              <Profile user={user} />
            </Route>

            <Route path="/query">
              <QueryResult />
            </Route>

            <Footer />
          </main>
        </ScrollBar>
      </body>
    );
  }
};

export default App;
