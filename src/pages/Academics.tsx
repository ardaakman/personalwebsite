import { Link, Typography, Card, CardContent, Box } from "@mui/material";
import { AcademicsProps_t, colorPallette } from "../utils/context";
import * as React from "react";

interface CustomCardProps_t {
  title: string;
  content: string;
  link: string;
  theme: string;
}

function CustomCard(props: CustomCardProps_t) {
  const { title, content, theme, link } = props;
  const writingTheme =
    theme === "dark" ? colorPallette.light : colorPallette.dark;
  const cardTheme = theme === "dark" ? colorPallette.dark : colorPallette.light;
  return (
    <Card
      sx={{
        maxWidth: "22%",
        margin: 2,
        backgroundColor: cardTheme,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          color: writingTheme,
          gap: 1,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <Box sx={{ mt: "auto", textAlign: "center", mb: "2em" }}>
        <Link variant="body2" href={link}>
          Link
        </Link>
      </Box>
    </Card>
  );
}

function Academics(props: AcademicsProps_t) {
  const data = [
    {
      title: "Data Structures",
      content:
        "Covers basic data structures, software engineering principles, linked structures, hash tables, algorithms for sorting and searching, and Java programming language.",
      link: "https://www2.eecs.berkeley.edu/Courses/CS61B/",
    },
    {
      title: "Great Ideas in Computer Architecture",
      content:
        "Examines the internal operations of digital computers, including machine architecture, language support, I/O systems, memory management, and architectural design tradeoffs.",
      link: "https://www2.eecs.berkeley.edu/Courses/CS61C/",
    },
    {
      title: "Operating Systems and System Programming",
      content:
        "Focuses on basic concepts of operating systems and system programming, including utility programs, processes, memory allocation, resource allocation, and file systems.",
      link: "https://www.eecs.berkeley.edu/courses/CS162/",
    },
    {
      title: "Efficient Algorithms and Intractable Problems",
      content:
        "Presents concepts and techniques in the design and analysis of algorithms, models of computation, algorithms for optimum search trees, Turing machines, and intractable problems.",
      link: "https://www.eecs.berkeley.edu/courses/CS170/",
    },
    {
      title: "Introduction to Machine Learning",
      content:
        "Covers theoretical foundations, algorithms, methodologies for machine learning, including supervised methods, probabilistic models, Bayesian learning, density estimation, and dimensionality reduction.",
      link: "https://www.eecs.berkeley.edu/courses/CS189/",
    },
    {
      title: "Designing Information Devices and Systems I and II",
      content:
        "Focuses on designing and building modern information devices and systems interfacing with the real world, introducing core EECS topics in circuit design, signals, and systems.",
      link: "https://www.eecs.berkeley.edu/courses/EE16B/",
    },
    {
      title: "Discrete Mathematics and Probability Theory",
      content:
        "Teaches logic, induction, modular arithmetic, polynomials, and probability with examples from cryptography, error correcting codes, and Bayesian inference.",
      link: "https://www.eecs.berkeley.edu/courses/CS70/",
    },
    {
      title: "Concepts of Probability",
      content:
        "An introduction to probability with emphasis on conditional expectation, independence, laws of large numbers, and topics such as the Poisson process and Markov chains.",
      link: "https://www.eecs.berkeley.edu/courses/cs186/",
    },
    {
      title: "Principles & Techniques of Data Science",
      content:
        "Explores key areas of data science including question formulation, data collection and cleaning, visualization, statistical inference, and predictive modeling.",
      link: "https://ds100.org/",
    },
    {
      title: "Foundations of Data Science",
      content:
        "Introduces critical concepts and skills in computer programming and statistical inference, with practical analysis of real-world datasets.",
      link: "http://www.data8.org/",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "4em",
        backgroundColor:
          props.theme === "dark" ? colorPallette.black : colorPallette.white,
      }}
    >
      {data.map((item, index) => (
        <CustomCard
          key={index}
          title={item.title}
          content={item.content}
          theme={props.theme}
          link={item.link}
        />
      ))}
    </div>
  );
}

const MemoizedAcademics = React.memo(Academics);
export default MemoizedAcademics;
