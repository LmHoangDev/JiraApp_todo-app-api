import React, { Component } from "react";

import ContentMain from "../../../components/Cyberbugs/Main/ContentMain";
import HeaderMain from "../../../components/Cyberbugs/Main/HeaderMain";
import InfoMain from "../../../components/Cyberbugs/Main/InfoMain";
export default class indexCyberbug extends Component {
  render() {
    return (
      <div className="main">
        <HeaderMain />

        <InfoMain />

        <ContentMain />
      </div>
    );
  }
}
