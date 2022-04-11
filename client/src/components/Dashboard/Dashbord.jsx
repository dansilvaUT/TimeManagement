import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
const Dashbord = () => {
  const { user } = useContext(UserContext);

  return <div>Dashbord</div>;
};

export default Dashbord;
