import React, { Component } from 'react';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAyaQE9Y6BDNNAZqPpWsZYXgExYrWV0whY",
    authDomain: "react-authentication-a979d.firebaseapp.com",
    databaseURL: "https://react-authentication-a979d.firebaseio.com",
    projectId: "react-authentication-a979d",
    storageBucket: "",
    messagingSenderId: "497182918333"
  };


 const fire = firebase.initializeApp(config); 
 fire.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION); //Set the Authentication state persistence (SESSION, LOCAL, NONE)

 export default fire; 