import React from "react";
import "./style.scss"
import { Redirect } from 'react-router-dom';
import axios from 'axios';


export class Login extends React.Component {
  constructor(props) {
    super(props)
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

//handlechange function
handleChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

//handlesubmit funtion
  handleSubmit(e) {
    e.preventDefault()
    console.log("handleSubmit")
    //instructing Axios to send a POST request to /user/login with an object of key/value pairs as its data. Axios will automatically convert the data to JSON and send it as the request body.
    axios.post("./user/login", {
      username: this.state.username,
      password: this.state.password

    }).then(res => {
      console.log("login response" + res)
      if (res.status === 200) {

        this.props.updateUser({
          loggedIn: true,
          username: res.data.username
        })
        this.setState({
          redirectTo: "/forum"
        })
      }

    }).catch(err => {
      console.log("login error" + err)
    })

  }

  

  render() {
    if(this.state.redirectTo){
return<Redirect to ={{pathname: this.state.redirectTo}}/>
    }else{
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            {/* <img src={logo} /> */}
          </div>

          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.username}
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" onClick={this.handleSubmit} className="btn1">
            Login
          </button>
        </div>
      </div>
    )
  }
  }
}
export default Login;