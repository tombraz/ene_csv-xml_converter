import React, { FC } from "react";
import { ButtonType } from "./models";
import classNames from "classnames";

import "./Button.scss";

const Button: FC<ButtonType> = ({ variant, isActive, onClick, children }) => {
  const buttonClass = classNames("button", {
    [`button__${variant}`]: variant,
  });

  return (
    <button
      className={buttonClass}
      onClick={() => onClick()}
      disabled={!isActive}
    >
      {children}
    </button>
  );
};

export default Button;
