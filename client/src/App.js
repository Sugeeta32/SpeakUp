import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Forums from "./pages/Forums";
import Forum from "./pages/Forum";
import NoMatch from "./pages/NoMatch";

function App() {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Forums}/>
          <Route exact path="/forums" component={Forums}/>
          <Route exact path="/forums/:id" component={Forum}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;