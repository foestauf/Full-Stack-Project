import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends Component {
  state = {
    data: ''
  }
  componentDidMount = () => {
    // Make sure to change the (localhost) on the line bellow 
    // to the public DNS of your EC2 instance
    axios.get(`http://3.210.231.52:4000/sayHello`)
    .then(res => {
      const dataFromServer = res.data;
      this.setState({ data: dataFromServer });
    });
  }
  render() {
    return (
        <Router>
      <nav>
        <ul>
          <li>
            <Link to="/" exact>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/api">API</Link>
          </li>
        </ul>
      </nav>
          


    </Router>
    );
  }
}

export default App;
