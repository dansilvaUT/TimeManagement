import Heading from "../Heading";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import axios from "axios";
import ButtonComp from "../Button/ButtonComp";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const { setUserData, user } = useContext(UserContext);
  const [state, setState] = useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    axios.get("/api/logged_in").then((res) => setState(res.data.user));
  }, []);

  setUserData(state);

  const logOut = () => {
    axios.delete("api/logout").then((res) => {
      console.log("you clicked");
      navigate("/");
    });
  };
  return (
    <header className="Navbar">
      <Heading text="TimeManagement" type="h3" />
      <nav className="Navbar-container">
        <a href="www" className="Navbar-link">
          Home
        </a>
        <a href="www" className="Navbar-link">
          Dashboard
        </a>
        <a href="www" className="Navbar-link">
          Profile
        </a>
        {Boolean(user) && (
          <ButtonComp text="Log out" func={logOut} classname="Logout-btn" />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
