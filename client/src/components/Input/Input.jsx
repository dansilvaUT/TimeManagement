import React from "react";
import TextField from "@mui/material/TextField";
import classNames from "classnames";

const Input = ({ placeholderText, classname, onchange, value, name, type }) => {
  return (
    <TextField
      name={name}
      className={classNames("Label", { [`${classname}`]: classname })}
      defaultValue={value}
      onChange={onchange}
      label={placeholderText}
      variant="outlined"
      type={type}
      autoComplete="off"
    />
  );
};

export default Input;
