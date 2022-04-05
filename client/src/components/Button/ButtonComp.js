import React from "react";
import "../../_main.scss";
import Button from "@mui/material/Button";
import classNames from "classnames";

const ButtonComp = ({ text, classname, func }) => {
  return (
    <Button
      className={classNames("Button", {
        [`${classname}`]: classname,
      })}
      variant="outlined"
      onSubmit={func}
    >
      {text}
    </Button>
  );
};

export default ButtonComp;
