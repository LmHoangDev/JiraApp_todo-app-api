import React from "react";
import { NavLink } from "react-router-dom";
export default function SidebarCyberbugs() {
  return (
    <div className="sideBar">
      <div className="sideBar-top">
        <div className="sideBar-icon text-center">
          <NavLink to="/" className="text-light">
            <i className="fab fa-jira" />
            <span className="title">Jira App</span>
          </NavLink>
        </div>
        <div className="sideBar-icon text-center">
          <NavLink to="/" className="text-light">
            <i className="fa fa-search" />
            <span className="title">Search</span>
          </NavLink>
        </div>
        <div className="sideBar-icon text-center">
          <NavLink to="/" className="text-light">
            <i className="fa fa-plus" />
            <span className="title">Create</span>
          </NavLink>
        </div>{" "}
        <div className="sideBar-icon text-center">
          <NavLink to="/" className="text-light">
            <i className="fa fa-question-circle" />
            <span className="title">About</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
