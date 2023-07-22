import React from "react";
import {
  aboutMeComponentProps_t,
  ThemeContext,
  carouselProps_t,
  colorPallette,
} from "../utils/context";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { CustomAppBar } from "../components/CustomAppBar";
import { Carousel, ContactForm } from "../components";
import profilePhoto from "../blobs/profile.jpg";
import {
  MemoizedAboutMe,
  MemoizedAcademics,
  MemoizedExperiences,
  MemoizedProjects,
} from "./";

export default function HomePage() {
  const [flickityIndex, setFlickityIndex] = React.useState<number>(
    () => Number(localStorage.getItem("flickityIndex")) || 0
  );
  const { theme } = React.useContext(ThemeContext);
  const slides = ["About Me", "Previous Positions", "Projects", "Academics"];
  const ThemedBox = styled(Box)(() => ({
    backgroundColor:
      theme === "dark" ? colorPallette.black : colorPallette.white,
    color: theme === "dark" ? colorPallette.black : colorPallette.white,
    width: "100%",
    height: "100vh",
    padding: "0",
    margin: "0",
  }));

  const carouselProps: carouselProps_t = {
    theme: theme,
    slides: slides,
    flickityIndex: flickityIndex,
    setFlickityIndex: setFlickityIndex,
  };

  const aboutMeProps: aboutMeComponentProps_t = {
    photo: profilePhoto,
    name: "Fehmi Arda Akman",
    theme: theme,
  };

  const experiencesProps = {
    theme: theme,
  };

  return (
    <ThemedBox>
      <CustomAppBar />
      <Carousel {...carouselProps} />
      {flickityIndex === 0 && <MemoizedAboutMe {...aboutMeProps} />}
      {flickityIndex === 1 && <MemoizedExperiences {...experiencesProps} />}
      {flickityIndex === 2 && <MemoizedProjects {...experiencesProps} />}
      {flickityIndex === 3 && <MemoizedAcademics {...experiencesProps} />}
      <ContactForm theme={theme} />
    </ThemedBox>
  );
}
