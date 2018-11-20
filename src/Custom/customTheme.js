import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {orange500} from 'material-ui/styles/colors'; 
import {deepOrange500} from 'material-ui/styles/colors';


class CustomTheme extends Component{

  render(){
      return (
        const muiTheme = getMuiTheme({
            pallete: {
                primary1Color: orange500, 
                accent1Color: deepOrange500
            }
        })

      );
  }
}

    
       
        


export default muiTheme; 