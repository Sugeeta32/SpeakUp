import React from "react";
import "./style.scss"
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    //set the state to initial value
    this.state = {
      username: '',
      email: '',
      password: '',
      redirectTo: null
    }
    //handle the click of submit button
    this.handleSubmit = this.handleSubmit.bind(this)
    //handle the change in username and password
    this.handleChange = this.handleChange.bind(this)

  }

  //handlechange function
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("register handlesubmit, username : " + this.state.username)

    //request server to add new username,email and paasword
    axios.post("./user/", {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      console.log("registration response" + res)
      if (!res.data.errmsg) {

        console.log("successful registration")
        this.setState({

          //redirected to login page 
          redirectTo: "/login"
        })

      } else {
        console.log("username not available")
      }

    }).catch(err => {
      console.log("registartion error" + err)
    })

  }

  

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className="base-container">
          <div className="header">Register</div>
          <div className="content">

            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" value={this.state.username}
                  onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email" value={this.state.email}
                  onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="password" value={this.state.password}
                  onChange={this.handleChange} />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" onClick={this.handleSubmit} className="btn1">
              Register
          </button>
          </div>
        </div>
      )
    }
  }
}
export default Signup;