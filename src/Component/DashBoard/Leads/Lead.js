import React, { useState, useEffect } from 'react';
import { Fade } from '@material-ui/core';
import LeadSearch from './searchlead.js';
import add from '../../../assets/Lead/add.png'
import AddLead from './addLead.js';
import "typeface-roboto";
export default function Lead(props) {
    const [expandvalue,Setexpended]=useState(false);
    const [addbtn, onAddPress] = useState(false);
    return (
        <div>
   {!addbtn? <img src={add} onClick={()=>onAddPress(true)} style={{width:'40px',height:'40px',position: 'absolute',bottom:expandvalue?'33.5%':'44.5%',right:'10%'}}/>
    :null}
            {!addbtn ?
                <LeadSearch setExpand={Setexpended} /> :
                <Fade in={addbtn}>
                    <AddLead />
                </Fade>}
        </div>
    )
}
