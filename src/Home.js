import React, { Component } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import fire from './config/Fire';

import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
    window.location.reload();
    alert("You have successfully signed out");
  }

  printUserInfoToConsole(){
    console.log(fire.auth().currentUser);
  }

  render() {

    return (
      <div className="App">

        <h1>You are home !</h1>
        <button
          name="signout"
          label="Register"
          primary={true}
          onClick={this.logout}
        >SIGN OUT</button>
        <button
          name="userInfo"
          label="UserInfo"
          onClick={this.printUserInfoToConsole}
          >
          PRINT INFO
        </button>

      </div>
    );
  }
}

export default Home;
