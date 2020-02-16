import React,{useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import { FormHelperText } from "@material-ui/core";
import MUI from "./ITEMS/NOTESEditor";
import Collapse from '@material-ui/core/Collapse';
import "typeface-roboto";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: theme.spacing(13)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    outline: "none",
    border: "1px solid #303F9F",
    background: "tranparent",
    color: "rgba(0, 0, 0, 0.87)",
    flex: "1 0 auto",
    margin: theme.spacing(8)
  },
  input: {
    flex: "1 0 auto",
    display: "row",
    width: "100%",
    color: "#484959",
    textAlign: 'left',
    font: 'Regular',
    fontFamily:'Roboto',
    fontSize:20
  }
}));

function Notes(props) {
  const classes = useStyles();
  const [showNote,setNote]=useState(false)
  return (
    <div>
    {!showNote?<div className={classes.root}>
      <div className={classes.container}>
        
          <Paper className={classes.paper} onClick={()=>setNote(true)}>
            
            <FormHelperText className={classes.input}>Write a note...</FormHelperText>
          </Paper>
         
      </div>
      
    </div>:null}
    <Collapse in={showNote}>
      <MUI/>
      </Collapse>
      
      </div>
  );
}

export default Notes;
