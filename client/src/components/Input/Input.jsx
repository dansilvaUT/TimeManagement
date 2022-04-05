import React from "react";
import TextField from "@mui/material/TextField";
import classNames from "classnames";

const Input = ({ placeholderText, classname, onchange }) => {
  return (
    <TextField
      className={classNames("Label", { [`${classname}`]: classname })}
      onChange={onchange}
      label={placeholderText}
      variant="outlined"
    />
  );
};

export default Input;
