import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css'
// components
// import SignIn from "./pages/SignIn";

import Navbar from './components/navbar'
//import Home from './components/home'



class App extends Component {
  constructor() {
    super()
  }

  

  render() {
    return (
      <div className="App">
      <Navbar/>
       
      </div>
    );
  }
}

export default App;