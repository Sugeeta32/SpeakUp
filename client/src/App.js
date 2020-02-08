import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css'

import Forum from './components/forum'
import Navbar from './components/navbar'
import LoginForm from './components/login-form'
import Footer from './components/footer'
import Home from './components/Home'
import Signup from './components/signup'
import NewStory from './components/newstory'
import Family from './components/stories/family'
import Social from './components/stories/social'
import Health from './components/stories/health'
import Psych from './components/stories/psychological'
import Emotion from './components/stories/emotional'
import Finance from './components/stories/financial'
import Comments from './components/comments'
import Quote from './components/quotes'
//import Family from './components/stories/family';
//import Social from './components/stories/social';
//import Footer from './components/footer'



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
      console.log('App.js-->Get user response: ')
      console.log('app.js getUser-->'+response.data);
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
       
        
          <Route
            exact path="/"
            component={Home} />
           
          
          <Route path="/login" render={() =>
         < LoginForm updateUser={this.updateUser} /> } />
         <Route path="/signup" render ={() => <Signup signup = {this.signup } /> }/>

         <Route
            exact path="/forum"
            render={() =>
              <Forum
                loggedIn={this.state.loggedIn}
              />}
          />

         <Route
          path="/newstory"
          render={() =>
            <NewStory
              username={this.state.username}
              loggedIn={this.state.loggedIn}
            />}
        />
       
        <Route
          path="/forum/family"
          render={() =>
            <Family
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/social"
          render={() =>
            <Social
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/health"
          render={() =>
            <Health
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/psych"
          render={() =>
            <Psych
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/finance"
          render={() =>
            <Finance
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/emotion"
          render={() =>
            <Emotion
              loggedIn={this.state.loggedIn}
            />}
        />
            <Quote/>
        <Route
          exact path="/story/:id"
          component={Comments} />
       
          <Footer/>
        
      </div>
    );
  }
}

export default App;