import React from "react";
import classNames from "classnames";

const Form = ({ onSubFunc, classname, children }) => {
  return (
    <form
      className={classNames("Form", { [`${classname}`]: classname })}
      onSubmit={onSubFunc}
    >
      {children}
    </form>
  );
};

export default Form;
