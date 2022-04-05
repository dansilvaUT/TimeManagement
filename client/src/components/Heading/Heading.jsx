import React from "react";
import Typography from "@mui/material/Typography";

const Heading = ({ type, comp, text, textDirection }) => {
  return (
    <Typography
      variant={type}
      component={comp}
      align={textDirection}
      gutterBottom
    >
      {text}
    </Typography>
  );
};

export default Heading;
