import { Box, Grid, Typography } from "@mui/material";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import React from "react";

export default function Skills() {
  return (
    <Grid container sx={{ maxWidth: "90%", margin: "auto" }}>
      <Grid item xs={12}>
        <Box
          //border={5}

          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
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
              fontFamily={"Kanit"}
              fontWeight={500}
              margin={2}
            >
              Skills
            </Typography>
            <Typography
              color="lightgrey"
              fontFamily={"Kanit"}
              fontSize={20}
              fontWeight={300}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
              <JavascriptIcon
                sx={{ height: "100px", width: "250px", color: "gold" }}
              />
              <HtmlIcon
                sx={{ height: "100px", width: "250px", color: "gold" }}
              />
              <CssIcon
                sx={{ height: "100px", width: "250px", color: "gold" }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
