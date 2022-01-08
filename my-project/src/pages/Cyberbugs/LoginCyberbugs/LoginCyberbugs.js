import React from "react";
import { Button, Input } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
function LoginCyberbugs(props) {
  const { values, touched, errors, handleChange, handleSubmit } = props;
  console.log(props);
  return (
    <>
      <div
        className="container-fluid"
        style={{ minHeight: window.innerHeight }}
      >
        <div className="row" style={{ minHeight: window.innerHeight }}>
          <div
            className="col-md-9"
            style={{
              backgroundImage: "url('https://picsum.photos/id/232/200/300')",
            }}
          ></div>
          <form className="col-md-3 text-center" onSubmit={handleSubmit}>
            <div className="p-2">
              <h3 className="text-center mt-md-5 text-danger">Login JiraApp</h3>
              <div className="form-group">
                <Input
                  size="large"
                  placeholder="Email Address"
                  prefix={<UserOutlined />}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="text-danger">
                {touched.email ? errors.email : ""}
              </div>
              <div className="form-group">
                <Input
                  size="large"
                  placeholder="Password"
                  prefix={<KeyOutlined />}
                  name="password"
                  type="password"
                  onChange={handleChange}
                />
              </div>
              <div className="text-danger">
                {touched.password ? errors.password : ""}
              </div>
              <div className="form-group">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="d-block w-100"
                >
                  LOGIN
                </Button>
              </div>
              <div className="form-group d-flex justify-content-center">
                <i class="fab fa-facebook bg-primary text-light mr-2"></i>
                <i class="fab fa-twitter bg-primary text-light"></i>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
const LoginWithFormMik = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),

  // Custom sync validation
  validationSchema: Yup.object({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid"),
    password: Yup.string()
      .min(8, "Minimum 6 characters")
      .required("Password is required!")
      .max(32, "Maximum 32 characters"),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
  },

  displayName: "BasicForm",
})(LoginCyberbugs);

export default LoginWithFormMik;
