import React from "react";
import ProjectTabs from "./ProjectTabs.js";
import { Box, Typography } from "@mui/material";
export default function Projects() {
  return (
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
      <ProjectTabs></ProjectTabs>
    </Box>
  );
}
