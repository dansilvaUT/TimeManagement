import Heading from "../Heading";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import axios from "axios";
import "./Navbar.scss";

const Navbar = () => {
  const { setUserData } = useContext(UserContext);
  const [state, setState] = useState();

  React.useEffect(() => {
    axios.get("/api/logged_in").then((res) => setState(res.data.user));
  }, []);

  setUserData(state);

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
        <button
          className="NavBar-link"
          onClick={() => {
            axios.delete("api/logout").then((res) => console.log(res));
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
