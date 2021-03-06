import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todo">
                Todo Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dragdrop">
                Drag Drop
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=".."
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tasks
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/todo">
                  Todo Tasks
                </NavLink>
                <NavLink className="dropdown-item" to="/login">
                  Login
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
