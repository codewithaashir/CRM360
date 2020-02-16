import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Tab, Tabs } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Status from './Status';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "#fff"
  },
  tab: {
    fontFamily: 'Roboto',
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: 'normal',
    lineHeight: '1.21',
    letterSpacing: 'normal',
    textAlign: 'left',

    "&&&:before": {
      color: "#EBEBEB",
      borderBottomWColor: "#000",
      borderBottomWidth: 2
    },
    "&&:after": {
      color: "#EBEBEB",
      borderBottomWColor: "#000",
      borderBottomWidth: 2
    },
    "&&:active": {
      borderBottomWColor: "#000",
      borderBottomWidth: 2
    }
  }
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className={classes.root}
      style={{
        paddingLeft: "20px",
        paddingTop: "51px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        fixed
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >

        <Tab
          value="one"
          label="Status"
          wrapped
          {...a11yProps("one")}
          className={classes.tab}
          style={{ outline: 'none',width:'170px',borderBottom: '2px solid #ccc' }}
        />
        <Tab
          value="two"
          label="Statistics"
          className={classes.tab}
          {...a11yProps("two")}
          style={{ outline: 'none',width:'170px',borderBottom: '2px solid #ccc' }}
        />
        <Tab
          value="three"
          label="Activity Log"
          className={classes.tab}
          {...a11yProps("three")}
          style={{ outline: 'none',width:'170px',borderBottom: '2px solid #ccc' }}
        />
        <Tab
          value="four"
          label="Incidents"
          className={classes.tab}
          {...a11yProps("four")}
          style={{ outline: 'none',width:'170px',borderBottom: '2px solid #ccc' }}
        />
        {/* </h1> */}
      </Tabs>

      <TabPanel value={value} index="one">
      <Status />
      </TabPanel>
      <TabPanel value={value} index="two">
      <Status />
      </TabPanel>
      <TabPanel value={value} index="three">
      <Status />
      </TabPanel>
      <TabPanel value={value} index="four">
      <Status />
      </TabPanel>
    </div>
  );
}
