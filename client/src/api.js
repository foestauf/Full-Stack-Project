import React, { Component } from 'react';
import './App.css';

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
            <div>
                Hello from API
            </div>
        );
    }
}

export default Api;
