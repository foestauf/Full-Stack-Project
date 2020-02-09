import React, {Component} from 'react';
import './components/css/App.css';
import {Link} from "react-router-dom";
import axios from 'axios';

export class Api extends Component {
    state = {
        data: ''
    };
    componentDidMount = () => {
        // Make sure to change the (localhost) on the line bellow
        // to the public DNS of your EC2 instance
    };

    render() {
        return (
            <div className="api">
                <h3>Here are some of the API's I have created from FreeCodeCamp.</h3>
                <h2><Link to='/api/timestamp/'>Timestamp</Link></h2>
            </div>
        );
    }
}

export class Timestamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    handleSubmit(e) {
        console.log('Inside submit');
        axios.get(`http://localhost:4000/api/timestamp/${this.state.value}`)
        .then(res => {
            debugger;
            console.log(res);
            debugger
            console.log(res.data);
            debugger;
            const dataFromServer = res.data;
            this.setState({data: dataFromServer})
                .catch(function (error) {
                    console.log(error);
                });
        })
    }

    render() {
        return (
            <div>
                <h3>Hello from timestamp API</h3>
                <p>This API is intended to allow the user or process to submit an ISO 18601 string and receive a JSON
                    object with the EPOCH as a number
                    and a UTC String.</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter ISO 1801 String
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="submit" />
                </form>
                <p>Returned: {this.state.data}</p>
            </div>
        );
    }
}


export default Api;