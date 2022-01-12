import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import { Input } from "antd";
export default function FormEditProject() {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    alert("submit edit");
  };
  useEffect(() => {
    dispatch({
      type: "SET_SUBMIT_EDIT_PROJECT",
      submitFunction: submitForm,
    });
  }, []);
  const handleEditorChange = (e) => {
    e.preventDefault();
  };
  return (
    <form className="container-fuild" onSubmit={submitForm}>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="id" className="font-weight-bold">
              Project id
            </label>
            <Input disabled name="id" id="id" />
            {/* <input disabled className="form-control" name="id" id="id" /> */}
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="projectName" className="font-weight-bold">
              Project name
            </label>
            <Input name="projectName" id="projectName" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="projectCategory" className="font-weight-bold">
              Project Category
            </label>
            <Input name="projectCategory" id="projectCategory" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <p className="font-weight-bold">Description</p>
            <Editor
              name="description123"
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
