import React, { useState, useEffect, useRef } from "react";
import { Table, Tag, Space, Button, Avatar, Popover, AutoComplete } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { GET_ALL_PROJECT_MANAGE } from "../../../redux/constants/Cyberbugs/Cyberbugs";
import FormEditProject from "../../../components/Forms/FormEditProject/FormEditProject";
import { Popconfirm, message } from "antd";
import { NavLink } from "react-router-dom";
export default function ProjectManagement() {
  //Lấy dữ liệu từ reducer về component
  const projectList = useSelector(
    (state) => state.ProjectManageReducer.projectList
  );
  const [value, setValue] = useState("");
  const searchRef = useRef(null);
  const { userSearch } = useSelector(
    (state) => state.UserLoginCyberBugsReducer
  );
  console.log(userSearch);
  //Sử dụng useDispatch để gọi action
  const dispatch = useDispatch();
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  useEffect(() => {
    dispatch({ type: GET_ALL_PROJECT_MANAGE });
  }, []);
  const clearFilters = () => {
    setState({ filteredInfo: null });
  };

  const clearAll = () => {
    setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  const setAgeSort = () => {
    setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age",
      },
    });
  };
  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      render: (text, record, index) => {
        return <NavLink to={`/projectdetail/${record.id}`}>{text}</NavLink>;
      },
      sorter: (item1, item2) => {
        let projectname1 = item1.projectName?.trim().toLowerCase();
        let projectname2 = item2.projectName?.trim().toLowerCase();
        return projectname1 > projectname2 ? 1 : -1;
      },
    },
    {
      title: "Category",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Creator",
      // dataIndex: 'creator',
      key: "creator",
      render: (text, record, index) => {
        return <Tag color="green">{record.creator?.name}</Tag>;
      },
      sorter: (item1, item2) => {
        let creator1 = item1.creator?.name.trim().toLowerCase();
        let creator2 = item2.creator?.name.trim().toLowerCase();
        return creator1 > creator2 ? 1 : -1;
      },
    },
    {
      title: "members",
      key: "members",
      render: (text, record, index) => {
        return (
          <div>
            {record.members?.slice(0, 3).map((member, index) => {
              return (
                <Popover
                  key={index}
                  placement="top"
                  title="members"
                  content={() => {
                    return (
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>avatar</th>
                            <th>name</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {record.members?.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{item.userId}</td>
                                <td>
                                  <img
                                    src={item.avatar}
                                    width="30"
                                    height="30"
                                    style={{ borderRadius: "15px" }}
                                    alt=""
                                  />
                                </td>
                                <td>{item.name}</td>
                                <td>
                                  <button
                                    onClick={() => {
                                      dispatch({
                                        type: "REMOVE_USER_PROJECT_API",
                                        userProject: {
                                          userId: item.userId,
                                          projectId: record.id,
                                        },
                                      });
                                    }}
                                    className="btn btn-danger"
                                  >
                                    <DeleteOutlined />
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    );
                  }}
                >
                  <Avatar key={index} src={member.avatar} />
                </Popover>
              );
            })}

            {record.members?.length > 3 ? <Avatar>...</Avatar> : ""}

            <Popover
              placement="rightTop"
              title={"Add user"}
              content={() => {
                return (
                  <AutoComplete
                    options={userSearch?.map((user, index) => {
                      return {
                        label: user.name,
                        value: user.userId.toString(),
                      };
                    })}
                    value={value}
                    onChange={(text) => {
                      setValue(text);
                    }}
                    onSelect={(valueText, option) => {
                      //set giá trị của hộp thọa = option.label
                      setValue(option.label);
                      //Gọi api gửi về backend
                      dispatch({
                        type: "ADD_USER_PROJECT_API",
                        userProject: {
                          projectId: record.id,
                          userId: valueText,
                        },
                      });
                      console.log("projectId", record.id);
                      console.log("userId", valueText);
                    }}
                    style={{ width: "100%" }}
                    onSearch={(value) => {
                      if (searchRef.current) {
                        clearTimeout(searchRef.current);
                      }
                      searchRef.current = setTimeout(() => {
                        dispatch({
                          type: "GET_USER_API_SEARCH",
                          keyWord: value,
                        });
                      }, 500);
                    }}
                  />
                );
              }}
              trigger="click"
            >
              <Button style={{ borderRadius: "50%" }}>+</Button>
            </Popover>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record, index) => {
        return (
          <div>
            <button
              className="btn mr-2 btn-primary py-0 px-6"
              onClick={() => {
                const action = {
                  type: "OPEN_FORM_EDIT_PROJECT",
                  title: "Edit Project",
                  Component: <FormEditProject />,
                };

                //dispatch lên reducer nội dung drawer
                dispatch(action);

                //dispatch dữ liệu dòng hiện tai lên reducer
                const actionEditProject = {
                  type: "EDIT_PROJECT",
                  projectEditModel: record,
                };
                dispatch(actionEditProject);
              }}
            >
              <FormOutlined style={{ fontSize: 16 }} />
            </button>
            <Popconfirm
              title="Are you sure to delete this project?"
              onConfirm={() => {
                dispatch({ type: "DELETE_PROJECT_SAGA", idProject: record.id });
              }}
              okText="Yes"
              cancelText="No"
            >
              <button className="btn btn-danger py-0 px-6">
                <DeleteOutlined style={{ fontSize: 16 }} />
              </button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  return (
    <div className="main">
      <div className="container mt-2">
        <h3 className="text-center text-danger">Project management</h3>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={setAgeSort}>Sort age</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table
          columns={columns}
          rowKey={"id"}
          dataSource={projectList}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
