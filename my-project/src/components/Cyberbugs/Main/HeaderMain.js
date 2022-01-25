import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderMain(props) {
  const { projectDetail } = props;
  const logOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("USER_LOGIN");
  };
  return (
    <div className="header">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb" style={{ backgroundColor: "white" }}>
          <li className="breadcrumb-item">Project</li>
          <li className="breadcrumb-item">CyberLearn</li>
          <li className="breadcrumb-item">Project management</li>
          <li
            className="breadcrumb-item active text-danger font-weight-bold"
            aria-current="page"
          >
            {projectDetail.projectName}
          </li>
          <li className="log-out ml-auto">
            <NavLink to="/login" className="text-danger" onClick={logOut}>
              Log out
            </NavLink>
          </li>
        </ol>
      </nav>
    </div>
  );
}
