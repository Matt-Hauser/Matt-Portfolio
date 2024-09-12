import { Box, Grid, Typography } from "@mui/material";
import SkillsCar from "./Carousel.js";
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
              I am skilled in JavaScript and the React.js library, with a solid
              understanding of HTML and CSS. I have hands-on experience with
              modern libraries and frameworks like Redux for state management,
              Axios for handling API requests, and TypeScript for enhancing code
              quality and reliability.
            </Typography>

            <Box marginTop={5}>
              <SkillsCar></SkillsCar>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
