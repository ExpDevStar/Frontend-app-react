import React from 'react';
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import { SignIn, SignUp, ForgotPassword, Dashboard } from './pages';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/forgotpassword" component={ForgotPassword}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route render={ props => <Redirect to={{ pathname: '/signin', state: { from: props.location } }} /> } />
        </Switch>
    </div>
  );
}

export default App;
