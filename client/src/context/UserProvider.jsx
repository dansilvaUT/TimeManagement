import { createContext, useState } from "react";

export const UserContext = createContext({});
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const setUserData = (obj) => {
    setUser(obj);
  };

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
