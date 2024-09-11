import React from "react";
import ProjectTabs from "./ProjectTabs.js";
import { Box, Grid, Typography } from "@mui/material";
export default function Projects() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          background: "#1b1a1c",

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
            fontFamily={"Kanit"}
            fontSize={40}
            fontWeight={500}
            margin={2}
          >
            Projects
          </Typography>
          <Typography
            fontFamily={"Kanit"}
            color="lightgrey"
            fontSize={20}
            fontWeight={300}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <ProjectTabs></ProjectTabs>
        </Box>
      </Grid>
    </Grid>
  );
}
