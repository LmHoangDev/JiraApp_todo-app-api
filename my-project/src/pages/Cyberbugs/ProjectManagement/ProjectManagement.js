import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Button } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { GET_ALL_PROJECT_MANAGE } from "../../../redux/constants/Cyberbugs/Cyberbugs";

export default function ProjectManagement() {
  //Lấy dữ liệu từ reducer về component
  const projectList = useSelector(
    (state) => state.ProjectManageReducer.projectList
  );
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
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
    },
    // {
    //     title: 'description',
    //     dataIndex: 'description',
    //     key: 'description',
    //     render: (text, record, index) => {
    //         let contentJSX = ReactHtmlParser(text);

    //         return <div>
    //             {contentJSX}
    //         </div>
    //     }
    // },
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
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record, index) => {
        return (
          <div>
            <button className="btn mr-2 btn-primary">
              <FormOutlined style={{ fontSize: 17 }} />
            </button>
            <button className="btn btn-danger">
              <DeleteOutlined style={{ fontSize: 17 }} />
            </button>
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
