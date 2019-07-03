import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import './ForgotPassword.scss';

class ForgotPassword extends Component {
  render(){
    return <div className="signin-container">
        <div >
          <form >
            <div className="form-group">
              <input type="email" className="form-control" id="email" placeholder="Email"></input>
            </div>
            <div >
              <button type="submit" name="signIn" className=" btn btn-info fogotpwd btn">Forgot Password</button>
            </div>
          </form>
        </div>
        <div className="signup-options-container">
          <NavLink to="/signIn" className="signup-link">Sign In</NavLink>
          <NavLink to="/signUp" className="forgot-password-link">Sign Up</NavLink>

        </div>
      </div>
  }
}

export default ForgotPassword;
