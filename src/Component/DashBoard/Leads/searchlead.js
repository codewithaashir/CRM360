import React,{useState,useEffect} from 'react';
import { styles } from './styles';
import { Row } from 'react-bootstrap';
import {Table,Card,Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import PropTypes from "prop-types";
import advclose from '../../../assets/Lead/advclose.png'
import advopen from '../../../assets/Lead/advopen.png'

import wifi from '../../../assets/Lead/wifi.png'
import { createMuiTheme,ThemeProvider,makeStyles } from '@material-ui/core/styles';
import {Flip,Bounce,Fade,Slide} from 'react-reveal'
import {Grid,Button,TextField,withStyles,FormControl,Select,InputLabel,Checkbox,MenuItem,Slider,Typography,TablePagination,Paper } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Collapse from '@material-ui/core/Collapse';
import "typeface-roboto";
const columns = [
  { id: 'refrence', label: 'Refrence',name:'User'},
  { id: 'title', label: 'Title',name:'Location' },
  {
    id: 'layout',
    label: 'Layout',
    name:'Size'
   },
  {
    id: 'type',
    label: 'Type',
    name:'Offering' 
  },
  {
    id: 'price',
    label: 'Price',
    name:'Category'  
  },
  {
    id: 'update',
    label: 'Update',
    name:'Listed'
   },
  {
    id: 'state',
    label: 'State',
   },
  {
    id: 'quality',
    label: 'Quality Score',
   },
  {
    id: 'access',
    label: 'Access',
  },
];
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
  function valuetext(value) {
    return `${value}°C`;
  }  
  function createData(refrence, title,layout,type,price,update,state,quality,access) {
    //const density = population / size;
    return { refrence, title,layout,type,price,update,state,quality,access };
  }
  
  const rows = [
    createData('HK', 'HK','HK','HK','HK','HK','HK','HK','HK'),
    createData('HK', 'HK','HK','HK','HK','HK','HK','HK','HK'),
    createData('HK', 'HK','HK','HK','HK','HK','HK','HK','HK'),
    createData('HK', 'HK','HK','HK','HK','HK','HK','HK','HK'),
    createData('HK', 'HK','HK','HK','HK','HK','HK','HK','HK'),
    createData('HK', 'HK','HK','HK','HK','HK','HK','HK','HK'),
    createData('HK', 'HK','HK','HK','HK','HK','HK','HK','HK'),
    createData('HK', 'HK','HK','HK','HK','HK','HK','HK','HK'),
    createData('HK', 'HK','HK','HK','HK','HK','HK','HK','HK'),
    createData('HK', 'HK','HK','HK','HK','HK','HK','HK','HK'),
    createData('HK', 'HK','HK','HK','HK','HK','HK','HK','HK'),
    createData('HK', 'HK','HK','HK','HK','HK','HK','HK','HK'),
  ];
  function LeadSearch(props){
    const { classes } = props;
    const Inputclasses = useStyles();
    const [created, setCreated] = useState('');
    const [value, setValue] = useState([20, 37]);
    const [showadvance,setAdvance]=useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    const handleChange = event => {
        setCreated(event.target.value);
        alert(created);
      };
      const handleAdvance =() => {
        if(!showadvance){
        setAdvance(true);
        props.setExpand(true);
      }
        else{
          setAdvance(false);
          props.setExpand(false)
        }
      };
      const SlideChange = (event, newValue) => {
        setValue(newValue);
      };
    return(
<div style={styles.container}>

    <Row style={styles.row1.main}>
    <h2 style={styles.row1.heading}><strong>SEARCH LEAD</strong></h2> 
    <div className={Inputclasses.inputRoot} style={styles.inputStyle}>
    <ThemeProvider theme={theme}>
   
  <TextField id="standard-basic" label="ID" className={classes.root} style={styles.row1.textField} InputProps={{
        className: classes.input
      }}
      InputLabelProps={{className:classes.input}}
      //onChange={(event)=>{setEmail(event.target.value)}}
      />

  <TextField id="standard-basic" label="Name" className={classes.root} InputProps={{
        className: classes.input
      }}  style={styles.row1.textField}
      InputLabelProps={{className:classes.input}}
      //onChange={(event)=>{setPassword(event.target.value)}}
      />
      <TextField id="standard-basic" label="Phone" className={classes.root} InputProps={{
        className: classes.input
      }}  style={styles.row1.textField}
      InputLabelProps={{className:classes.input}}
      //onChange={(event)=>{setPassword(event.target.value)}}
      />
      <FormControl className={classes.root} InputProps={{
            className: classes.input
          }} >
        <InputLabel id="demo-simple-select-label">Created</InputLabel>
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
      </ThemeProvider>
    </div>
    <div className={Inputclasses.inputRoot}>
    <ThemeProvider theme={theme}>
    <FormControl className={classes.root} InputProps={{
            className: classes.input
          }} >
        <InputLabel id="demo-simple-select-label">Offer typing</InputLabel>
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
      </FormControl><FormControl className={classes.root} InputProps={{
            className: classes.input
          }} >
        <InputLabel id="demo-simple-select-label">User</InputLabel>
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

  <TextField id="standard-basic" label="Status" className={classes.root} InputProps={{
        className: classes.input
      }}  style={styles.row1.textField}
      InputLabelProps={{className:classes.input}}
      //onChange={(event)=>{setPassword(event.target.value)}}
      />
      
      <FormControl className={classes.root} InputProps={{
            className: classes.input
          }} >
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
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
      </ThemeProvider>
    </div>
    <Collapse in={showadvance}><div>
    <div className={Inputclasses.inputRoot}>
    <ThemeProvider theme={theme}>
    <FormControl className={classes.root} InputProps={{
        className: [classes.input,classes.sliderroot] 
      }} >
        <Typography id="range-slider" align='left' display='block' color='primary' >
Price</Typography>
    <Slider
        value={value}
        onChange={SlideChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
  </FormControl>

  <FormControl className={classes.root} InputProps={{
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
      </ThemeProvider>
    </div>
    <div className={Inputclasses.inputRoot}>
    <ThemeProvider theme={theme}>
  <TextField id="standard-basic" label="Email" className={classes.root} InputProps={{
        className: classes.input
      }}  style={styles.row1.textField}
      InputLabelProps={{className:classes.input}}
      //onChange={(event)=>{setPassword(event.target.value)}}
      /><FormControl className={classes.root} InputProps={{
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
  </FormControl><FormControl className={classes.root} InputProps={{
        className: classes.input
      }} >
    <InputLabel id="demo-simple-select-label">Category</InputLabel>
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
      
      <FormControl className={classes.root} InputProps={{
            className: classes.input
          }} >
        <InputLabel id="demo-simple-select-label">Channel</InputLabel>
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
      
      </ThemeProvider>
    </div>
    </div></Collapse>
    <div><img src={showadvance?advclose:advopen} style={{width:'24px',heigth:'24px',resizeMode:'contain',textAlign:'center'}} onClick={handleAdvance}/></div>
    </Row>
    <Row style={styles.row2.main}>
    <ThemeProvider theme={theme}>
    <Card style={{elevation:10,marginTop:66}}>
    
    <Table striped style={{color:'#000'}}>
      <thead>
        <tr>
          <th style={{borderBottomColor:'#5860af',borderBottomWidth:2}} ><img src={wifi} style={{width:24,height:24}}/></th>
          {
            columns.map((value,index)=>{
              return(
              <th style={{color:'#484959',font: 'Regular 16px/19px Roboto',fontSize:12,textAlign:'left',borderBottomColor:'#5860af',borderBottomWidth:2}}>{value.label}<br/>{value.name?(<p style={{display:'inline',fontSize:9,color:'#A4A4A4',textAlign:'left'}}>{value.name}</p>):<p style={{display:'inline',fontSize:9,color:'#fff',textAlign:'left'}}>HI</p>}</th>
              )
            }) 
          }
          <th style={{borderBottomColor:'#5860af',borderBottomWidth:2}}><CheckBoxOutlineBlankIcon fontSize="small"/></th>
          <th style={{borderBottomColor:'#5860af',borderBottomWidth:2}}><MoreVertIcon fontSize="small"/></th>
          
        </tr>
      </thead>
      <tbody>
        
      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <tr hover role="checkbox"  key={row.code}>
                  <td></td>
                  {columns.map(column => {
                    const value = row[column.id];
                     
                    return (
                    
                    <td style={{color:'#5860af',font: 'Regular 16px/19px Roboto',fontSize:12,textAlign:'left'}}>
                        {value}
                      </td>
                    );
                  })}
                  <td><Checkbox color="primary" />
        </td>
                  <td></td>
                </tr>
              );
            })}
      </tbody>

    </Table>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Card>
    </ThemeProvider>
    </Row>
    </div>
    );
}
LeadSearch.propTypes = {
    classes: PropTypes.object.isRequired
  };
export default withStyles(styles)(LeadSearch);
