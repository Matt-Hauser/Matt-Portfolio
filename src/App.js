import { NavBar } from "./components/NavBar";
import nightsky from "./images/nightsky.jpg";
import skydiver from "./images/skydiver.png";

import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

import "./App.css";

import SendIcon from "@mui/icons-material/Send";
import ProjectTabs from "./components/ProjectTabs.js";

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <Box
        style={{
          backgroundImage: `url(${nightsky})`,
          height: "850px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container>
          <Grid item xs={12} height={120}></Grid>
        </Grid>
        <Grid container sx={{ maxWidth: "90%", margin: "auto" }}>
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
                p: 0.5,
                m: 1,
              }}
            >
              <Typography color="white" fontWeight={700} textAlign={"center"}>
                Welcome to my Portfolio
              </Typography>
            </Paper>
            <Typography
              color="white"
              fontWeight={700}
              fontSize={60}
              textAlign={"center"}
            >
              I'm Matt Hauser
            </Typography>
            <Typography
              color="lightgrey"
              fontWeight={700}
              fontSize={15}
              textAlign={"center"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Button
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
              height={400}
              src={skydiver}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ maxWidth: "90%", margin: "auto" }}>
          <Grid item xs={"none"} sm={12} height={"30vh"}></Grid>
          <Grid item xs={12}>
            <Box
              //border={5}
              height={400}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                height={350}
                width={"80vw"}
                borderRadius={10}
                bgcolor={"#1b1a1c"}
                justifyContent={"center"}
                textAlign={"center"}
                padding={5}
              >
                <Typography
                  color="white"
                  fontSize={40}
                  fontWeight={700}
                  margin={2}
                >
                  Skills
                </Typography>
                <Typography color="lightgrey" fontSize={20} fontWeight={300}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} height={100}></Grid>
          <Grid
            item
            xs={12}
            sx={{
              background: "#1b1a1c",
              width: "100vw",
              height: "80vh",
              padding: 5,
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
            >
              <Typography
                color="white"
                fontSize={40}
                fontWeight={700}
                margin={2}
              >
                Projects
              </Typography>
              <Typography color="lightgrey" fontSize={20} fontWeight={300}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <ProjectTabs></ProjectTabs>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        style={{
          background: "linear-gradient(to top, #c31432, #240b36)",
          height: "1200px",
        }}
      ></Box>
    </div>
  );
}

export default App;
