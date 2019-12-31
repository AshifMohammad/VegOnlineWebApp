import React from "react";
import {
  Avatar,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Button,
  Divider
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { CopyrightsPage } from "./Utils";

//TODO:  Validation setup for the login page

export const SignUp = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={"classes.paper"}>
        <Avatar className={"classes.avatar"}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={"classes.form"} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={"classes.submit"}
          >
            Sign In
          </Button>
          <Divider />
          <Button
            style={{ backgroundColor: "red" }}
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            id="loginButtonWithGoogle"
          >
            Sign Up with Google
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <CopyrightsPage />
      </Box>
    </Container>
  );
};
