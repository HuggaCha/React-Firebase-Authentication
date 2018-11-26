import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserForm from './UserForm'
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import fire from '../config/Fire';
import Notification from './Notification';


export class Login extends Component {

   constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
         email: '',
         password: '',
         errMessage: ''
      }

   }

   login(e) {
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => { 
         console.log(u.additionalUserInfo)
         console.log(u.displayName)
      }).catch((error) => {
         console.log(error.message);
         this.setState({errMessage: "*" + error.message});
            });
      
      fire.auth().onAuthStateChanged(function(user){
         if(user){
            user.updateProfile({
               displayName: "Murad"
            }).then(function(){
               console.log("Update sucess");
            }).catch(function(){
               console.log("Update faield");
            })
         }
      })

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
               <br/>
               <Notification message = {this.state.errMessage}/>
             </React.Fragment>
         </MuiThemeProvider>
      );
   }

}
export default Login;