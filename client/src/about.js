import React, { Component } from 'react';
import './App.css';

class About extends Component {
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
                Hello from About>
            </div>
        );
    }
}

export default About;
