import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './try.css';
import BasicAccordion from "./EventCard";
import Box from '@mui/material/Box';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./DrawerComp";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [event,setEvent]=useState(null);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ flex: 1 }} // Added this to align tabs to the left
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="Contact" />
              </Tabs>
              <Link to="/sig">
                <Button variant="contained">SignUp</Button>
              </Link>
              <Link to="/reg">
                <Button sx={{ marginLeft: "10px" }} variant="contained">Login</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
