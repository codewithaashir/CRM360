import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MUIRichTextEditor from 'mui-rte';
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles, createMuiTheme, useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "typeface-roboto";
//import TableChartIcon from '@material-ui/icons/TableChart'
const save = data => {
  console.log(data);
};
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    outline: "none"
    // border: "1px solid #303F9F"
  },
  paper: {
    padding: theme.spacing(22),
    textAlign: "left",
    outline: "none",
    background: "tranparent",
    color: "rgba(0, 0, 0, 0.87)",
    flex: "1 0 auto",
    margin: theme.spacing(0)
  }
}));

const MyBlock = props => {
  const classes = props;
  return (
    <div
      className={classes.paper}
      style={{
        background: "#F4F4F4 0% 0% no-repeat padding-box"
      }}
    >
      {props.children}
    </div>
  );
};
const local_theme_overrides = {
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginTop:20,
        width: "80%",
        textAlign: "left",
        border: "2px solid #303F9F",
        borderRadius: 5
      },
      editor: {
        padding:10,
        minHeight: "400px",
        width: "100%",
        
      }
    }
  }
};

const MUI = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [localTheme, setLocalTheme] = useState(theme);
  useEffect(() => {
    setLocalTheme(Object.assign({ ...theme }, local_theme_overrides));
  }, []);
  const [message_content, setMessageContent] = useState("");
  // function sendMessage() {
  //   if (message_content === "") return;
  //   let rte_markdown = stateToMarkdown(message_content.getCurrentContent());
  //   channel.sendMessage(rte_markdown);
  //   // I would like to reset or re-render the mui-tre component after sending the message
  //   //setMessageContent('');
  // }

  return (
    <ThemeProvider theme={localTheme}>
      <div className={classes.container}>
        <MUIRichTextEditor
          label="Write a note..."
          onSave={save}
          inlineToolbar={true}
          customControls={[
            {
              name: "my-block",
              icon: (
                <Button
                  autoFocus
                  //onClick={() => sendMessage()}
                  disabled={message_content === ""}
                >
                  ADD
                </Button>
              ),
              type: "inline",
              blockWrapper: <MyBlock />,
              inlineStyle: {
                backgroundColor: "black",
                color: "red"
              }
            }
          ]}
          controls={[
            "bold",
            "italic",
            "underline",
            "save",
            "numberList",
            "bulletList",
            "my-block"
          ]}
          toolbarButtonSize="small"
          toolbarPosition={{top:10,left: 2}}
        />
      </div>
    </ThemeProvider>
  );
};
export default MUI;
