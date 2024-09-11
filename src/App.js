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
import { useRef } from "react";
function App() {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const homeScroll = () => homeRef.current.scrollIntoView();
  const skillScroll = () => skillRef.current.scrollIntoView();
  const projectScroll = () => projectRef.current.scrollIntoView();
  const contactScroll = () => contactRef.current.scrollIntoView();

  return (
    <div>
      <NavBar
        homeScroll={homeScroll}
        skillScroll={skillScroll}
        projectScroll={projectScroll}
        contactScroll={contactScroll}
      ></NavBar>

      <Box
        ref={homeRef}
        style={{
          backgroundImage: `url(${nightsky})`,
          height: "950px",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container xs={12} height={110}></Grid>
        <Home contactScroll={contactScroll}></Home>
      </Box>
      <Box
        sx={{
          background: "linear-gradient(to top, #240b36, #c31432, #240b36)",
        }}
      >
        <Box ref={skillRef}>
          <Grid container xs={12} height={100}></Grid>
          <Skills></Skills>
        </Box>
        <Grid container ref={projectRef}>
          <Grid container xs={12} height={100}></Grid>
          <Grid
            item
            xs={12}
            sx={{
              background: "#1b1a1c",

              padding: 5,
            }}
          >
            <Projects></Projects>
          </Grid>
        </Grid>

        <Grid container xs={12} height={110}></Grid>
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
          <Grid ref={contactRef} item>
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
