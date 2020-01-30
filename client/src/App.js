import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "./style.scss";
import Sidebar from "./components/Sidebar";
// import { Login, Register } from "./components/login/index";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

import Nav from "./components/Nav";
function App() {
  return (
    <Router>
      <div>
      
        <Nav />
        <Sidebar/>
        <Switch>
       
        
        <Route  exact path="/" component={Home} />
        <Route  exact path="/Signin" component={SignIn} />
        <Route  component={NoMatch} />
        </Switch>
      
      </div>
    </Router>


  )
}

export default App;

