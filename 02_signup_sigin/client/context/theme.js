import { useContext, useEffect, useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setName] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setName(localStorage.getItem("theme"));
    }
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setName]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };