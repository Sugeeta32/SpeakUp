import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css'
// components
// import SignIn from "./pages/SignIn";
import Forum from './components/forum'
import Navbar from './components/navbar'
//import Home from './components/home'



class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
  }

  

  render() {
    return (
      <div className="App">
      <Navbar/>
      <Route
          exact path="/forum"
          render={() =>
            <Forum
              loggedIn={this.state.loggedIn}
            />}
        />
      </div>
    );
  }
}

export default App;