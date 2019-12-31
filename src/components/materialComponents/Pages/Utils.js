import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";

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

/*
 * path = "/home"  as string*/

export const useNavigation = path => {
  const ROOT_PATH = process.env.PUBLIC_URL;

  let history = useHistory();
  history.push(`${ROOT_PATH}/${path}`);
};
