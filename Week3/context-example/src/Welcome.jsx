import React, { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "./Theme";



const Welcome = () => {
  const [count, setCount] = useState(0);
  const theme = useContext(ThemeContext);

  console.log(theme);

  theme.setTheme("dark");
  console.log(theme);
  
  

  return <div>Welcome</div>;
};

export default Welcome;
