import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header/Header";

export const HomeTemplate = (props) => {
  const { Component, ...restParam } = props;
  console.log(props);
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
};
