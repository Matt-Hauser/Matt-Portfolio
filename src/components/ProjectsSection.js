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
        My goal is to build engaging and dynamic web applications, focusing on
        creating responsive and user-friendly interfaces. I effectively managed
        application state and integrated various APIs to enhance functionality,
        ensuring smooth performance across different devices.
      </Typography>
      <ProjectTabs></ProjectTabs>
    </Box>
  );
}
