import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

import StarIcon from "@material-ui/icons/Star";

import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as HomeIcon } from "./icons/house.svg";
import { ReactComponent as LeadIcon } from "./icons/lead.svg";
import { ReactComponent as TransIcon } from "./icons/money.svg";

import "./d1.css";

class D1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Paper className="flex-container d1" square>
        <IconButton className="d1-button" color="primary">
          <StarIcon />
        </IconButton>
        <br />
        <IconButton className="d1-button" color="primary">
          <img src={HomeIcon} width="26px" />
        </IconButton>
        <br />
        <IconButton className="d1-button" color="primary">
          <img src={LeadIcon} width="26px" />
        </IconButton>
        <br />
        <IconButton className="d1-button" color="primary">
          <img src={TransIcon} width="26px" />
        </IconButton>
      </Paper>
    );
  }
}

export default D1;
