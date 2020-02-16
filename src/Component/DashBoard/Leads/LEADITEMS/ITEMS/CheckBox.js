import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import "typeface-roboto";
import Axios from 'axios';
import { Apis, HeaderSend } from '../../../../../Config/Apis';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const Token=localStorage.getItem('@appToken')
  alert(Token);
  // useEffect(()=>{
  //   Axios.get(Apis.Amenities,{headers:HeaderSend.SetHeders(Token)}).then(res=>{
  //     alert(res);
  //   }).catch(err=>{
  //     alert(err.message)
  //   })
  // },[])

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;
  const OBJ=[{},{},{},{},{},{},{}];
  const OBJ2=[{},{},{}];
  return (
    <div className={classes.root}>
      {OBJ2.map((val,index)=>(<FormControl component="fieldset" className={classes.formControl}>
        
        
        <FormGroup>
          {OBJ.map((val,index)=>(<FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange('gilad')} value="gilad" />}
            label="Gilad Gray"
          />))}
        </FormGroup>
        
      </FormControl>
  ))
}    
      
    </div>
  );
}