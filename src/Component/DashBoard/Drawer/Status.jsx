import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pubs from "./Publications";
import Grid from "@material-ui/core/Grid";
import Portal from "./PortalTable";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
export default function Status() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Grid container spacing={5}>
        <Grid item xs={6} sm={3}>
          <Pubs />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Pubs />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Pubs />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Pubs />
        </Grid>
      </Grid>
      <Portal item sm={3} />
    </main>
  );
}
