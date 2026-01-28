// Context.js
import { createContext, useState } from "react";
export const ThemeContext = createContext();

const Theme = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
