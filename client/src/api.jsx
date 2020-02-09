import React, {Component} from 'react';
import './components/css/App.css';
import {Link} from "react-router-dom";
import axios from 'axios';
import './components/css/App.css';

class Api extends Component {
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

class Timestamp extends Component {
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
        e.preventDefault();
        console.log('Inside submit');
        axios.get(`http://3.210.231.52:4000/api/timestamp/${this.state.value}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                const dataFromServer = res.data.utc;
                this.setState({data: dataFromServer})
                /*                .catch(function (err) {
                                    console.log(err);
                                });
                */
            })
    }

    render() {
        return (
            <div>
                <h3>Hello from timestamp API</h3>
                <p>This API is intended to allow the user or process to submit an ISO 18601 string and receive a JSON
                    object with the EPOCH as a number
                    and a UTC String.</p>
                <p>
                    API Endpoint is http://3.210.231.52:4000/api/timestamp/:date_string?
                    Expected return if valid string is received will be:
                    <pre>{'{unix: number, utc: string}'}</pre>
                </p>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter ISO 1801 String
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
                <p>Returned: {this.state.data}</p>
            </div>
        );
    }
}


export {Api, Timestamp};