import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserForm from './UserForm'
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Login from './Login';
import fire from '../config/Fire';


export class UserWelcom extends Component{


next = e => {
    e.preventDefault();
    this.props.nextStep();
  };


render(){

	return (
		<MuiThemeProvider>
        <React.Fragment>
            <Login />
            <p
            name="registration-text"
            >Not registered yet ? Register: </p>
            <RaisedButton 
            label="Register"
            primary={true}
            onClick={this.next}
            />
          </React.Fragment>
        </MuiThemeProvider>
		)
}
	
}
export default UserWelcom;