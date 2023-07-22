import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages";
import { ThemeContext, colorPallette, pageData_t } from "./utils/context";
import { GlobalStyles, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const [theme, setTheme] = React.useState<string>("dark");

  const homePage: pageData_t = {
    title: "Home",
    path: "/",
    element: <HomePage />,
  };
  const pages: pageData_t[] = [homePage];

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.style.backgroundColor =
        theme === "light" ? colorPallette.dark : colorPallette.light;
    }
  };

  const typedTheme = createTheme({
    typography: {
      fontFamily: "Geneva, Arial, sans-serif",
    },
  });

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            fontFamily: "Geneva, Arial, sans-serif",
          },
        }}
      />
      <ThemeProvider theme={typedTheme}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Router>
            <Routes>
              {pages.map((page: pageData_t) => {
                return <Route path={page.path} element={page.element} />;
              })}
            </Routes>
          </Router>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
