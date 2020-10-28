import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import './App.css';
import PrivateRoute from './components/HOC/PrivateRoute';
import Home from "./containers/home";
import Signin from "./containers/singin";
import Signup from "./containers/singup";
import { isUserLoggedIn} from "./actions/auth_action";





function App() {

  const dispatch = useDispatch();
  const auth = useSelector( state => state.auth)

  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
    </div>
  );
}

export default App;
