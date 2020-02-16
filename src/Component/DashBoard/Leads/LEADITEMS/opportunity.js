import React,{useState,useEffect} from 'react';
import { oppor } from './styles';
import {Card, Button, CardHeader, CardBody,
    CardTitle,Row,Col} from 'reactstrap';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from "prop-types";
import LeadAdd from '../../../../assets/Lead/leadadd.png';
import Person from '../../../../assets/Lead/person.png';
import { createMuiTheme,ThemeProvider,makeStyles } from '@material-ui/core/styles';
import {Flip,Bounce,Fade,Slide} from 'react-reveal'
import {Grid,TextField,withStyles,FormControl,Select,InputLabel,Checkbox,MenuItem,Slider,Typography,Box} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';
import Rating from '@material-ui/lab/Rating'
import PersonIcon from '@material-ui/icons/Person';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import "typeface-roboto";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const customIcons = {
  1: {
    icon: <StarBorderIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <StarBorderIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <StarBorderIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <StarBorderIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <StarBorderIcon />,
    label: 'Satisfied',
  },
  6: {
    icon: <WhatshotIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};


  const theme = createMuiTheme({
    palette: {
      primary: {
        main:'#757575'
      },
      secondary: {
        main: '#757575',
      },
    },
  });
  const useStyles = makeStyles(theme => ({
    inputRoot: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    sliderroot: {
        width: 200,
      },
      root: {
    width: '100%',
  },
  })); 

  
  function Oportunity(props){
    const { classes } = props;
    const Inputclasses = useStyles();
    const [created, setCreated] = useState('');
    const [value, setValue] = useState([20, 37]);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleChange = event => {
    setCreated(event.target.value);
    //alert(created);
  };
    return(
     <div style={oppor.container}>
    <Row>
        <Col xs={6} sm={6} md={5} >
        <Card style={oppor.CardLeft}>
        <CardHeader style={oppor.CardHead}><img src={Person} style={{width:'24px',height:'24px'}}/>Personal Information</CardHeader>
        <CardBody style={{margin:8}}>
            <Row>
                <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="First Name*" />
                </Col>
                <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="Last Name*"/>
                </Col>
              </Row>
              <p style={oppor.leadInform.heading}>CONTACT INFORMATION</p>
              <Row>
                <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="Email*"/>
                </Col>
                <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="Mobile*"/>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="Phone"/>
                </Col>
                <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="Passport ID"/>
                </Col>
              </Row>
              <Row>
                <Col xs={7} sm={7} md={7} lg={7}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <KeyboardDatePicker
          //disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker"
          label="Passport Expiry Date"
          value={selectedDate}
          onChange={handleDateChange}
          onClick={handleDateChange}
          onSelect={handleDateChange}
          // onKeyPress={(e)=>
          //   {if(e=='Enter'){
          //     handleChange}
          //   }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          style={{outline:'none'}}
        /></MuiPickersUtilsProvider>
                </Col>
              </Row>
              <p style={oppor.leadInform.heading}>ADDRESS</p>
              <Row>
                <Col xs={6} sm={6} md={5} lg={12}>
                <TextField id="standard-basic" label="Address" style={{width:'100%'}}/>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6} md={5} lg={6}>
        <FormControl className={classes.root} InputProps={{
        className: classes.input
      }} >
    <InputLabel id="demo-simple-select-label">Country</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      
      value={created}
      onChange={handleChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
                </Col>
                <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="City"/>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6} md={5} lg={6}>
                <FormControl className={classes.root} InputProps={{
        className: classes.input
      }} >
                <TextField id="standard-basic" label="Po Box"/>
                </FormControl>
                </Col>
              </Row>
        </CardBody>
        
      </Card>
      <Card style={oppor.CardLeft}>
        <CardHeader style={oppor.CardHead}><img src={LeadAdd} style={{width:'24px',height:'24px'}}/>Lead Information</CardHeader>
        <CardBody>
            <Row>
                <Col xs={6} sm={6} md={7} lg={7}>
                <p style={{fontFamily: 'Roboto',fontSize:12,textAlign:'left',fontWeight:'normal',color:'#757575'}}>This lead has no requirement set yet Providing an accurate lead requirement ensures that myCRM360 will match it to the closest set of properties.</p>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                <Button type="submit" style={oppor.reqbtn}>Add REQUIREMENT</Button>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6} md={5} lg={6}>
                <FormControl className={classes.root} InputProps={{
        className: classes.input
      }} >
    <InputLabel id="demo-simple-select-label">Time Frame</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      
      value={created}
      onChange={handleChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
                </Col>
                
              </Row>
              <p style={oppor.leadInform.heading}>LEAD INFORMATION</p>

              <Row>
                <Col xs={6} sm={6} md={5} lg={6}>
                <FormControl className={classes.root} InputProps={{
        className: classes.input
      }} >
    <InputLabel id="demo-simple-select-label">Source</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      
      value={created}
      onChange={handleChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
                </Col>
                
              </Row>
              <Row>
                <Col xs={6} sm={6} md={5} lg={6}>
                <p style={oppor.leadInform.heading}>LEAD QUALITY</p>
      <Box component="fieldset" mb={3} borderColor="transparent">
        {/* <Typography component="legend">LEAD QUALITY</Typography> */}
        <Rating
          name="customized-icons"
          defaultValue={2}
          getLabelText={value => customIcons[value].label}
          IconContainerComponent={IconContainer}
          max={6}
        />
      </Box>
                </Col>
              </Row>
              <p style={oppor.leadInform.heading}>FINANCIALS</p>
              <Row>
              <Col xs={6} sm={6} md={5} lg={6}>
                <FormControl className={classes.root} InputProps={{
        className: classes.input
      }} >
    <InputLabel id="demo-simple-select-label">Select purchasing type</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      
      value={created}
      onChange={handleChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
                </Col>
              </Row>
              <p style={oppor.leadInform.heading}>LEAD REPRESENTATIVE</p>
              <Row>
                <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="First Name*"/>
                </Col>
                <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="Last Name*"/>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="Email*"/>
                </Col>
                <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="Mobile*"/>
                </Col>
              </Row>
            
        </CardBody>
        
      </Card>        <Card style={oppor.CardLeft}>
        <CardHeader style={oppor.CardHead}><SortIcon/>Personal Information</CardHeader>
        <CardBody style={{margin:8}}>
              <Row>
                <Col xs={6} sm={6} md={5} lg={12} >
                <TextField id="standard-basic" label="Admin Notes" style={{width:'100%'}}/>
                </Col>
              </Row>
             
        </CardBody>
        
      </Card>
        </Col>
        <Col style={{marginTop:54,paddingLeft:132,display:'flex',flexDirection:'column'}}>
        {/* <Card style={{background:'tranparent',width:'70%'}}> */}
        <p style={oppor.CardHead}><AssignmentIcon color="primary"/><p style={{display:'inline',marginBottom:2}}>Management</p></p>
        {/* <CardBody style={{margin:8,background:'tranparent'}}> */}
              <Row>
                <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="Last Updated:" style={{width:'100%'}} disabled={true}/>
                </Col>
              </Row>
              <Row>
              <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="Date Creation:" style={{width:'100%'}} disabled={true}/>
                </Col>
              </Row>
              <Row>
              <Col xs={6} sm={6} md={5} lg={6}>
                <TextField id="standard-basic" label="Created By:" style={{width:'100%'}} disabled={true}/>
                </Col>
              </Row>
             
        {/* </CardBody>
        
      </Card> */}
        </Col>
    </Row>
    
    </div>
    );
}

 
Oportunity.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(oppor)(Oportunity);