import { createContext, useState } from "react";

export const Authoentication = createContext();

function CustomProvider({ children }) {
  const [user, setUser] = useState(" ");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Authoentication.Provider
      value={{ user, setIsLoggedIn, setUser, isLoggedIn }}
    >
      {children}
    </Authoentication.Provider>
  );
}
export default CustomProvider;
