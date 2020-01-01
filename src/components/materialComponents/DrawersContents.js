import React from "react";
import { Typography, Divider, Container } from "@material-ui/core";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import LocalGroceryStoreSharpIcon from "@material-ui/icons/LocalGroceryStoreSharp";
import BrightnessHighOutlinedIcon from "@material-ui/icons/BrightnessHighOutlined";

export const DrawerContents = () => {
  return (
    <div>
      <div style={{ cursor: "pointer" }}>
        <HomeTwoToneIcon style={{ color: "darkgreen" }} />
        <Typography paragraph> My Home</Typography>
      </div>

      <Divider />
      <div style={{ cursor: "pointer" }}>
        <LocalGroceryStoreSharpIcon style={{ color: "3f51b5" }} />
        <Typography paragraph> My Orders</Typography>
      </div>

      <Divider />
      <div style={{ cursor: "pointer" }}>
        <BrightnessHighOutlinedIcon />
        <Typography paragraph> My Reports</Typography>
      </div>
    </div>
  );
};
export const DisplayContent = ({ Component }) => {
  return (
    <Container style={{ marginTop: "11vh" }}>
      <Component />
    </Container>
  );
};
