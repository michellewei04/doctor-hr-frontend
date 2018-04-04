import React from 'react';
import FetchData from './FetchData.js';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';


var styles = {
        appBarStyle: {
            marginBottom: "10px",
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
        typographyStyle:{
            align: 'center',
        }
}


export default class App extends React.Component {
  render() {
    return (
      <div>
          <AppBar position="static" style={styles.appBarStyle}>
                <Toolbar>
                    <Typography variant="title" align="center" color="inherit" >
                        Heart Rates App
                    </Typography>
                </Toolbar>
          </AppBar>
          <FetchData />
      </div>
    );
  }
}
