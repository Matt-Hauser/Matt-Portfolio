import { NavBar } from "./components/NavBar";
import nightsky from "./images/nightsky.jpg";

import React from "react";
import { Box, Grid } from "@mui/material";

import "./App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Skills from "./components/SkillsSection.js";
import Home from "./components/HomeSection.js";
import Projects from "./components/ProjectsSection.js";
import Contact from "./components/ContactSection.js";
import mattlogo from "./images/mattlogow.png";
function App() {
  return (
    <div>
      <NavBar></NavBar>

      <Box
        style={{
          backgroundImage: `url(${nightsky})`,
          height: "950px",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container xs={12} height={110}></Grid>
        <Home></Home>
      </Box>
      <Box
        sx={{
          background: "linear-gradient(to top, #240b36, #c31432, #240b36)",
        }}
      >
        <Box marginBottom={10}>
          <Grid container xs={12} height={100}></Grid>
          <Skills></Skills>
        </Box>

        <Projects></Projects>
        <Box marginTop={5}></Box>
        <Contact></Contact>
        <Grid
          container
          xs={12}
          height={80}
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={2}
        >
          <Grid item marginTop={1}>
            <img alt="matt hauser logo" width={190} src={mattlogo} />
          </Grid>
          <Grid item>
            <LinkedInIcon
              sx={{ fontSize: "35px", color: "white", marginRight: "10px" }}
            />
            <InstagramIcon
              sx={{ fontSize: "35px", color: "white", marginRight: "10px" }}
            />
            <GitHubIcon
              sx={{ fontSize: "35px", color: "white", marginRight: "10px" }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
