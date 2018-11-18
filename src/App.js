import React, { Component } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import fire from './config/Fire'; 
import Home from './Home';

class App extends Component {
 
constructor(props){
	super(props);
	this.state = {
    user: false,
	}
}

componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
     
      if(user){
        this.setState({user: true});

      } 
      
    });
  }

  render() {
    return (
      <div className="App">
        
      {this.state.user ? <Home /> : <UserForm />}
        
      </div>
    );
  }
}

export default App;
