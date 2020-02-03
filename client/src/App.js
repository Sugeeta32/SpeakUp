import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css'

import Forum from './components/forum'
import Navbar from './components/navbar'
import SignIn from './pages/SignIn'
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
        <Navbar />

        <Route
          exact path="/forum"
          render={() =>
            <Forum
              loggedIn={this.state.loggedIn}
            />}


        />

        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignIn} />
      </div>
    );
  }
}

export default App;