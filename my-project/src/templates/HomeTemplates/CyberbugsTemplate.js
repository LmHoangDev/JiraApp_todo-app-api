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
            <div className="jira">
              <div className="container-fluid pl-0">
                <div className="row">
                  <div className="col-xl-1 col-md-3 col-12 p-0">
                    <SidebarCyberbugs />
                  </div>
                  <div className="col-xl-2 pl-0 col-md-3 col-12">
                    <MenuCyberbugs />
                  </div>
                  <div className="col-xl-9 pl-0 col-md-6 col-12">
                    <Component {...propsRoute} />
                    <ModalCyberBugs />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    />
  );
};
