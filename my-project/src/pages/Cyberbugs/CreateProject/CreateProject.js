import { Button, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
import { Editor } from "@tinymce/tinymce-react";
export default function CreateProject(props) {
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    console.log("Content was updated:", editor);
  };

  return (
    <div className="main">
      <h6 className="text-center text-primary mt-2 text-uppercase">
        Create Project
      </h6>
      <form className="container">
        <div className="form-group">
          <p>Name</p>
          <Input className="form-control" name="projectName" />
        </div>
        <div className="form-group">
          <p>Description</p>
          <Editor
            name="description"
            initialValue=""
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
          <Select name="categoryId" className="w-100">
            <Option>Software</Option>
            <Option>Web</Option>
            <Option>App</Option>
          </Select>
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
