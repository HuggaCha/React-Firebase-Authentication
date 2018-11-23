import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import fire from '../config/Fire';
import UserForm from './UserForm';
import FormUserDetails from './FormUserDetails';


export class FormPersonalDetails extends Component {
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  // checkMatch(e){
  //   if(e.target.value === this.props.password){
  //     console.log("Passwords match!")
  //   } else {
  //     console.log("passwords dont match");
  //   }
  // };

  render() {
    const { values, handleChange } = this.props;
   

    return (
      <MuiThemeProvider>
        <React.Fragment>
           <TextField
            hintText="Enter Your Password"
            floatingLabelText="Password"
            onChange={handleChange('password')}
            defaultValue={values.password}
             />
             <br />
            <TextField
            hintText="Retype Your Password"
            floatingLabelText="Re-type Password"
            onChange = {this.checkMatch}
             />
          <br />
            <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormPersonalDetails;
