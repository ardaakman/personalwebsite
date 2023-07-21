import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { aboutMeComponentProps_t, colorPallette } from "../utils/context";

const AboutMeComponent = (props: aboutMeComponentProps_t) => {
  const { photo, name, theme } = props;
  const Container = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:
      theme === "dark" ? colorPallette.black : colorPallette.white,
  }));

  const ThemedTypography = styled(Typography)(() => ({
    color: theme === "dark" ? colorPallette.light : colorPallette.black,
    textAlign: "center",
    "& a": {
      color: theme === "dark" ? colorPallette.white : colorPallette.black,
      fontWeight: "bold",
    },
    "& a:hover": {
      color: theme === "dark" ? colorPallette.light : colorPallette.dark,
    },
  }));

  const Paragraph = styled("div")(() => ({
    margin: "10px 0", // Add margin between paragraphs
  }));

  return (
    <Container>
      <Avatar
        src={photo}
        alt="Profile Photo"
        sx={{
          width: 400,
          height: 400,
        }}
      />
      <Box
        sx={{
          margin: "1em 5em 1em 5em",
          backgroundColor:
            theme === "dark" ? colorPallette.black : colorPallette.white,
        }}
      >
        <ThemedTypography variant="h4">{name}</ThemedTypography>
        <Paragraph>
          <ThemedTypography variant="body1">
            Hi! I'm Arda, and I am a rising senior studying Electrical
            Engineering and Computer Science & Data Science at UC Berkeley.
          </ThemedTypography>
        </Paragraph>
        <Paragraph>
          <ThemedTypography variant="body1">
            I am passionate about software engineering and love tinkering around
            with software. You can get more information about some of these
            projects on the other pages.
          </ThemedTypography>
        </Paragraph>
        <Paragraph>
          <ThemedTypography variant="body1">
            I am originally from Istanbul, Turkey, but I have been living in the
            Bay Area for the past 3 years. Apart from software engineering, I am
            passionate about history, geography, and politics. I also love
            Formula 1, tennis, and soccer.{" "}
            <a href="https://en.wikipedia.org/wiki/The_Crusades_Through_Arab_Eyes#:~:text=As%20the%20name%20suggests%2C%20the,savage%2C%20ignorant%20and%20culturally%20backward.">
              The Crusades Through Arab Eyes
            </a>{" "}
            is probably my favorite book concerning history, and{" "}
            <a href="https://en.wikipedia.org/wiki/Stefanos_Tsitsipas">
              Stefanos Tsitsipas
            </a>{" "}
            is my (current) favorite tennis player. Feel free to reach out about
            anything and everything; I am always down to talk!
          </ThemedTypography>
        </Paragraph>
      </Box>
    </Container>
  );
};

export default AboutMeComponent;
