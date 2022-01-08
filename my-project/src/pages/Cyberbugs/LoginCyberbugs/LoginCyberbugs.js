import React from "react";
import { Button, Input } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import "./LoginCyberbugs.css";
import { signInCyberBugAction } from "../../../redux/actions/CyberBugAction";
function LoginCyberbugs(props) {
  const { values, touched, errors, handleChange, handleSubmit } = props;
  console.log(props);
  return (
    <>
      <div className="container-fluid" style={{ minHeight: 800 }}>
        <div className="row" style={{ minHeight: 800 }}>
          <div className="col-xl-9 col-lg-6 col-sm-6 col-12 bg-login"></div>
          <form
            className="col-xl-3 col-lg-6 col-sm-6 col-12 text-center"
            onSubmit={handleSubmit}
          >
            <div className="mt-2">
              <h4 className="text-center mt-md-5 text-danger text-uppercase">
                Login Jira
              </h4>
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

  handleSubmit: ({ email, password }, { props, setSubmitting }) => {
    console.log(email, password);
    console.log(props);
    props.dispatch(signInCyberBugAction(email, password));
  },

  displayName: "BasicForm",
})(LoginCyberbugs);

export default connect()(LoginWithFormMik);
