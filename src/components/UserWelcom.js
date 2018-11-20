import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {orange500} from 'material-ui/styles/colors'; 
import {deepOrange500} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
      primary1Color: "#cddc39",
      accent1Color: "#76ff03"
  }
});


export class UserWelcom extends Component{


next = e => {
    e.preventDefault();
    this.props.nextStep();
  };

render(){

	return (
		<MuiThemeProvider muiTheme = {muiTheme}>
        <React.Fragment>
            <Login />
            <p>Not registered yet ? Register: </p>
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