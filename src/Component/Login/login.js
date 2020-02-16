import React, { Component,useState,useEffect } from 'react';
import logo from '../../assets/Login/loginlogo.png';
import PropTypes from "prop-types";
import {Grid,TextField,withStyles,LinearProgress } from '@material-ui/core';
import {Col,Card,ListGroup,Button} from 'react-bootstrap';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import {Flip,Bounce,Fade} from 'react-reveal'
// import purple from '@material-ui/core/colors/purple';
import close from '../../assets/Login/close.png'
import {styles} from './styles';
import Axios from 'axios';
import { Apis } from '../../Config/Apis';
const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#EBEBEB'
    },
    secondary: {
      main: '#EBEBEB',
    },
  },
});

function Login(props){
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [showForget,setShowForget]=useState(false);
   const [showError,setError]=useState({msg:'',sh:false});
   const [loading, setLoading] = useState(false);
  //  useEffect(()=>{
  //    if(localStorage.getItem('User'))
  //     props.history.push('dashbord')     
  //  },[])
   const Login=()=>{
      setLoading(true)
     var param=new FormData();
     param.append("email",email);
     param.append("password",password);
     Axios.post(Apis.Login,param).then(res=>{
      setLoading(false) 
      alert(JSON.stringify(res.data));
      localStorage.setItem('User', res.data.user);
      localStorage.setItem('@appToken', res.data.token);
      global.AppToken=res.data.token;      
       props.history.push('dashboard')
        //window.location = '/dashboard';
      }
     ).catch(err=>{
      setLoading(false)
       console.log(err.message)
     })
   }
   const handleVerify=()=>{
    
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(!reg.test(email)){
      setError({msg:'Please enter valid email address',sh:true})
      return;
     }
     if(!email&&!password){
      setError({msg:'Email or Password Required',sh:true})
     return;
    }
    if(!email||!password){setError({msg:'All Field Required',sh:true})
     return;
    }
    Login();
    

   }
const { classes } = props;
return(
    <Fade left>
  <div style={styles.mainContainer}>
  <Col xl={6} lg={4} md={2} className="d-none d-sm-block"  style={styles.col1.main}>
   <span style={{textAlign:'left',alignItems:'center',justifyContent:'center'}}  className='justify-content-center'>  
   <h1 style={styles.col1.h1}>Easy to use, Streamlined and Secure</h1>
   
   <p style={styles.col1.p}>The Essential Toolkit for Real-Estate Professionals</p>
  </span>
  </Col>
  <Col xl={6} lg={8} md={10} sm={12} className="d-flex" style={styles.col2.main}>
  <div style={{width:'100%',height:3,position:'absolute',top:0}}>{loading?<LinearProgress color="secondary" variant="query" />:null}</div>
     <div style={styles.col2.div1}>
    
  
   <img src={logo} style={styles.col2.logo} alt="logo" />  
       {!showForget?<div style={{display:'flex',flexDirection:'column'}}>
        <ThemeProvider theme={theme}>
  <TextField id="standard-basic" label="Email" className={classes.root} style={styles.col2.textField} InputProps={{
        className: classes.input
      }}
      InputLabelProps={{className:classes.input}}
      onChange={(event)=>{setEmail(event.target.value)}}
      />

  <TextField id="standard-basic" label="Password" type="password" className={classes.root} InputProps={{
        className: classes.input
      }}  style={styles.col2.textField}
      InputLabelProps={{className:classes.input}}
      onChange={(event)=>{setPassword(event.target.value)}}
      
      onKeyPress={ (e) => {
          if (e.key === 'Enter') {
            handleVerify()
          }
        }
      }
      />
      <Fade right collapse when={showError.sh}>
          <div className="invalid-feedback"
            style={{ display: 'inline' }}
    > <small>{showError.msg}</small>
          </div>
        </Fade>
      </ThemeProvider>
      <Button type="submit" style={styles.col2.btnSubmit} 
      onClick={
        ()=>props.history.push('dashboard')
        //handleVerify
      }
      
      >Submit</Button>
      
              
                <Button style={{font:'Light 22px/52px Roboto',color:'#FFFFFF',fontSize:12,marginTop:22,fontFamily:'Roboto',}} onClick={()=>{setShowForget(true)}}  color="primary">Forgot password?</Button>
</div>:     <>   <img src={close} style={{width:15,height:15,alignSelf:'flex-end',position:'absolute',top:26,right:12}} onClick={()=>setShowForget(false)}/>

           <Flip left>    <div style={{display:'flex',flexDirection:'column'}} >
    
        <ThemeProvider theme={theme}>
        <TextField id="standard-basic" label="Email" className={classes.root} style={styles.col2.textField} InputProps={{
        className: classes.input
      }}
      InputLabelProps={{className:classes.input}}
      onChange={(event)=>{setEmail(event.target.value)}}
      />
        
      </ThemeProvider>
      <Button type="submit" style={styles.col2.btnRecover}>RECOVER</Button>
               
</div></Flip></>  }
     
  
   </div>

  </Col>
</div>
</Fade>
);
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Login);
