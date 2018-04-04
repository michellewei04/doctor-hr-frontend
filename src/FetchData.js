import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import HeartRateTable from './HeartRateTable.js';

const styles = {
          buttonStyle: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
          },
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
                                    style={{ width: '300px', justify: 'center', margin: '50px', input: { margin: 20 } }}/>
                            <Button variant="raised" onClick={this.onButtonClick} style={styles.buttonStyle}>
					                Search Database
                            </Button>
                            <HeartRateTable
                                    email = {this.state.emailTextField}
                                    heartRates={this.state.heartRates}
                                    times={this.state.times}/>
                     </div>
                )
        }
}