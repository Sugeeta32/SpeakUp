import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png';
import axios from 'axios'
import "./navbar.css";


class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            //  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <nav className="navbar navbar-expand-sm " >  
                        <div id="top-filler"></div>
                        <a className="navbar-brand" href="/">
                        <img src ={logo} className ="AppLogo" alt ="logo"/>
                        </a>
                            {/* <h1 className="App-title">SpeakUp</h1> */}
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="/forum" className="btn btn-link ml-5">
                                    <span  id ="sugeeta">Stories</span>
				                </Link>
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span  id ="sugeeta">Logout</span></Link>
                                
                            </section>
                        ) : ( 
                            <section className="navbar-section">
                                <Link to="/" className="btn btn-link text-secondary ml-5">
                                    <span  id ="sugeeta">Home</span>
                                </Link>
                                <Link to="/login" className="btn btn-link text-secondary">
                                    <span  id ="sugeeta">Login</span>
				                </Link>
                                <Link to="/signup" className="btn btn-link">
                                    <span  id ="sugeeta">Sign Up</span>
				                </Link>
                                <Link to="/forum" className="btn btn-link">
                                    <span  id ="sugeeta">Stories</span>
				                </Link>
                            </section>
                        )}
            </nav>

        );

    }
}

export default Navbar