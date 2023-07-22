import React from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const colorPallette = {
  white: "#6A9893",
  black: "#222222",
  light: "#FFFFFF",
  dark: "#37474F",
};

/*
  white: "#FFFFFF",
  black: "#222222",
  light: "#DEE4E7",
  dark: "#37474F",

*/
export interface pageData_t {
  title: string;
  path: string;
  element: JSX.Element;
}

export interface carouselProps_t {
  theme: string;
  slides: string[];
  flickityIndex: number;
  setFlickityIndex: (index: number) => void;
}

export interface aboutMeComponentProps_t {
  photo: string;
  name: string;
  theme: string;
}

export interface contactMeComponents_t {
  theme: string;
}

export interface experiencesProps_t {
  theme: string;
}

export interface AcademicsProps_t {
  theme: string;
}

export const redirectToUrl = (url: string) => {
  window.open(url, "_blank");
};
