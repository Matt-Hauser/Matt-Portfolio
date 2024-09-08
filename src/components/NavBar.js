import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Box,
  Typography,
  IconButton,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

import MenuIcon from "@mui/icons-material/Menu";

import mattlogo from "../images/mattlogow.png";

import "./NavBar.css";

import { useEffect, useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#000000",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        /*sx={{
        background: "linear-gradient(to right, #904e95, #e96443)",
      }}*/
        color={scrolled ? "primary" : "transparent"}
      >
        <Toolbar className="navButtons">
          <Grid container sx={{ placeItems: "center" }}>
            <Grid
              item
              sx={{
                minHeight: "90px",
                display: "flex",
                flexDirection: "row",
                placeItems: "center",
              }}
              xs={4}
            >
              <img alt="matt hauser logo" height={55} src={mattlogo} />
            </Grid>
            <Grid item xs={5}>
              <Box
                columnGap={5}
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                <Button variant="text" sx={{ color: "white" }}>
                  <Typography fontWeight={700} fontSize={15}>
                    Home
                  </Typography>
                </Button>
                <Button variant="text" sx={{ color: "white" }}>
                  <Typography fontWeight={700} fontSize={15}>
                    Skills
                  </Typography>
                </Button>
                <Button variant="text" sx={{ color: "white" }}>
                  <Typography fontWeight={700} fontSize={15}>
                    Projects
                  </Typography>
                </Button>
              </Box>
            </Grid>

            <Grid
              container
              marginLeft={"auto"}
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
              xs={2}
            >
              <Box>
                <IconButton>
                  <MenuIcon sx={{ color: "white" }} fontSize="large" />
                </IconButton>
              </Box>
            </Grid>
            <Box
              md={3}
              marginLeft={"auto"}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="outlined"
                disableElevation
                endIcon={<SendIcon />}
                color={"white"}
                sx={{ color: "white", borderWidth: "2px" }}
              >
                <Typography fontWeight={700} fontSize={20}>
                  Contact Me
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
