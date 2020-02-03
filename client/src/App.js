import React, { Component } from 'react';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Forum from './components/forum'
import Navbar from './components/navbar'
import SignIn from './pages/SignIn'
import NoMatch from './pages/NoMatch'
import Home from './pages/Home'
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
        <Switch>
          <Route
            exact path="/forum"
            render={() =>
              <Forum
                loggedIn={this.state.loggedIn}
              />}
          />
          <Route
            exact path="/"
            component={Home} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignIn} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;