import React, { Component } from 'react';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Forum from './components/forum'
import Navbar from './components/navbar'
import Login from './components/login'
//import SignIn from './pages/SignIn'
import NoMatch from './pages/NoMatch'
import Home from './pages/Home'
import Signup from './components/signup'
//import Home from './components/home'



class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }
  componentDidMount() {
    this.getUser()
  }
  updateUser(userObject) {
    this.setState(userObject)
  }
  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }


  render() {
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Switch>
          <Route
            exact path="/"
            component={Home} />
          <Route
            exact path="/forum"
            render={() =>
              <Forum
                loggedIn={this.state.loggedIn}
              />}
          />
          <Route path="/login" render={() =>
            < Login updateUser={this.updateUser} />
          } />
         <Route path="/signup" render ={() => <Signup signup = {this.signup } /> }/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;