import { Button, Drawer } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DrawerCyberbugs() {
  const { visible, ComponentContentDrawer, callBackSubmit, title } =
    useSelector((state) => state.DrawerCyberbugReducer);
  const dispatch = useDispatch();
  const showDrawer = () => {
    dispatch({ type: "OPEN_DRAWER" });
  };

  const onClose = () => {
    dispatch({ type: "CLOSE_DRAWER" });
  };
  return (
    <>
      {/* <button onClick={showDrawer}>showdrawer</button> */}
      <Drawer
        title={title}
        width={700}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={callBackSubmit} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        {/* Nội dung thay đổi của drawer */}
        {ComponentContentDrawer}
      </Drawer>
    </>
  );
}
