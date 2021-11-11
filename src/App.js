import React, { useEffect } from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom";
import { Home } from './container/Home';
import { Signin } from './container/Signin';
import { Signup } from './container/Signup';
import PrivateRoute from './component/HOC/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';



function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }

  },);

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
