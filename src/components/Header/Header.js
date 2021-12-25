import React, { useState } from "react";
import "./Header.css";

// import material ui components
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

// import logos
import logo from "../../images/logo.png";
import logo1 from "../../images/headerLogos/icon1.png";
import logo2 from "../../images/headerLogos/icon2.png";
import logo3 from "../../images/headerLogos/icon3.png";

const Header = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar sx={{ bgcolor: "#fff" }} position="static">
      <Toolbar>
        <Typography component="div">
          <img src={logo} alt="brand_logo" />
        </Typography>
        <Box sx={{ mx: "auto" }}>
          <Tabs
            className="mui_tab"
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ style: { background: "#14967B" } }}
          >
            <Tab
              label={
                <span className="tab_label">
                  <img className="tab_logo" src={logo3} alt="menu_logo" />
                  Discovery
                </span>
              }
            />
            <Tab
              label={
                <span className="disable_tabs">
                  <img className="tab_logo" src={logo2} alt="menu_logo" />
                  Invited
                </span>
              }
            />
            <Tab
              label={
                <span className="disable_tabs">
                  <img className="tab_logo" src={logo1} alt="menu_logo" />
                  Support
                </span>
              }
            />
          </Tabs>
        </Box>
        <button className="custom_post_button">Post Job</button>
        <button className="custom_signin_button">Sign In</button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
