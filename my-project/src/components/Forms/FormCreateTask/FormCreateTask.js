import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useState } from "react";
import { Select, Radio, Slider } from "antd";
import { useSelector, useDispatch, connect } from "react-redux";
import { GET_ALL_TASK_TYPE_SAGA } from "../../../redux/constants/Cyberbugs/TaskTypeConstants";
import { GET_ALL_PRIORITY_SAGA } from "../../../redux/constants/Cyberbugs/PriorityConstants";
import { withFormik } from "formik";
import { GET_ALL_STATUS_SAGA } from "../../../redux/constants/Cyberbugs/StatusConstants";

const { Option } = Select;

const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function FormCreateTask(props) {
  const [size, setSize] = React.useState("default");

  const [timeTracking, setTimetracking] = useState({
    timeTrackingSpent: 0,
    timeTrackingRemaining: 0,
  });
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
  const { projectList } = useSelector((state) => state.ProjectManageReducer);
  const { arrTaskType } = useSelector((state) => state.TaskTypeReducer);
  const { arrPriority } = useSelector((state) => state.PriorityReducer);
  const { arrUser } = useSelector((state) => state.UserLoginCyberBugsReducer);
  const { userSearch } = useSelector(
    (state) => state.UserLoginCyberBugsReducer
  );
  const { arrStatus } = useSelector((state) => state.StatusReducer);
  //Hàm biến đổi options cho thẻ select

  const userOptions = arrUser.map((item, index) => {
    return { value: item.userId, label: item.name };
  });
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
    dispatch({ type: "GET_USER_API_SEARCH", keyWord: "" });
    dispatch({
      type: GET_ALL_STATUS_SAGA,
    });
  }, []);

  const children = [];
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <p>Project</p>
        <select
          name="projectId"
          className="form-control"
          style={{ fontSize: "14px" }}
          onChange={handleChange}
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
        <p>Task name</p>
        <input
          name="taskName"
          className="form-control"
          onChange={handleChange}
          style={{ fontSize: "14px" }}
        />
      </div>
      <div className="form-group">
        <p>Status</p>
        <select
          name="statusId"
          className="form-control"
          style={{ fontSize: "14px" }}
          onChange={handleChange}
        >
          {arrStatus.map((item, index) => {
            return (
              <option key={index} value={item.statusId}>
                {item.statusName}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              options={userOptions}
              placeholder="Please select"
              optionFilterProp="label"
              onChange={(values) => {
                setFieldValue("listUserAsign", values);
              }}
              onSelect={(val) => {
                console.log(val);
              }}
              style={{ width: "100%", fontSize: "14px", overFlow: "scroll" }}
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
              onChange={handleChange}
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
                setFieldValue("timeTrackingSpent", e.target.value);
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
                setFieldValue("timeTrackingRemaining", e.target.value);
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
            height: 200,
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
        <button type="submit">submit</button>
      </div>
    </form>
  );
}
const createTaskFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { projectList, arrTaskType, arrPriority, arrStatus } = props;

    return {
      taskName: "",
      description: "",
      statusId: arrStatus[0]?.statusId,
      originalEstimate: 0,
      timeTrackingSpent: 0,
      timeTrackingRemaining: 0,
      projectId: projectList[0]?.id,
      typeId: arrTaskType[0]?.id,
      priorityId: arrPriority[0]?.priorityId,
      listUserAsign: [],
    };
  },

  handleSubmit: (values, { props, setSubmitting }) => {
    props.dispatch({ type: "CREATE_TASK_SAGA", taskObject: values });
    console.log("taskobject", values);
  },

  displayName: "CreateProjectFormik",
})(FormCreateTask);
const mapStateToProps = (state) => {
  return {
    projectList: state.ProjectManageReducer.projectList,
    arrTaskType: state.TaskTypeReducer.arrTaskType,
    arrPriority: state.PriorityReducer.arrPriority,
    arrStatus: state.StatusReducer.arrStatus,
  };
};
export default connect(mapStateToProps)(createTaskFormik);
