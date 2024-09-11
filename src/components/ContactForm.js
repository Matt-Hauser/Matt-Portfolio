import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, TextField, Box, Typography, Paper } from "@mui/material";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3mn3ewb", "template_r5qk96k", form.current, {
        publicKey: "CMUp3DUX4tETq-6ru",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Box
      component={"form"}
      ref={form}
      onSubmit={sendEmail}
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
      }}
    >
      <Paper>
        <TextField
          variant="filled"
          fullWidth
          label="Name"
          type="text"
          name="from_name"
        />
      </Paper>
      <Paper>
        <TextField
          variant="filled"
          fullWidth
          label="Email"
          type="email"
          name="email"
        />
      </Paper>
      <Paper>
        <TextField
          multiline
          variant="filled"
          rows={3}
          fullWidth
          label="Message"
          name="message"
        />
      </Paper>

      <Button type="submit" color="error" variant="contained" value="Send">
        <Typography fontWeight={500}>Submit</Typography>
      </Button>
    </Box>
  );
};
