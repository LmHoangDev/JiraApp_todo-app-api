import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useState } from "react";
import { Select, Radio, Slider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { GET_ALL_TASK_TYPE_SAGA } from "../../../redux/constants/Cyberbugs/TaskTypeConstants";
import { GET_ALL_PRIORITY_SAGA } from "../../../redux/constants/Cyberbugs/PriorityConstants";
const { Option } = Select;

const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
export default function FormCreateTask(props) {
  const [size, setSize] = React.useState("default");

  const handleEditorChange = (content, editor) => {};
  const [timeTracking, setTimetracking] = useState({
    timeTrackingSpent: 0,
    timeTrackingRemaining: 0,
  });

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  const { projectList } = useSelector((state) => state.ProjectManageReducer);
  const { arrTaskType } = useSelector((state) => state.TaskTypeReducer);
  const { arrPriority } = useSelector((state) => state.PriorityReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "GET_ALL_PROJECT_MANAGE",
    });
    dispatch({
      type: GET_ALL_TASK_TYPE_SAGA,
    });
    dispatch({
      type: GET_ALL_PRIORITY_SAGA,
    });
  }, []);

  const children = [];
  return (
    <div className="container">
      <div className="form-group">
        <p>Project</p>
        <select
          name="projectId"
          className="form-control"
          style={{ fontSize: "14px" }}
        >
          {projectList.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.projectName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <p>Priority</p>
            <select
              name="priorityId"
              className="form-control"
              style={{ fontSize: "14px" }}
            >
              {arrPriority.map((item, index) => {
                return (
                  <option key={index} value={item.priorityId}>
                    {item.priority}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-6">
            <p>Task type</p>
            <select
              className="form-control"
              name="typeId"
              style={{ fontSize: "14px" }}
            >
              {arrTaskType.map((taskType, index) => {
                return (
                  <option key={index} value={taskType.id}>
                    {taskType.taskType}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <p>Assignees</p>
            <Select
              mode="multiple"
              size={size}
              options={[
                { value: "a12", label: "b12" },
                { value: "a12", label: "b12" },
                { value: "a12", label: "b12" },
              ]}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
              style={{ width: "100%", fontSize: "14px" }}
            >
              {children}
            </Select>
          </div>
          <div className="col-6">
            <p>Time Tracking</p>
            <Slider
              defaultValue={30}
              tooltipVisible
              value={timeTracking.timeTrackingSpent}
              max={
                Number(timeTracking.timeTrackingSpent) +
                Number(timeTracking.timeTrackingRemaining)
              }
            />
            <div className="row">
              <div
                className="col-6 text-left font-weight-bold"
                style={{ fontSize: "8px" }}
              >
                {timeTracking.timeTrackingSpent}h Logged
              </div>
              <div
                className="col-6 text-right font-weight-bold"
                style={{ fontSize: "8px" }}
              >
                {timeTracking.timeTrackingRemaining}h Remaining
              </div>
            </div>
          </div>

          <div className="col-6">
            <p>Original Estimate</p>
            <input
              type="number"
              min="0"
              name="originalEstimate"
              defaultValue="0"
              className="form-control"
              style={{ fontSize: "14px" }}
            />
          </div>
          <div className="col-3">
            <p>Time spent</p>
            <input
              type="number"
              defaultValue="0"
              min="0"
              className="form-control"
              name="timeTrackingSpent"
              onChange={(e) => {
                setTimetracking({
                  ...timeTracking,
                  timeTrackingSpent: e.target.value,
                });
              }}
              style={{ fontSize: "14px" }}
            />
          </div>
          <div className="col-3">
            <p>Time remaining</p>
            <input
              type="number"
              defaultValue="0"
              min="0"
              className="form-control"
              name="timeTrackingRemaining"
              onChange={(e) => {
                setTimetracking({
                  ...timeTracking,
                  timeTrackingRemaining: e.target.value,
                });
              }}
              style={{ fontSize: "14px" }}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <p>Description</p>
        <Editor
          name="description"
          init={{
            selector: "textarea#myTextArea",
            height: 300,
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
          style={{ overFlow: "scroll" }}
          onEditorChange={handleEditorChange}
        />
      </div>
    </div>
  );
}
