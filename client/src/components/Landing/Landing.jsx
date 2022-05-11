import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import ButtonComp from "../Button/ButtonComp";
import Container from "@mui/material/Container";
import Heading from "../Heading";
import Form from "../Form/Form";
import Input from "../Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import { landingConstants } from "../../constants";
import "./Landing.scss";

const Landing = () => {
  const { setUserData } = useContext(UserContext);
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [toggleView, setToggleView] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    try {
      setLoading(true);
      if (toggleView) {
        response = await axios.post("/api/registrations", {
          user: {
            email: formData.email,
            username: formData.username,
            password: formData.password,
          },
        });
      } else {
        response = await axios.post("/api/sessions", {
          user: { email: formData.email, password: formData.password },
        });
      }
      if (response.data.user) {
        setLoading(false);
        setUserData(response.data.user);
        navigate("/dashboard");
      }
      //TODO: Implment else block
    } catch (error) {
      //TODO: Implement error handling
    }
  };
  //TODO: //Error handling for empty fields
  return (
    <Container className="Landing-container" fixed>
      {loading ? (
        <Spinner display="block" border="#3c91e6" size={100} />
      ) : (
        <>
          <Heading
            text="Crunch Time"
            type="h1"
            comp="h1"
            textDirection="center"
          />
          <Form classname="Landing-form" onSubFunc={handleSubmit}>
            <Input
              placeholderText="Email"
              name="email"
              value={formData.email}
              onchange={(e) => handleChange(e)}
            />
            {toggleView && (
              <Input
                placeholderText="Username"
                name="username"
                value={formData.username}
                onchange={(e) => handleChange(e)}
              />
            )}
            <Input
              placeholderText="Password"
              name="password"
              value={formData.password}
              onchange={(e) => handleChange(e)}
              type="password"
            />
            <div className="Landing-Text-Container">
              <Heading
                classname="Landing-Auth-Text"
                text={
                  toggleView ? landingConstants.LOGIN : landingConstants.SIGN_UP
                }
                comp="p"
              />
              <Heading
                classname="Landing-Auth-Text"
                text="here"
                comp="p"
                func={() => setToggleView(!toggleView)}
              />
            </div>

            <ButtonComp
              text={
                toggleView
                  ? landingConstants.SIGN_UP_TEXT
                  : landingConstants.LOGIN_TEXT
              }
              type="submit"
            />
          </Form>
        </>
      )}
    </Container>
  );
};
export default Landing;
