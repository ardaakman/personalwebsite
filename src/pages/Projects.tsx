import { Box } from "@mui/material";
import { colorPallette, experiencesProps_t } from "../utils/context";
import { owloLogo } from "../blobs";
import { FlipCard } from "./Experiences";
import * as React from "react";

function Projects(props: experiencesProps_t) {
  const { theme } = props;
  const cards = [
    {
      title: "Owlo",
      subtitle:
        "Co-Founder, Simulating workplace experiences for training and onboarding.",
      date: "January 2023 - June 2023",
      description: {
        Main: "Worked on Owlo, a product that utilizes generative AI that provides customizable and specific content for different employees, and trains them with simulations that simulate experiences they might face in real life. ",
        BulletPoints: [
          "Used different natural language processing tools and generative AI tools like Flickr, OpenAI whisper, and GPT 4 to create text and audio responses",
          "Created a bot that can simulate emotions, and a tool that speeds up the processing of OpenAI's API by 50% prompts to create real-time interactions.",
          "Marketed the product to hundreds of potential customers and conducted interviews.",
        ],
      },
      icon: owloLogo,
      link: "https://www.owlo.co/",
    },
    {
      title: "Sports Eclipse",
      subtitle:
        "Co-creator, making Formula 1 statistics more fun and accesible.",
      date: "June 2022 - Present",
      description: {
        Main: "Building a sports statistics tool that aims to portray statistics in a readable fashion, interpret interesting relationships not caught on by conventional websites, and derive predictions based on on-hand data. Currently working on Formula 1, aiming to expand into other sports genres.",
        BulletPoints: [
          "Using Natural Language Processing & Semantic Analysis on Driver Radio messages to determine different moment in a race.",
          "Creating microservices and visualization using Python, Pandas, React.js, Next.js, and Node.js. Using seaborn and matplotlib for visualizations.",
          "Utilizing a supervised Machine Learning model to analyze prior races, current weather etc. to optimize different race strategies such as pitstops and tires.",
        ],
      },
      icon: null,
      link: "https://github.com/Eclipse-Sports/f1dashboard",
    },
    {
      title: "Blueberry AI",
      subtitle:
        "Co-Creator, making cumbersome phone calls a thing in the past.",
      date: "July 2023",
      description: {
        Main: "Worked on Bluberry AI, an interface that allows people to make time-consuming phone calls by just inputing a few sentences.",
        BulletPoints: [
          "Built a GPT-based context cache, which can have a conversation and hold onto context of that converstion.",
          "Used Open AI for conversation generation, Flickr to generate realistic voices, and Twilio to make the phone calls.",
          "Provided the user with an interface that allows them to save numbers and their conversations, and also monitor the conversation in real time.",
        ],
      },
      icon: null,
      link: "https://github.com/ardaakman/blueberryai",
    },
    {
      title: "Interactive Story Preparation for TSL",
      subtitle:
        "Co-Creator, helped create an educational experience for Turkish Sign Language speaking children.",
      date: "June 2018 - June 2020",
      description: {
        Main: "Started to build a mobile application that is designated for children whose primary language is Turkish Sign Language (TSL). Stories were presented both in Turkish and TSL, and the application contained interactive elements for both Turkish and TSL speakers. Project handed to new volunteers.",
        BulletPoints: [
          "Held a conference to receive feedback from TSL-speaking children and their families.",
          "Brought together and worked with linguistic professors, mobile application developers, and graphic designers.",
        ],
      },
      icon: null,
      link: "https://github.com/Eclipse-Sports/f1dashboard",
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

const MemoizedProjects = React.memo(Projects);
export default MemoizedProjects;
