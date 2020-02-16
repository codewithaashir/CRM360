import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { property } from './styles';
import { Grid, TextField, withStyles, FormControl,FormHelperText, Select, InputLabel, Input, Checkbox, MenuItem,Button, Slider, Typography, Box } from '@material-ui/core';
import { Row, Col } from 'reactstrap';
import Collapse from '@material-ui/core/Collapse';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Doc from '../../../../assets/Lead/document.png';
import Arch from '../../../../assets/Lead/arch.png';
import Company from '../../../../assets/Lead/company.png';
import Block from '../../../../assets/Lead/block.png';
import Duplex from '../../../../assets/Lead/duplex.png';
import PentHouse from '../../../../assets/Lead/penthouse.png';
import Place from '../../../../assets/Lead/place.png';
import CheckboxesGroup from './ITEMS/CheckBox';
import "typeface-roboto";
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#757575'
        },
        secondary: {
            main: '#757575',
        },
    },
});
const btnTheme = createMuiTheme({
    overrides: {
      MuiButton: {
        root:property.reqbtn, 
      },
    },
  });
// const btnAddTheme=createMuiTheme({
//     overrides: {
//       MuiButton: {
//         root:property.locationAdd, 
//       },
//     },
//   });
const useStyles = makeStyles(theme => ({
    inputRoot: {
        '& > *': {
            margin: theme.spacing(1),
            width: 400,
            display:'flex',
            flexDirection:'column'
        },
    },
    sliderroot: {
        width: 400,
    },
    root: {
        display: 'flex',
        width: '100%',
    },
}));
const StyledToggleButtonGroup = withStyles(theme => ({
    grouped: {
        margin: theme.spacing(0.7),
        border: 'none',
        width: '100%',
        height: 50,
        //padding: theme.spacing(0, 0),
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}))(ToggleButtonGroup);
function valuetext(value) {
    return `${value}°C`;
  }  
function Properties(props) {
    const { classes } = props;
    const Inputclasses = useStyles();
    const [showAddReq, setAddReq] = useState(false);
    const [value, setValue] = useState([20, 37]);
    const [alignment, setAlignment] = useState('left');
    const SlideChange = (event, newValue) => {
        setValue(newValue);
      };

 

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <div style={property.container}>
            <Collapse in={!showAddReq ? true : false}>
                <Row style={{ marginTop: '54px' }}>
                    <Col xs={4} sm={8} md={10} lg={12}>
                        <img src={Doc} style={{ width: 100, height: 100, alignSelf: 'center' }} />
                    </Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Col xs={4} sm={8} md={10} lg={12}>
                        <p style={{ fontFamily:'Roboto',fontWeight:'normal',fontSize: 14, textAlign: 'center', color: '#484959' }}>This lead has no requirement set yet.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop:'15px' }}>
                    <Col xs={4} sm={8} md={10} lg={12}>
                        <p style={{ fontFamily:'Roboto',fontWeight:'normal',fontSize: 10,textAlign: 'center', color: '#757575' }}>Providing an accurate lead requirement ensures that myCRM360 will match it to the closest set of properties.</p>
                    </Col>
                </Row>
                
                <Row style={{ marginTop: '24px'}}>
                    <Col xs={4} sm={8} md={10} lg={12}>
                        <Button onClick={() => setAddReq(true)} style={{outline:'none'}}>Add Requirment</Button>
                    </Col>
                </Row>
                
            </Collapse>
            <Collapse in={showAddReq}>
                       
     <Row style={{ marginTop: '24px' }}>
     
                <Col xs={6} sm={6} md={5} lg={8}>
                <TextField id="standard-basic" label="Location" style={{alignSelf:'center',textAlign:'center',width:'98%'}}/>
                </Col>
                   </Row>
                   <Row style={{marginTop:4}}>              
                  <Col><p style={{ textAlign: 'left',fontSize:'12px',fontFamily:'Roboto',fontWeight:'normal',float:'left' }} >Required*</p>
                  </Col>
                  <Col >
                    <ThemeProvider theme={btnTheme}>
                    <Button onClick={() => setAddReq(true)} style={{outline:'none',float:'left'}}>ADD LOCATION</Button>
                    </ThemeProvider>
</Col>
                    </Row>  
                <Col style={{ marginTop: '30px' }}>
                  
                    <Row>
                    <p style={{ color: '#767676', fontSize:'16px',fontFamily:'Roboto',fontWeight:'normal', textAlign: 'left', marginBottom: 2, marginTop: 14, }}>CATEGORIES</p>
                    </Row>
                    <Row>
                    <StyledToggleButtonGroup
                        size="medium"
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                    >
                       
                        <ToggleButton value="one" aria-label="centered" style={property.togglebtn}>
                            Residential
                                </ToggleButton>
                        <ToggleButton value="two" aria-label="centered" style={property.togglebtn}>
                            commercial
                                </ToggleButton>
                        <ToggleButton value="three" aria-label="centered" style={property.togglebtn}>
                            Rent                              </ToggleButton>

                        <ToggleButton value="four" aria-label="centered" style={property.togglebtn} >
                            sale
                                </ToggleButton>


                    </StyledToggleButtonGroup>
                    </Row>
                </Col>
                <Col style={{ marginTop: '30px' }}>
                    {/* <Col xs={4} sm={8} md={10} lg={12}>
                        <p style={{ fontFamily:'Roboto',fontWeight:'normal',fontSize: 14, textAlign: 'center', color: '#484959' }}>This lead has no requirement set yet.</p>
                    </Col> */}
                    <Row>
                    <p style={{ color: '#767676',fontSize:'16px',fontFamily:'Roboto',fontWeight:'normal', textAlign: 'left', marginTop: 14, marginBottom: 2, }}>RENTAL PERIOD</p>
                    </Row>
                    <Row>
                    <StyledToggleButtonGroup
                        size="medium"
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="one" aria-label="centered" style={property.togglebtn}>
                            year
                                </ToggleButton>
                        <ToggleButton value="two" aria-label="centered" style={property.togglebtn}>
                            month
                                </ToggleButton>
                        <ToggleButton value="three" aria-label="centered" style={property.togglebtn}>
                            week
                                </ToggleButton>
                        <ToggleButton value="four" aria-label="centered" style={property.togglebtn}>
                            day
                                </ToggleButton>
                    </StyledToggleButtonGroup>
                    </Row>
                </Col>
                <Col style={{ marginTop: '30px' }}>
                    {/* <Col xs={4} sm={8} md={10} lg={12}>
                        <p style={{ fontFamily:'Roboto',fontWeight:'normal',fontSize: 14, textAlign: 'center', color: '#484959' }}>This lead has no requirement set yet.</p>
                    </Col> */}
                    <Row>
                    <p style={{ color: '#767676', fontSize:'16px',fontFamily:'Roboto',fontWeight:'normal', textAlign: 'left', marginBottom: 2, marginTop: 14, }}>PROPERTY TYPE</p>
                    </Row>
                    <Row>
                    <StyledToggleButtonGroup
                        size="large"
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="appartment" aria-label="centered">
                            <div style={property.toggleImageBtn.div}>
                                <img src={Block} style={property.toggleImageBtn.image} />
                            <p style={property.toggleImageBtn.div}>APPAERTMENT</p></div>
                                </ToggleButton>
                        <ToggleButton value="company"  aria-label="centered" >
                        <div style={property.toggleImageBtn.div}>
                            <img src={Company}  style={property.toggleImageBtn.image} />
                            <p style={property.toggleImageBtn.div}>COMPANY</p>
                            </div>
                                </ToggleButton>
                        <ToggleButton value="duplex" aria-label="centered"  >
                        <div style={property.toggleImageBtn.div}>
                            <img src={Duplex} style={property.toggleImageBtn.image} />
                           <p style={property.toggleImageBtn.div}> DUPLEX</p></div>
                                    </ToggleButton>
                        <ToggleButton value="penthouse" aria-label="centered"  >
                        <div style={property.toggleImageBtn.div}> 
                        <img src={PentHouse}  style={property.toggleImageBtn.image}/>
                            <p style={property.toggleImageBtn.div}>PENTHOUSE</p></div>
                        </ToggleButton>
                        <ToggleButton value="place" aria-label="centered"  >
                        <div style={property.toggleImageBtn.div}>
                            <img src={Place} style={property.toggleImageBtn.image} />
                            <p style={property.toggleImageBtn.div}>PLACE</p></div>
                        </ToggleButton>

                    </StyledToggleButtonGroup>
                    </Row>
                </Col>
                <Col style={{marginTop:'20px'}}>
                <ThemeProvider theme={theme}>
    
    <Row style={{marginTop:'30px'}}>
        <Col xs={4} sm={6} md={6}>
<FormControl className={classes.root} InputProps={{
    className: [classes.input,classes.sliderroot] 
  }} >
    <Typography id="range-slider" align='left' display='block' color='primary' >
BUDGET</Typography>
<Slider
    value={value}
    onChange={SlideChange}
    valueLabelDisplay="auto"
    aria-labelledby="range-slider"
    getAriaValueText={valuetext}
  />

</FormControl>
</Col>
</Row>
<Row >
<Col xs={3} sm={3} md={3}>
<FormControl className={classes.root} InputProps={{
    className: [classes.input,classes.sliderroot] 
  }} >

<Typography id="range-slider" align='left' display='block' color='primary' >
    Size
  </Typography>
<Slider
    value={value}
    onChange={SlideChange}
    valueLabelDisplay="auto"
    aria-labelledby="range-slider"
    getAriaValueText={valuetext}
  />

</FormControl>
</Col>
<Col xs={3} sm={3} md={3}>
<FormControl  className={classes.root} InputProps={{
    className: [classes.input,classes.sliderroot] 
  }} >
    <Typography id="range-slider" align='left' display='block' color='primary' >Bedrooms</Typography>
<Slider
    value={value}
    onChange={SlideChange}
    valueLabelDisplay="auto"
    aria-labelledby="range-slider"
    getAriaValueText={valuetext}
  />
</FormControl>
</Col>
</Row>
<Col style={{ marginTop: '30px' }}>

                    <Row>
                    <p style={{ color: '#767676', fontSize:'16px',fontFamily:'Roboto',fontWeight:'normal', textAlign: 'left', marginBottom: 2, marginTop: 14,textTransform:'uppercase' }}>select amenities</p>
                    </Row>
<Row style={{marginTop:'20px'}}>
<CheckboxesGroup/>
</Row>
</Col>
  </ThemeProvider>
  </Col>
            </Collapse>
        </div>
    )
}
Properties.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(property)(Properties);
