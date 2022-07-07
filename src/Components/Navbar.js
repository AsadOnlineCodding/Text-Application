import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg nav navbar-${props.mode1}  bg-${props.mode1}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Asad Online Codding
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active"href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"href="#">
                about
              </a>
            </li>
          </ul>
          <div
            class={`form-check form-switch text-${
              props.mode1 === "dark" ? "white" : "black"
            }`}
            onClick={props.toggleMode}
          >
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault "
            />
            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.mode}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
