import React from "react";
import "../../_main.scss";
import Button from "@mui/material/Button";
import classNames from "classnames";

const ButtonComp = ({ text, classname, func, type }) => {
  return (
    <Button
      className={classNames("Button", {
        [`${classname}`]: classname,
      })}
      variant="outlined"
      onClick={func}
      type={type}
    >
      {text}
    </Button>
  );
};

export default ButtonComp;
