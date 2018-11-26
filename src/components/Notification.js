import React, { Component } from 'react';


const styles = {

    color: "red"

}

const Notification = (props) => {
    return (
         
        <div style = {styles}>{props.message}</div>
    );
   }


export default Notification;
