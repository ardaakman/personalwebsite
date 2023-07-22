import React from "react";
import { AppBar, Toolbar, IconButton, Button, styled } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ThemeContext, colorPallette, redirectToUrl } from "../utils/context";

export function CustomAppBar() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const StyledTextButton = styled(Button)(() => ({
    color: theme === "dark" ? colorPallette.light : colorPallette.dark,
  }));

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor:
          theme === "dark" ? colorPallette.dark : colorPallette.light,
        marginBottom: "2rem",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          onClick={toggleTheme}
          aria-label="toggle theme"
          sx={{
            color: theme === "dark" ? colorPallette.light : colorPallette.dark,
          }}
        >
          {theme === "light" ? <DarkMode /> : <LightMode />}
        </IconButton>
        <StyledTextButton
          onClick={() =>
            redirectToUrl(
              "https://drive.google.com/file/d/1A-1yHAhdyr3fo5MvUpb3OxLl93ZC3xor/view?usp=sharing"
            )
          }
          variant="text"
        >
          Resume
        </StyledTextButton>
        <StyledTextButton
          onClick={() => redirectToUrl("https://github.com/ardaakman")}
          variant="text"
        >
          Github
        </StyledTextButton>
        <StyledTextButton
          onClick={() =>
            redirectToUrl("https://www.linkedin.com/in/arda-akman/")
          }
          variant="text"
        >
          LinkedIn
        </StyledTextButton>
      </Toolbar>
    </AppBar>
  );
}
