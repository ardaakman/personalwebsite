import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { carouselProps_t, colorPallette } from "../utils/context";
import AboutMeComponent from "../pages/AboutMe";

const Carousel: React.FC<carouselProps_t> = (props: carouselProps_t) => {
  const { theme, slides, flickityIndex, setFlickityIndex } = props;
  const ThemedTypography = styled(Typography)(() => ({
    color: theme === "dark" ? colorPallette.light : colorPallette.dark,
    margin: "0 3em 0 3em",
  }));

  const ThemedCarouselBox = styled(Box)(() => ({
    backgroundColor:
      theme === "dark" ? colorPallette.black : colorPallette.white,
    color: theme === "dark" ? colorPallette.light : colorPallette.dark,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  }));

  const StyledFlickity = styled.div`
    .flickity-button {
      top: 50% !important;
      transform: translateY(-50%);
    }

    .flickity-prev-next-button {
      width: 50px;
      height: 50px;
      background: ${theme === "dark"
        ? colorPallette.light
        : colorPallette.dark};
    }

    .flickity-prev-next-button:hover {
      background: ${theme === "dark"
        ? colorPallette.light
        : colorPallette.dark};
    }

    .flickity-prev-next-button .flickity-button-icon {
      fill: ${theme === "dark" ? colorPallette.black : colorPallette.white};
    }

    .flickity-prev-next-button:hover .flickity-button-icon {
      fill: ${theme === "dark" ? colorPallette.black : colorPallette.white};
    }
  `;

  const carouselRef = useRef<HTMLDivElement>(null);
  let flickityInstance: Flickity | null = null;

  useEffect(() => {
    if (carouselRef.current) {
      flickityInstance = new Flickity(carouselRef.current, {
        cellAlign: "center",
        contain: true,
        prevNextButtons: true,
        wrapAround: true,
        pageDots: false,
        adaptiveHeight: true,
      });

      if (
        flickityInstance &&
        flickityInstance.selectedIndex !== flickityIndex
      ) {
        flickityInstance.select(flickityIndex, false, true);
      }

      flickityInstance.on("change", handleSlideChange);
    }

    return () => {
      if (flickityInstance) {
        flickityInstance.off("change", handleSlideChange);
        flickityInstance.destroy();
      }
    };
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("flickityIndex", String(flickityIndex));
  }, [flickityIndex]);

  const handleSlideChange = () => {
    if (flickityInstance) {
      const currentIndex = flickityInstance.selectedIndex;
      setFlickityIndex(currentIndex);
    }
  };

  return (
    <StyledFlickity>
      <Box
        className="carousel"
        ref={carouselRef}
        style={{
          width: "50%",
          height: "50%",
          margin: "auto",
          marginBottom: "3em",
          marginTop: "4em",
        }}
      >
        {slides.map((slide, index) => (
          <div
            className="carousel-cell"
            key={index}
            style={{ width: "100%", margin: "auto" }}
          >
            <ThemedCarouselBox theme={theme}>
              <ThemedTypography theme={theme} variant="h3">
                {slide}
              </ThemedTypography>
            </ThemedCarouselBox>
          </div>
        ))}
      </Box>
    </StyledFlickity>
  );
};

export default Carousel;
