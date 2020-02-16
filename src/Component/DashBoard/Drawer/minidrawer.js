import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme,withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import Badge from "@material-ui/core/Badge";
import { ReactComponent as Dashboard } from "./assets/icons/dashboard.svg";
import { ReactComponent as HomeIcon } from "./assets/icons/house.svg";
import { ReactComponent as HelpIcon } from "./assets/icons/help.svg";
import { ReactComponent as TransIcon } from "./assets/icons/money.svg";
import { ReactComponent as MLSIcon } from "./assets/icons/checklist.svg";
import { ReactComponent as NotiIcon } from "./assets/icons/noti.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Tabs from "./Tabs";
import Stat from "./Status";
import LeadSearch from '../Leads/searchlead';
import Lead from '../Leads/Lead';
import {Tooltip,Fab,Button,} from "@material-ui/core";
const drawerWidth = 317;

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
const styles = theme => ({});
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "#eff3f8"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 5,
    position: "inherit",
    backgroundColor: "#5860af",
    color: "#ffffff",
    marginTop: 80
  },
  menuButton1: {
    marginLeft: 292,
    position: "inherit",
    backgroundColor: "#5860af",
    color: "#ffffff",
    marginTop: 80
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    zIndex: "auto",
    marginLeft: 120
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(0) + 1
    },
    marginLeft: 120
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    paddingLeft: 80,
    marginLeft: -150
  },
  media: {
    height: 77,
    width: 209,
    objectFit: "contain",
    position: "fixed",
    marginLeft: 181,
    marginTop: 34
  },

  iconstyle: {
    marginTop: 125
  },
  buttontheme1: {
    borderRadius: 20,
    marginTop: 12,
    marginLeft: 40,
    marginRight: 48,
    width: "32%",
    "&:hover": {
      borderRadius: 20,
      border: "1px solid #303F9F",
      color: "#fbfbfc",
      outline: "none"
    }
  },
  buttontheme2: {
    borderRadius: 20,
    marginTop: 12,
    marginLeft: 40,
    marginRight: 48,
    width: "32%",
    "&:hover": {
      borderRadius: 20,
      border: "1px solid #303F9F",
      color: "#fbfbfc",
      outline: "none"
    }
  },

  buttontheme: {
    borderRadius: 20,
    marginLeft: 12,
    paddingLeft: 65,
    width: 300,
    height: 55,
    "&:hover": {
      borderRadius: 20,
      border: "1px solid #303F9F",
      backgroundColor: "#5860af",
      color: "#fbfbfc",
      outline: "none"
    }
  }
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [pagename,setPagename]=React.useState('');
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <List className={classes.iconstyle}>
        <ListItem button className={classes.buttontheme1} onClick={()=>setPagename('Dashboard')} >
          <ListItemIcon>
            <SvgIcon component={HomeIcon} viewBox="0 0 32 31.992" />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.buttontheme1}   onClick={()=>setPagename('Properties')}>
          <ListItemIcon>
            <SvgIcon component={HomeIcon} viewBox="0 0 32 31.992" />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.buttontheme1} onClick={()=>setPagename('Leads')}>
          <ListItemIcon>
            {/* <img src={require("assets/icons/lead.svg")} width="26px" /> */}
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.buttontheme1} onClick={()=>setPagename('Leads')}>
          <ListItemIcon>
            <SvgIcon component={TransIcon} viewBox="0 0 32 31.992" />
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.buttontheme2} onClick={()=>setPagename('Leads')}>
          <ListItemIcon style={{ paddingTop: 300 }}>
            <Badge badgeContent={1} color="secondary">
              {/* <SvgIcon component={NotiIcon} viewBox="0 0 32 31.992" /> */}
            </Badge>
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.buttontheme2}>
          <ListItemIcon>
            {/* <SvgIcon component={HelpIcon} viewBox="0 0 32 31.992" /> */}
          </ListItemIcon>
        </ListItem>
        <ListItem button className={classes.buttontheme2}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
        </ListItem>
      </List>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <IconButton
          onClick={handleDrawerClose}
          className={clsx(classes.menuButton1, {
            [classes.hide]: !open
          })}
        >
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>

        <List className={classes.iconstyle}>
          <ListItem button className={classes.buttontheme} onClick={()=>setPagename('Dashboard')} >
            <ListItemIcon>
              <SvgIcon component={Dashboard} viewBox="0 0 32 31.992" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" onClick={()=>setPagename('Dashboard')}/>
          </ListItem>
          <ListItem button className={classes.buttontheme} onClick={()=>setPagename('Properties')}>
            <ListItemIcon>
              <SvgIcon component={HomeIcon} viewBox="0 0 32 31.992" />
            </ListItemIcon>
            <ListItemText primary="Properties"  onClick={()=>setPagename('Properties')}/>
          </ListItem>
          <ListItem button className={classes.buttontheme} onClick={()=>setPagename('Leads')} >
            <ListItemIcon>
              {/* <img src={require("./assets/icons/lead.svg")} width="26px" /> */}
            </ListItemIcon>
            <ListItemText primary="Leads" onClick={()=>setPagename('Leads')}/>
          </ListItem>
          <ListItem button className={classes.buttontheme} onClick={()=>setPagename('Transaction')}>
            <ListItemIcon>
              <SvgIcon component={TransIcon} viewBox="0 0 32 31.992" />
            </ListItemIcon>
            <ListItemText primary="Transaction" onClick={()=>setPagename('Transaction')}/>
          </ListItem>
          <ListItem button className={classes.buttontheme} onClick={()=>setPagename('MLS')}>
            <ListItemIcon>
              <SvgIcon component={MLSIcon} viewBox="0 0 32 32" />
            </ListItemIcon>
            <ListItemText primary="MLS" onClick={()=>setPagename('MLS')} />
          </ListItem>
        </List>
      </Drawer>
      <CardMedia
        className={classes.media}
        src={require("../../../assets/splash/logo2x.png")}
        component="img"
        title="Contemplative Reptile"
      />
      <main className={classes.content}>
        {/* <Container className={classes.container}> */}
          <div className={classes.toolbar} />
         <div>
         
           {
         pagename==''||pagename=='Dashboard'?<Tabs />
         :pagename=='Properties'?<LeadSearch {...props} />
         :pagename=='Leads'?<Lead {...props} />
         :pagename=='Transaction'?<LeadSearch {...props} />
         :pagename=='MLS'?<LeadSearch {...props} />
         :null
         }
         </div>
        {/* </Container> */}
      </main>
    </div>
  );
}
