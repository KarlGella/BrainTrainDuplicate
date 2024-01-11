import React from "react";
import SignInCard from "./Card/SignInCard";
import SignUpCard from "./Card/SignUpCard";
import ForgotPassCard from "./Card/ForgotPassCard";

const SignIn = () => {
  const navItems = [
    { hRef: "./", route: "Home", icon: "fa fa-home opacity-6 text-dark me-1" },
    {
      hRef: "/modules.html",
      route: "Modules",
      icon: "fa fa-book opacity-6 text-dark me-1",
    },
    {
      hRef: "./assessments",
      route: "Practice Assessments",
      icon: "fa fa-pencil-square-o opacity-6 text-dark me-1",
    },
    {
      hRef: "./sign-up",
      route: "Sign Up",
      icon: "fas fa-user-circle opacity-6 text-dark me-1",
    },
    {
      hRef: "./sign-in",
      route: "Sign In",
      icon: "fas fa-key opacity-6 text-dark me-1",
    },
  ];

  const renderedItems = navItems.map((item) => {
    return (
      <li className="nav-item">
        <a
          className="nav-link d-flex align-items-center me-2 active"
          href={item.hRef}
        >
          <i className={item.icon}></i>
          {item.route}
        </a>
      </li>
    );
  });

  const bgImage =
    document.location.pathname === "/sign-up"
      ? ""
      : "/img/background/rocket.png";

  return (
    <body
      background={bgImage}
      className="body"
      style={{
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
    >
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            {/*  <!-- Navbar -->*/}
            <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
              <div className="container-fluid">
                <a
                  className="navbar-brand font-weight-bolder ms-lg-0 ms-3 "
                  href="/"
                >
                  Brain Train
                </a>
                <button
                  className="navbar-toggler shadow-none ms-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon mt-2">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="navigation">
                  <ul className="navbar-nav mx-auto">{renderedItems}</ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar -->*/}
          </div>
        </div>
      </div>
      <main className="main-content">
        <section>
          <div className="page-header min-vh-75">
            <div className="container">
              <div className="row">
                {window.location.pathname === "/sign-in" ? (
                  <SignInCard />
                ) : window.location.pathname === "/sign-up" ? (
                  <SignUpCard />
                ) : (
                  <ForgotPassCard />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default SignIn;
