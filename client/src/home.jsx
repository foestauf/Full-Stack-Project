import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './components/css/App.css';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Home extends Component {
    state = {
        data: ''
    };
    componentDidMount = () => {
        // Make sure to change the (localhost) on the line bellow
        // to the public DNS of your EC2 instance
        axios.get(`http://3.210.231.52:4000/sayHello`)
            .then(res => {
                const dataFromServer = res.data;
                this.setState({ data: dataFromServer });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="Home">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Server is saying:</p>
                    <p>
                        {this.state.data}
                    </p>

                </header>
            </div>
        );
    }
}

export default Home;
