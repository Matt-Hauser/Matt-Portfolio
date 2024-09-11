import { Button, Grid, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import skydiver from "../images/skydiver.png";

import React from "react";

export default function Home({ contactScroll }) {
  return (
    <Grid container sx={{ maxWidth: "95%", margin: "auto" }}>
      <Grid item xs={12} height={40}></Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            background: "linear-gradient(to right, #904e95, #e96443)",
            p: 0.7,
            m: 1,
          }}
        >
          <Typography
            color="white"
            fontWeight={500}
            fontFamily={"Kanit"}
            textAlign={"center"}
          >
            Welcome to my Portfolio
          </Typography>
        </Paper>
        <Typography
          color="white"
          fontWeight={500}
          fontSize={60}
          textAlign={"center"}
          lineHeight={1}
          padding={2}
          fontFamily={"Kanit"}
        >
          I'm Matt Hauser
        </Typography>
        <Typography
          color="lightgrey"
          fontWeight={500}
          fontSize={18}
          textAlign={"center"}
          marginTop={1}
          padding={2}
          fontFamily={"Kanit"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Button
          onClick={contactScroll}
          variant="outlined"
          disableElevation
          endIcon={<SendIcon />}
          color={"white"}
          sx={{ color: "white", borderWidth: "2px", margin: 4 }}
        >
          <Typography fontWeight={700} fontSize={20}>
            Contact Me
          </Typography>
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <img
          alt="astronaut"
          className="astronaut"
          //height={370}
          width={"350"}
          height={350}
          src={skydiver}
        />
      </Grid>
    </Grid>
  );
}
