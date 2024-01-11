import React from "react";

{
  /*Lacks scripts from original dashboard source */
}
const UIOptions = () => {
  return (
    <div className="fixed-plugin">
      <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
        <i className="fa fa-cog py-2"> </i>
      </a>
      <div className="card shadow-lg ">
        <div className="card-header pb-0 pt-3 ">
          <div className="float-start">
            <h5 className="mt-3 mb-0">Soft UI Configurator</h5>
            <p>See our dashboard options.</p>
          </div>
          <div className="float-end mt-4">
            <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
              <i className="fa fa-close"></i>
            </button>
          </div>
          {/*<!-- End Toggle Button -->*/}
        </div>
        <hr className="horizontal dark my-1" />
        <div className="card-body pt-sm-3 pt-0">
          {/*<!-- Sidebar Backgrounds -->*/}
          <div>
            <h6 className="mb-0">Sidebar Colors</h6>
          </div>
          <a
            href="javascript:void(0)"
            className="switch-trigger background-color"
          >
            <div className="badge-colors my-2 text-start">
              <span
                className="badge filter bg-gradient-primary active"
                data-color="primary"
                onclick="sidebarColor(this)"
              ></span>
              <span
                className="badge filter bg-gradient-dark"
                data-color="dark"
                onclick="sidebarColor(this)"
              ></span>
              <span
                className="badge filter bg-gradient-info"
                data-color="info"
                onclick="sidebarColor(this)"
              ></span>
              <span
                className="badge filter bg-gradient-success"
                data-color="success"
                onclick="sidebarColor(this)"
              ></span>
              <span
                className="badge filter bg-gradient-warning"
                data-color="warning"
                onclick="sidebarColor(this)"
              ></span>
              <span
                className="badge filter bg-gradient-danger"
                data-color="danger"
                onclick="sidebarColor(this)"
              ></span>
            </div>
          </a>
          {/*<!-- Sidenav Type -->*/}
          <div className="mt-3">
            <h6 className="mb-0">Sidenav Type</h6>
            <p className="text-sm">Choose between 2 different sidenav types.</p>
          </div>
          <div className="d-flex">
            <button
              className="btn bg-gradient-primary w-100 px-3 mb-2 active"
              data-className="bg-transparent"
              onclick="sidebarType(this)"
            >
              Transparent
            </button>
            <button
              className="btn bg-gradient-primary w-100 px-3 mb-2 ms-2"
              data-className="bg-white"
              onclick="sidebarType(this)"
            >
              White
            </button>
          </div>
          <p className="text-sm d-xl-none d-block mt-2">
            You can change the sidenav type just on desktop view.
          </p>
          {/*Navbar Fixed */}
          <div className="mt-3">
            <h6 className="mb-0">Navbar Fixed</h6>
          </div>
          <div className="form-check form-switch ps-0">
            <input
              className="form-check-input mt-1 ms-auto"
              type="checkbox"
              id="navbarFixed"
              onclick="navbarFixed(this)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIOptions;
