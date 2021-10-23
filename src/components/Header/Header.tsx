import React from "react";
import { SUBTITLE } from "../../static/data/constants";
import logo from "../../static/images/enea.png";
import FilePicker from "../FilePicker";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <img src={logo} alt="logo-enea" />
        <h1>{SUBTITLE}</h1>
      </div>
      <FilePicker />
    </div>
  );
};

export default Header;
