import React, { useState, useEffect } from "react";

const NavBar = ({ user, navbarPinned, selectNavBarPinned }) => {
  const [query, setQuery] = useState("");
  const [where, setWhere] = useState("Home");

  useEffect(() => {
    console.log("Hello sidebar");
    var where =
      window.location.pathname === "/"
        ? "Home"
        : window.location.pathname === "/assessments"
        ? "Assessments"
        : window.location.pathname === "/profile"
        ? "Profile"
        : window.location.pathname === "/query"
        ? "Query"
        : "Result";
    setWhere(where);
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("query", query);
    window.location.assign("/query");
  };

  const onTextchange = (e) => {
    setQuery(e);
  };

  return (
    <nav
      className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
      id="navbarBlur"
      navbar-scroll="true"
    >
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm">
              <a className="opacity-5 text-dark" href="/">
                Brain Train
              </a>
            </li>
            <li
              className="breadcrumb-item text-sm text-dark active"
              aria-current="page"
            >
              {where}
            </li>
          </ol>
          <h6 className="font-weight-bolder mb-0">{where}</h6>
        </nav>
        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text text-body">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
              <form
                onSubmit={(e) => {
                  onFormSubmit(e);
                }}
              >
                <input
                  onChange={(e) => {
                    onTextchange(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Search here..."
                />
              </form>
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center"></li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a
                onClick={(e) => {
                  selectNavBarPinned(!navbarPinned);
                }}
                className="nav-link text-body p-0"
                id="iconNavbarSidenav"
              >
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
