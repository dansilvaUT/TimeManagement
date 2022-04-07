import React from "react";
import Typography from "@mui/material/Typography";

const Heading = ({ type, comp, text, textDirection, func }) => {
  return (
    <Typography
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
