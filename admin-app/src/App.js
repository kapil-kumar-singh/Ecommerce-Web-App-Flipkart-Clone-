import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import PrivateRoute from './components/HOC/PrivateRoute';
import Home from "./containers/home"
import Signin from "./containers/singin"
import Signup from "./containers/singup"




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
