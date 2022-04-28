import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import Navbar from "../Navbar/Navbar";

const Dashbord = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar />
      Dashbord
    </>
  );
};

export default Dashbord;
