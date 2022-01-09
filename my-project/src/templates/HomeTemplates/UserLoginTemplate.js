import { Layout } from "antd";
import React from "react";
import { Route } from "react-router-dom";

const { Content } = Layout;

export const UserLoginTemplate = (props) => {
  let { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <>
            <Layout>
              <Content>
                <Component {...propsRoute} />
              </Content>
            </Layout>
          </>
        );
      }}
    />
  );
};
