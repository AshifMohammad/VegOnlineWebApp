import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Drawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { withVegStoreInventory } from "../../storeContext";
import { DrawerContents, DisplayContent } from "./DrawersContents";
import "./style.css";

const VegStoreHeader = props => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(!open);
  return (
    <div>
      <AppBar
        className="app-bar-main"
        style={{ maxWidth: open ? "96%" : "100%" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            {open ? <ArrowBackIosIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6">Order Vegetables Online !!!</Typography>
          <Button
            color="inherit"
            className="app-bar-login-btn"
            id="main-Logout"
            type="button"
            onClick={() => console.log(props, "on lcick")}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={open} variant="persistent" anchor="left">
        <DrawerContents />
      </Drawer>
      <DisplayContent />
    </div>
  );
};

export default withVegStoreInventory(VegStoreHeader);
