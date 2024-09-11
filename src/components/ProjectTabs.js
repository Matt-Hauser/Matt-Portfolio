import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import projectthumb from "../images/projectthumb.png";
import projectthumb2 from "../images/projectthumb2.png";
import projectthumb3 from "../images/projectthumb3.jpeg";
import "./ProjectTabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "90%", margin: 4 }}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(to bottom, #c31432, #240b36)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Tic Tac Toe" {...a11yProps(0)} />
          <Tab label="Pokedex" {...a11yProps(1)} />
          <Tab label="Chat Room" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
          {/* <Typography sx={{ color: "white" }} width={350} margin={"auto"}>
            Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Typography> */}
          <img alt="project1" src={projectthumb} height={200}></img>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
          {/* <Typography sx={{ color: "white" }} width={350} margin={"auto"}>
            Lorem ipsum labore dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography> */}
          <img alt="project2" src={projectthumb2} height={200}></img>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
          {/* <Typography sx={{ color: "white" }} width={350} margin={"auto"}>
            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography> */}
          <img alt="project3" src={projectthumb3} height={200}></img>
        </Box>
      </TabPanel>
    </Box>
  );
}
