import React from "react";

const Footer = () => {
  return (
    <footer className="footer pt-3  ">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              <a
                style={{ color: "gray", textDecoration: "none" }}
                href="/Content_References.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                References
              </a>{" "}
              © 2021
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
