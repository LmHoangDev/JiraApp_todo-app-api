import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-white">
          <li className="nav-item active pl-2">
            <Link className="text-white" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item pl-2">
            <Link className="text-white" to="/todocc">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
