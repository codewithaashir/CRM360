import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";
const useStyles = makeStyles({
  card: {
    top: 199,
    left: 646,
    width: 249,
    height: 139,
    background: "#FBFBFB 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    border: "1px solid  #303F9F",
    borderRadius: 10,
    opacity: 1,
    marginBottom: 50
  },
  title: {
    top: 222,
    left: 675,
    width: 132,
    height: 40,
    textAlign: "left",
    fontFamily: "Roboto",
    fontSize: 29,
    letterSpacing: 0,
    color: "#484959",
    opacity: 1
  },
  pos: {
    top: 500,
    width: 44,
    height: 40,
    textAlign: "left",
    fontFamily: "Roboto",
    fontSize: 26,
    letterSpacing: 0,
    color: "#303F9F",
    opacity: 1
  },
  pos1: {
    top: 310,
    width: 60,
    height: 19,
    textAlign: "left",
    fontFamily: "Roboto",
    fontSize: 15,
    letterSpacing: 0,
    color: "#A4A4A4",
    opacity: 1
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Publications
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          144
        </Typography>
        <Typography className={classes.pos1}>Per hour</Typography>
      </CardContent>
    </Card>
  );
}
