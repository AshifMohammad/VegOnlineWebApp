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
export const DisplayContent = () => {
  return (
    <Container>
      <Typography paragraph></Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.
      </Typography>
    </Container>
    // <main className={"classes"}>
    //   <div className={"classes"} />
    //
    // </main>
  );
};
