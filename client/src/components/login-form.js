import React from "react";
import "./style.scss"
import { Redirect } from 'react-router-dom';
import axios from 'axios';


export class LoginForm extends React.Component {
  constructor() {
    super()
    //set the state to initial value
    this.state = {
      username: '',
      password: '',
      redirectTo: null
    }
    //handle the click of submit button
    this.handleSubmit = this.handleSubmit.bind(this)
    //handle the change in username and password
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')

    axios
      .post('/user/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          })
          // update the state to redirect to home
          this.setState({
            redirectTo: '/forum'
          })
        }
      }).catch(error => {
        console.log('login error: ')
        console.log(error);

      })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div class="form-row justify-content-center">
          <div className="base-container">
            <div className="header">Log In</div>
            <div className="content">
              <div className="form">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" placeholder="username" value={this.state.username}
                    onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="password" value={this.state.password}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <button className="btn btn-secondary active " type="submit" onClick={this.handleSubmit} >
                    Login
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      )
    }
  }
}
export default LoginForm;