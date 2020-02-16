import React from "react";
import PropTypes from "prop-types";
import { makeStyles,withStyles } from "@material-ui/core/styles";
import {Box,Typography,Tab,Tabs,Tooltip,Fab,Button   } from "@material-ui/core";
import ChatIcon from '../../../assets/Lead/chat.png';
import DraftIcon from '../../../assets/Lead/draft.png';
import SendIcon from '../../../assets/Lead/send.png';
import Opportunity from './LEADITEMS/opportunity';
import SearchLead from './searchlead';
import Properties from "./LEADITEMS/properties";
import News from "./LEADITEMS/news";
import "typeface-roboto";
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
      {value === index && <Box div={3}>{children}</Box>}
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
    display: 'flex',
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
      borderBottomWColor: '#000',
      borderBottomWidth: '2px'
    },
    "&&:after": {
      color: "#EBEBEB",
      borderBottomWColor: '#000',
      borderBottomWidth: '2px'
    },
    '&&:active': {
      borderBottomWColor: '#000',
      borderBottomWidth: '2px'
    },
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  relative:{
    position: 'absolute',
    top: theme.spacing(25),
    right: theme.spacing(3),
    backgroundColor:'#F2C010'
  },
  relative1:{
    position: 'absolute',
    top: theme.spacing(15),
    right: theme.spacing(3),
    backgroundColor:'#70E777'
  },
}));
const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
export default function AddLead() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className={classes.root}
      style={{ paddingLeft:"108px", paddingTop: "51px", display: 'flex', flexDirection: 'column' }}
    >
      <h1
        style={{
          fontSize:'24px',
          fontFamily:'Roboto',
          fontWeight: "Medium",
          color: "#484959",
          textAlign: "left",
        }}
      >
        New Lead
      </h1>
     { value=="four"?<Tooltip title="Send" aria-label="Send">
        <Fab className={classes.relative1}>
          <img src={SendIcon}  />
        </Fab>
      </Tooltip>:null
      }
      <Tooltip title="Draft" aria-label="Draft">
        <Fab className={classes.relative}>
          <img src={DraftIcon}  />
        </Fab>
      </Tooltip>
      {/* <LightTooltip title="Chat" aria-label="Chat">
        <Button  className={classes.absolute}>
          <img src={ChatIcon}  />
        </Button>
      </LightTooltip> */}
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        fixed
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        style={{ display:'flex',flexDirection:'row',alignItems:'space-between',justifyContent:'space-between' }}
      >
      {/* <h1 style={{ display: 'inline', borderBottomColor: 'red', borderBottomWidth: 10, borderBottom: '2px solid #ccc' }}> */}

        <Tab

          value="one"
          label="Opportunity"
          wrapped
          {...a11yProps("one")}
          className={classes.tab}
          style={{ outline: 'none',width:'170px',borderBottom: '2px solid #ccc' }}
        />
        <Tab
          value="two"
          label="Properties"
          className={classes.tab}
          {...a11yProps("two")}
          style={{ outline: 'none',width:'170px',borderBottom: '2px solid #ccc' }}
        />
        <Tab
          value="three"
          label="Notes"
          className={classes.tab}
          {...a11yProps("three")}
          style={{ outline: 'none',width:'170px',borderBottom: '2px solid #ccc' }}
        />
        <Tab
          value="four"
          label="Documents"
          className={classes.tab}
          {...a11yProps("four")}
          style={{ outline: 'none',width:'170px',borderBottom: '2px solid #ccc' }}
        />
        {/* </h1> */}

      </Tabs>
      
      <TabPanel value={value} index="one">
        <div style={{justifyContent:'left',alignItems:'left'}}><Opportunity/></div>
      </TabPanel>
      <TabPanel value={value} index="two">
        <div style={{justifyContent:'center',alignItems:'center'}}><Properties/></div>
      </TabPanel>
      <TabPanel value={value} index="three">
        <div ><News/></div>
      </TabPanel>
      <TabPanel value={value} index="four">
        Documents
      </TabPanel>
    </div>
  );
}
