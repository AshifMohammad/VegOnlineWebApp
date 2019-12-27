import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./style.css";

export const VegStoreHeader = () => {
  return (
    <AppBar className="app-bar-main">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Order Vegetables Online !!!</Typography>
        <Button
          color="inherit"
          className="app-bar-login-btn"
          id="main-Logout"
          type="button"
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
