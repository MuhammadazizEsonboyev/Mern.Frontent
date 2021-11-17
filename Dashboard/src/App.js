import React, { useEffect } from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom"; 
import { Signin } from './container/Signin';
import { Signup } from './container/Signup';
import PrivateRoute from './component/HOC/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import Home from './container/Home';
import { Products } from './container/Products/index';
import { Orders } from './container/Orders/index';
import { Category } from './container/Category/index';
// import { getAllCategory } from './actions/category.actions';
import { getInitialData } from './actions/initialData.actions';





function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }

    dispatch(getInitialData());

  }, []);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component = {Home} />
        <PrivateRoute path="/category"  component = {Category} />
        <PrivateRoute path="/products" component={Products}/>
        <PrivateRoute path="/orders" component={Orders}/>

        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>

    </div>
  );
}

export default App;
