import React, { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import ReactCardFlip from "react-card-flip";
import { colorPallette, experiencesProps_t } from "../utils/context";
import {
  getirPhoto,
  zendeskPhoto,
  sigmaPhoto,
  berkeleyPhoto,
  changingRoom,
} from "../blobs";

export interface cardContent_t {
  title: string;
  subtitle: string;
  date: string;
  description: {
    Main: string;
    BulletPoints: string[];
  };
  icon: string | null;
  link: string;
}

export function FlipCard(props: { cardContent: cardContent_t; theme: string }) {
  const { cardContent, theme } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const FlipCardContainer = styled(Card)(() => ({
    width: "40vw", // Set the width as a percentage of the viewport width
    height: "300px",
    cursor: "pointer",
    marginBottom: "4em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      theme === "dark" ? colorPallette.dark : colorPallette.light,
    color: theme === "dark" ? colorPallette.light : colorPallette.dark,
  }));

  const FlipCardContent = styled(CardContent)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em",
  }));

  const FlipCardIcon = styled(RotateLeftIcon)(() => ({
    position: "absolute",
    bottom: "10px",
    right: "10px",
    color: theme === "dark" ? colorPallette.light : colorPallette.dark,
  }));

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <FlipCardContainer onClick={() => setIsFlipped(true)}>
        <FlipCardContent>
          <Box display="flex" alignItems="center" gap="4em">
            {cardContent.icon && windowWidth > 500 && (
              <img
                style={{ width: "8vw", height: "auto" }}
                src={cardContent.icon}
              />
            )}
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                alignItems:
                  !cardContent.icon || windowWidth <= 500
                    ? "center"
                    : "flex-start",
                textAlign:
                  !cardContent.icon || windowWidth <= 500
                    ? "center"
                    : "flex-start",
              }}
            >
              <Typography variant="h5" component="div">
                {cardContent.title}
              </Typography>
              <Typography variant="body2">{cardContent.date}</Typography>
              <Typography variant="body1">{cardContent.subtitle}</Typography>
            </Box>
          </Box>
        </FlipCardContent>
        <FlipCardIcon />
      </FlipCardContainer>

      <FlipCardContainer onClick={() => setIsFlipped(false)}>
        <FlipCardContent
          sx={{
            overflowY: "scroll",
          }}
        >
          <Typography variant="body1" component="div" fontSize={14}>
            {cardContent.description.Main}
          </Typography>
          <Typography variant="body2" mt={2} fontSize={11}>
            {cardContent.description.BulletPoints.map((bulletPoint) => (
              <li>{bulletPoint}</li>
            ))}
          </Typography>
        </FlipCardContent>
        <FlipCardIcon />
      </FlipCardContainer>
    </ReactCardFlip>
  );
}

function Experiences(props: experiencesProps_t) {
  const { theme } = props;
  const cards = [
    {
      title: "Sigma Computing",
      subtitle: "Software Engineering Intern, Data Exploration",
      date: "May 2023 - August 2023",
      description: {
        Main: "Part of the Data Exploration team with a full-stack role in Sigma Computing, a BI startup. Working on core product features, such as Lineage.",
        BulletPoints: [
          "Using GraphQL, React, and Typescript to work on a lineage feature that allows customers to see reasonable relationships between their data within Sigma's core product, Workbooks. Working hand-in-hand with the design team to iterate on customer and internal feedback on said feature.",
        ],
      },
      icon: sigmaPhoto,
      link: "https://www.sigmacomputing.com/",
    },
    {
      title: "Zendesk",
      subtitle: "Software Engineering Intern, Product Accessibility",
      date: "June 2022 - August 2022",
      description: {
        Main: "Was part of the product accessibility team, creating accessible software tools. Built a full-stack dashboard that ensures the company's products are compliant with accessibility standards.",
        BulletPoints: [
          "Used technologies such as Cypress, Puppeteer, and more AI-based solutions such as Evinced for accessibility audits, as well as AWS for hosting the container the tool runs in. Developed mostly on javascript and typescript, using react.js, node.js, and handlebars for the full application.",
          "Set up automation tools and an accessible GUI to use these tools for the company's main products.",
        ],
      },
      icon: zendeskPhoto,
      link: "https://www.zendesk.com/",
    },
    {
      title: "University of California, Berkeley",
      subtitle: "Teaching Assisant, CS 61C",
      date: "June 2022 - Present",
      description: {
        Main: "Teaching assistant for a class with 500+ students, Great Ideas in Computer Architecture,  for Summer 2022,  Fall 2022, and Spring 2023. Topics include binary numbers, floating point, C programming, assembly language (RISC-V), datapaths and pipelining, caches, and OS/Virtual Memory concepts.",
        BulletPoints: [
          "Creating lesson materials, teaching discussion sections, and conducting review sections for students. Providing remote and in-person office hours.",
          "Heading tutoring logistics for the class, helping students who need extra support to thrive.",
        ],
      },
      icon: berkeleyPhoto,
      link: "https://www.https://www.berkeley.edu/",
    },
    {
      title: "Changing Room",
      subtitle: "Data Engineering Intern, Core Product Team",
      date: "January 2022 - May 2022",
      description: {
        Main: "Built a Chrome extension to determine the sustainability of the products you are buying online.",
        BulletPoints: [
          "Built efficient web scrapers to scrape product information from websites, using tools such as Selenium and Puppeteer.",
          "Helped build a pipeline for efficient sustainability scoring on Python, using Postgresql for database connections.",
          "Worked on shifting the company's infrastructure to the AWS cloud.",
        ],
      },
      icon: changingRoom,
      link: "https://www.changingroom.eco/",
    },
    {
      title: "Getir",
      subtitle: "Data Science Intern, NLP Team",
      date: "July 2021 - August 2021",
      description: {
        Main: "Was part of the Data Analyst team as an intern at Getir, a delivery company that focuses on fast grocery delivery.",
        BulletPoints: [
          "Focused primarily on NLP and the correct classification of Getir’s Turkish comments, using pre-trained models like BERT, Fasttext, and various NLP libraries. Improved the accuracy of the current model from 90% to 95% using said models.",
          "Performed exploratory data analysis on more than 300,000 in-app and web-crawled comments.",
        ],
      },
      icon: getirPhoto,
      link: "https://getir.com/us",
    },
  ];

  return (
    <Box
      sx={{
        padding: "20px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor:
          theme === "dark" ? colorPallette.black : colorPallette.white,
      }}
    >
      {cards.map((card, index) => (
        <FlipCard key={index} cardContent={card} theme={theme} />
      ))}
    </Box>
  );
}

export default Experiences;
