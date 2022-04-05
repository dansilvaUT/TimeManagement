import React from "react";
import ButtonComp from "../Button/ButtonComp";
import Container from "@mui/material/Container";
import Heading from "../Heading";
import Form from "../Form/Form";
import Input from "../Input";
import "./Landing.scss";

const Landing = () => {
  return (
    <Container className="Landing-container" fixed>
      <Heading text="Crunch Time" type="h1" comp="h1" textDirection="center" />
      <Form classname="Landing-form">
        <Input placeholderText="Username" />
        <Input placeholderText="Password" />
        <ButtonComp text="Login" />
      </Form>
    </Container>
  );
};
export default Landing;
