import { Grid, Typography } from "@mui/material";
import React from "react";
import { ContactForm } from "./ContactForm";
import contact from "../images/contact3.png";

export default function Contact() {
  return (
    <Grid
      container
      justifyContent={"space-around"}
      display={"flex"}
      flexWrap={"wrap"}
      padding={3}
    >
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        rowSpacing={2}
      >
        <img alt="contact me" src={contact} width={400} height={370} />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        marginTop={4}
        //sx={{ backgroundColor: "whitesmoke" }}
        padding={3}
        borderRadius={"2%"}
      >
        <Grid item xs={12} height={90} /*textAlign={"center"}*/>
          <Typography
            fontFamily={"Kanit"}
            fontSize={50}
            fontWeight={500}
            sx={{ color: "White" }}
          >
            Contact Me
          </Typography>
        </Grid>
        <ContactForm />
      </Grid>
    </Grid>
  );
}
