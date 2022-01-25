import React from "react";

export default function RegisterCyberbugs() {
  //      "email": "string",
  //   "passWord": "string",
  //   "name": "string",
  //   "phoneNumber": "string"
  return (
    <div className="container">
      <div
        style={{
          background: "linear-gradient(#e66465, #9198e5)",
          maxWidth: "500px",
          margin: "0 auto",
          borderRadius: "10px",
        }}
        className="text-light"
      >
        <h3 className="text-center text-light mt-4 pt-3">Jira Register</h3>
        <form className="px-5 py-3">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              style={{ fontSize: "14px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              style={{ fontSize: "14px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              style={{ fontSize: "14px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter phone"
              style={{ fontSize: "14px" }}
            />
          </div>
          <div className="form-group text-center">
            <button
              type="submit"
              className="btn btn-primary text-light text-center w-40"
              style={{ fontSize: "14px", padding: "10px 60px" }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
