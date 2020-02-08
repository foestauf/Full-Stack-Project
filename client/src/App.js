import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home  from "./home";
import Nav from "./nav";
import Api from "./api";
import About from "./about";

class App extends Component {
  state = {
    data: ''
  }
  componentDidMount = () => {
    /*
     Make sure to change the (localhost) on the line bellow
     to the public DNS of your EC2 instance
    */
  };
  render() {
    return (
        <Router>
          <div className="app">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/api" component={Api} />
            </Switch>
          </div>

    </Router>
    );
  }
}

export default App;
