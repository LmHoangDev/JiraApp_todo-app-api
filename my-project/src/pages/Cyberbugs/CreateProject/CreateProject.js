import { Editor } from "@tinymce/tinymce-react";
import { Button, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { withFormik } from "formik";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { CREATE_PROJECT_SAGA } from "../../../redux/constants/Cyberbugs/Cyberbugs";
function CreateProject(props) {
  const dispatch = useDispatch();
  const arrProjectCategory = useSelector(
    (state) => state.ProjectCategoryReducer.arrProjectCategory
  );
  console.log("kết quả", arrProjectCategory);
  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
  } = props;
  const handleEditorChange = (content, editor) => {
    setFieldValue("description", content);
  };
  useEffect(() => {
    //Gọi api để lấy dữ liệu thẻ select
    dispatch({ type: "GET_ALL_PROJECT_CATEGORY_SAGA" });
  }, []);

  return (
    <div className="main">
      <h6 className="text-center text-primary mt-2 text-uppercase">
        Create Project
      </h6>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <p>Name</p>
          <Input
            className="form-control"
            name="projectName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <p>Description</p>
          <Editor
            name="description"
            initialValue={values.description}
            value={values.description}
            init={{
              height: 300,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help",
            }}
            onEditorChange={handleEditorChange}
            style={{ overFlow: "scroll" }}
          />
        </div>
        <div className="form-group">
          <select
            name="categoryId"
            onChange={handleChange}
            className="form-control"
            style={{ fontSize: "14px", padding: "0 15px" }}
          >
            {arrProjectCategory?.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.projectCategoryName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <Button
            type="primary"
            className="btn btn-outline-primary"
            htmlType="submit"
          >
            Create project
          </Button>
        </div>
      </form>
    </div>
  );
}
const createProjectForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    projectName: "",
    description: "",
    categoryId: props.arrProjectCategory[0]?.id,
  }),
  validationSchema: Yup.object().shape({}),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.dispatch({
      type: CREATE_PROJECT_SAGA,
      newProject: values,
    });
  },
  displayName: "CreateProjectFormik",
})(CreateProject);
const mapStateToProps = (state) => ({
  arrProjectCategory: state.ProjectCategoryReducer.arrProjectCategory,
});

export default connect(mapStateToProps)(createProjectForm);
