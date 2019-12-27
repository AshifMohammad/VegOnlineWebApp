import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";

export const CopyrightsPage = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://github.com/AshifMohammad">
      Ashif Zafar - Feel free to contact me.
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);
