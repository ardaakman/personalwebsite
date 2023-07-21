import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { colorPallette, contactMeComponents_t } from "../utils/context";

const ContactForm = (props: contactMeComponents_t) => {
  const { theme } = props;
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const ThemedTypography = React.useMemo(
    () =>
      styled(Typography)(() => ({
        color: theme === "dark" ? colorPallette.light : colorPallette.black,
        textAlign: "center",
        marginBottom: "0.6em",
        fontFamily: "Geneva",
      })),
    [theme]
  );

  const ContactFormContainer = React.useMemo(
    () =>
      styled(Box)(() => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:
          theme === "dark" ? colorPallette.black : colorPallette.white,
      })),
    [theme]
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // No need to get values from the DOM directly,
    // they are already available in the state variables
    window.location.href = `mailto:ardaakman96@gmail.com?subject=${subject}&body=${message}`;
  };

  return (
    <ContactFormContainer>
      <Box
        sx={{
          color: theme === "dark" ? colorPallette.light : colorPallette.dark,
          width: "50%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ThemedTypography variant="h4">Contact Me!</ThemedTypography>
        <ThemedTypography variant="body1">
          Feel free to drop any message to me below!
        </ThemedTypography>
        <TextField
          id="subject"
          placeholder="Subject"
          variant="outlined"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          sx={{
            marginBottom: "0.6em",
            width: "60%", // Make this field smaller
            "& label.Mui-focused": {
              color:
                theme === "dark" ? colorPallette.light : colorPallette.dark, // change label color when focused
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor:
                  theme === "dark" ? colorPallette.light : colorPallette.dark, // change border color in default state
              },
              "&:hover fieldset": {
                borderColor:
                  theme === "dark" ? colorPallette.light : colorPallette.dark, // change border color when hover
              },
              "&.Mui-focused fieldset": {
                borderColor:
                  theme === "dark" ? colorPallette.light : colorPallette.dark, // change border color when focused
              },
            },
            "& .MuiInputBase-input": {
              color:
                theme === "dark" ? colorPallette.light : colorPallette.dark, // change input text color in default state
              "&::placeholder": {
                color:
                  theme === "dark" ? colorPallette.light : colorPallette.dark, // change placeholder text color
                opacity: 1, // change placeholder opacity
              },
            },
          }}
        />
        <TextField
          id="message"
          placeholder="Write a message"
          variant="outlined"
          multiline // This enables multiline input
          rows={4} // Minimum visible lines
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          sx={{
            width: "100%",
            marginBottom: "0.6em",
            "& label.Mui-focused": {
              color:
                theme === "dark" ? colorPallette.light : colorPallette.dark, // change label color when focused
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor:
                  theme === "dark" ? colorPallette.light : colorPallette.dark, // change border color in default state
              },
              "&:hover fieldset": {
                borderColor:
                  theme === "dark" ? colorPallette.light : colorPallette.dark, // change border color when hover
              },
              "&.Mui-focused fieldset": {
                borderColor:
                  theme === "dark" ? colorPallette.light : colorPallette.dark, // change border color when focused
              },
            },
            "& .MuiInputBase-input": {
              color:
                theme === "dark" ? colorPallette.light : colorPallette.dark, // change input text color in default state
              "&::placeholder": {
                color:
                  theme === "dark" ? colorPallette.light : colorPallette.dark, // change placeholder text color
                opacity: 1, // change placeholder opacity
              },
            },
          }}
        />
      </Box>
      <Box my={2}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor:
              theme === "dark" ? colorPallette.white : colorPallette.dark,
            color: theme === "dark" ? colorPallette.black : colorPallette.white,
          }}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </Box>
    </ContactFormContainer>
  );
};

export default ContactForm;
