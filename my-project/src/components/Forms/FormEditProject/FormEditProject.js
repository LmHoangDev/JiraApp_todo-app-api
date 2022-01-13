import { Editor } from "@tinymce/tinymce-react";
import { Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { withFormik } from "formik";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
function FormEditProject(props) {
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
  useEffect(() => {
    //Gọi api để lấy dữ liệu thẻ select
    dispatch({ type: "GET_ALL_PROJECT_CATEGORY_SAGA" });
    //
    dispatch({
      type: "SET_SUBMIT_EDIT_PROJECT",
      submitFunction: handleSubmit,
    });
  }, []);
  const handleEditorChange = (content, editor) => {
    setFieldValue("description", content);
  };
  return (
    <form className="container-fuild" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="id" className="font-weight-bold">
              Project id
            </label>
            <Input disabled name="id" value={values.id} id="id" />
            {/* <input disabled className="form-control" name="id" id="id" /> */}
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="projectName" className="font-weight-bold">
              Project name
            </label>
            <Input
              name="projectName"
              id="projectName"
              onChange={handleChange}
              value={values.projectName}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="projectCategory" className="font-weight-bold">
              Project Category
            </label>
            <select
              name="categoryId"
              value={values.categoryId}
              onChange={handleChange}
              style={{ padding: "0 10px", fontSize: "14px", borderRadius: 0 }}
              className="form-control"
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
        </div>
        <div className="col-12">
          <div className="form-group">
            <p className="font-weight-bold">Description</p>
            <Editor
              name="description123"
              initialValue={values.categoryId}
              value={values.description}
              init={{
                selector: "textarea#myTextArea",

                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={handleEditorChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
const EditProjectFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { projectEdit } = props;

    return {
      id: projectEdit?.id,
      projectName: projectEdit.projectName,
      description: projectEdit.description,
      categoryId: projectEdit.categoryId,
    };
  },
  validationSchema: Yup.object().shape({}),
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("values:", values);
    props.dispatch({
      type: "UPDATE_PROJECT_SAGA",
      projectUpdate: values,
    });
  },
  displayName: "CreateProjectFormik",
})(FormEditProject);
const mapStateToProps = (state) => ({
  projectEdit: state.ProjectReducer.projectEdit,
});

export default connect(mapStateToProps)(EditProjectFormik);
