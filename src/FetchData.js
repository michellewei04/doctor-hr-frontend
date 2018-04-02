import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

var styles = {
    "dataStyles": {
        "marginTop": "20px",
        "marginBotton": "20px",
        "color": "blue",
    }
};

const rootURL='http://0.0.0.0:5000/api';

class FetchData extends React.Component {
        constructor() {
            super();
            this.state = {
                "data": ["nothing yet"],
                "emailTextField": "",
            };
        }

        onNameTextFieldChange = (event) => {
		// Update the nameTextField state whenever the text field is changed or perturbed in any way:
		this.setState({"nameTextField": event.target.value});
	    }

	    onButtonClick = (event) => {
		console.log(this.state.nameTextField); // log the current nameTextField content
	    }

        getData = (email) => {
            axios.get(`${rootURL}/heart_rate/${email}`).then( (response) => {
                console.log(response);
                console.log(response.status);
                this.setState({"data": response.data});
            })
        }

        render () {
                return (
                    <div>
                            <TextField
					                value={this.state.nameTextField}
					                onChange={this.onNameTextFieldChange}/>
                            <Button variant="raised" onClick={this.onButtonClick}>
					                Log text field data.
                            </Button>
				            {this.state.nameTextField /*show the current nameTextField state here in the browser */}
                     </div>
                )
        }
}

export default FetchData;