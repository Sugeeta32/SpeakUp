import React from "react";
 //import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import FormControl from 'react-bootstrap/FormControl';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import logo from "../../logo.png";



import "./style.css";

function Nav() {
  return (
<nav className="navbar navbar-dark ">
      <a className="navbar-brand" href="/">
      <img src ={logo} className ="AppLogo" alt ="logo"/>
      </a>
      
    </nav>
    
  );
}

export default Nav;