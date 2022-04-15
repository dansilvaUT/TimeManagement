import React from "react";
import Typography from "@mui/material/Typography";
import classNames from "classnames";

const Heading = ({ classname, type, comp, text, textDirection, func }) => {
  return (
    <Typography
      className={classNames("Heading", { [`${classname}`]: classname })}
      variant={type}
      component={comp}
      align={textDirection}
      gutterBottom
      onClick={func}
    >
      {text}
    </Typography>
  );
};

export default Heading;
