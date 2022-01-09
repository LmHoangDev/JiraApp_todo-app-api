import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import MenuCyberbugs from "../../components/Cyberbugs/MenuCyberbugs";
import ModalCyberBugs from "../../components/Cyberbugs/ModalCyberBugs.js/ModalCyberBugs";
import SidebarCyberbugs from "../../components/Cyberbugs/SidebarCyberbugs";
import Header from "../../components/Header/Header";

export const CyberbugTemplate = (props) => {
  const { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <>
            <div class="jira">
              <SidebarCyberbugs />
              <MenuCyberbugs />
              <Component {...propsRoute} />
              <ModalCyberBugs />
            </div>
          </>
        );
      }}
    />
  );
};
