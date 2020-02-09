import React, {Component} from 'react';
import './components/css/App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./home";
import Nav from "./nav";
import {Api, Timestamp} from "./api";
import About from "./about";
import styled from "@emotion/styled";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
  h1 {
    color: ${props => props.theme.body};
  }
`;


const App = () => {

    return (
        <Wrapper>
            <Router>
                <div className="app">
                    <Nav/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/api" exact component={Api}/>
                        <Route path="/api/timestamp/" component={Timestamp}/>
                    </Switch>
                </div>

            </Router>
        </Wrapper>
    );
};

export default App;
