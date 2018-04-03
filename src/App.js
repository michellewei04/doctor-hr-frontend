import React from 'react';
import FetchData from './FetchData.js';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import Chart from 'chart.js';


var styles = {
        "appVarStyle": {
            "marginBottom": "10px",
        }
}


export default class App extends React.Component {
  render() {
    return (
      <div>
          <AppBar position="static" style={styles.appBarStyle}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Heart Rates App
                    </Typography>
                </Toolbar>
          </AppBar>
          <FetchData />
      </div>
    );
  }
}
