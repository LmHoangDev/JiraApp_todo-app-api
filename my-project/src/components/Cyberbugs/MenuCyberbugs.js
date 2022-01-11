import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuCyberbugs() {
  return (
    <div className="menu">
      <div className="account">
        <div className="avatar">
          <img src={require("../../assets/img/download.jfif")} alt="" />
        </div>
        <div className="account-info ml-2">
          <NavLink
            to="https://github.com/LmHoangDev/todo-app-api"
            className="text-dark"
            activeClassName="font-weight-bold"
            target="_blank"
          >
            LM SHOP
          </NavLink>
          <br />
          <NavLink
            to="/"
            className="text-dark"
            activeClassName="font-weight-bold"
          >
            Report bugs
          </NavLink>
        </div>
      </div>
      <div className="control">
        <div>
          <NavLink to="cyberbug" activeClassName="font-weight-bold">
            <i className="fa fa-credit-card" />
            <span>Cyber Board</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="create-project" activeClassName="font-weight-bold">
            <i className="fa fa-cog" />
            <span>Create Project</span>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="projectmanage"
            activeClassName="font-weight-bold"
            className="d-block"
          >
            <i class="fas fa-tasks"></i>
            <span>Projects</span>
          </NavLink>
        </div>
      </div>
      <div className="feature">
        <div>
          <i className="fa fa-truck" />
          <span>Releases</span>
        </div>
        <div>
          <i className="fa fa-equals" />
          <span>Issues and filters</span>
        </div>
        <div>
          <i className="fa fa-paste" />
          <span>Pages</span>
        </div>
        <div>
          <i className="fa fa-location-arrow" />
          <span>Reports</span>
        </div>
        <div>
          <i className="fa fa-box" />
          <span>Components</span>
        </div>
      </div>
    </div>
  );
}
