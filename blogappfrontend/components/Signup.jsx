import React from "react";
import Grid from "@mui/material/Grid2";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <div style={{ margin: "8%", textAlign: "center" }}>
      <Typography variant="h3" style={{ color: "Brown" }}>
        BlogApp Register
      </Typography>
      <br />
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 6 }}>
          <TextField fullWidth label="Name" variant="outlined"></TextField>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <TextField fullWidth label="Email" variant="outlined"></TextField>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <TextField fullWidth label="Password" variant="outlined"></TextField>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
          ></TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            multiline="{4}"
          ></TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Button color="secondary" variant="outlined">
            Register
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Link to={"/"} style={{ color: "brown" }}>
            <br />
            Already registered? Login here
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
