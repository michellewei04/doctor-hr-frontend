import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';

var styles = {
    "dataStyles": {
        "marginTop": "20px",
        "marginBotton": "20px",
        "color": "blue",
    }
};

const rootURL='http://0.0.0.0:5000';

class FetchData extends React.Component {
        constructor() {
            super();
            this.state = {
                "data": ["nothing yet"],
            };
        }

        getData = () => {
            axios.get(rootURL+"/api/heart_rate/interval_average").then( (response) => {
                console.log(response);
                console.log(response.status);
                this.setState({"data": response.data});
            })
        }

        render () {
                return (
                    <div>
                            <Button variant="raised" onClick={this.getData}>
                                Get Data
                            </Button>

                            <div style={styles.dataStyle}>
                                    {this.state.data[0]}
                            </div>
                     </div>
                )
        }
}

export default FetchData;