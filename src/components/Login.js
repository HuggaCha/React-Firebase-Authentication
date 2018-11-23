import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserForm from './UserForm'
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import fire from '../config/Fire';


export class Login extends Component {

   constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
         email: '',
         password: ''
      }
   }

   login(e) {
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => { }).catch((error) => {
         console.log(error);
      });
   }

   handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });

   }

   render() {

      return (
         <MuiThemeProvider>
            <React.Fragment>
               <AppBar title="Welcome to User Registration/Login" />
               <TextField
                  name="email"
                  hintText="Your email"
                  floatingLabelText="email"
                  onChange={this.handleChange}
               /><br />
               <TextField
                  name="password"
                  hintText="Your password"
                  floatingLabelText="password"
                  type="password"
                  onChange={this.handleChange}
               // onChange = {}
               /><br />
               <RaisedButton
                  name="submit"
                  label="Submit"
                  primary={true}
                  onClick={this.login}
               />
            </React.Fragment>
         </MuiThemeProvider>
      );
   }

}
export default Login;