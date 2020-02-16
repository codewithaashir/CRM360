import React,{Component} from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import Splash from '../Component/Splash/Splash';
import Login from '../Component/Login/login';
import history from './History';
import MiniDrawer from '../Component/DashBoard/Drawer/minidrawer';
class Routes extends Component{
render(){
    return(
           <Router history={history}>
            <Route exact path="/" component={Splash}/>
            <Route path="/applogin" component={Login} />
            <Route path='/dashboard' component={MiniDrawer}/>
            </Router>
    )
}
}
export default Routes;