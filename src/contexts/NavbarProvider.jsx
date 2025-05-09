import { createContext, useState } from "react";

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <NavbarContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContext;
