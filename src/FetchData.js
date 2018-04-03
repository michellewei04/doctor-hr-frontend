import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import HeartRateTable from './HeartRateTable.js';

const styles = {
    "buttonStyles": {
        "marginTop": "20px",
        "marginBotton": "20px",
        "color": "blue",
    }
};

const rootURL='http://0.0.0.0:5000/api';


export default class FetchData extends React.Component {
        constructor() {
            super();
            this.state = {
                "emailTextField": "",
                "heartRates": [],
                "times":[],
            };
        }

        onEmailTextFieldChange = (event) => {
		        // Update the nameTextField state whenever the text field is changed or perturbed in any way:
		        this.setState({"emailTextField": event.target.value});
	    }

	    onButtonClick = () => {
            console.log(this.state.emailTextField); // log the current nameTextField content
            // const email = this.state.nameTextField;
            axios.get(`${rootURL}/heart_rate/${this.state.emailTextField}`).then(
                (response) => {
                    this.setState({"heartRates": response.data["User heart rates and times"][0]});
                    this.setState({"times": response.data["User heart rates and times"][1]});
                    console.log(response);
                    console.log(response.status);
                },
                (error) => { console.log(error) })
        }

        render () {
                return (
                    <div>
                            <TextField
					                value={this.state.emailTextField}
					                onChange={this.onEmailTextFieldChange}
                                    style={{ width: '300px', margin: '50px', input: { margin: 20 } }}/>
                            <Button variant="raised" onClick={this.onButtonClick}>
					                Search Database
                            </Button>
                            <div style={styles.buttonStyles}>
				            </div>
                            <myLineChart/>
                            <HeartRateTable
                                    email = {this.state.emailTextField}
                                    heartRates={this.state.heartRates}
                                    times={this.state.times}/>
                     </div>
                )
        }
}