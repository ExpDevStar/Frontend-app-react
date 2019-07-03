import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchToken } from '../../actions/signInActions';
import { NavLink } from 'react-router-dom';

import './SignIn.scss';

class SignIn extends Component {
  render(){
    return (
      <div className="signin-container">
        <div >
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="userName" placeholder="Username"></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Password"></input>
                </div>
                <div>
                    <button type="submit" name="signIn" className="btn btn-info signin-btn">Login</button>
                </div>
            </form>
        </div>
        <div className="signup-options-container">
            <NavLink to="/signup" className="signup-link">Sign Up</NavLink>
            <NavLink to="/forgotpassword" className="forgot-password-link">Forgot</NavLink>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    UserStore: state.UserStore
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fetchToken,
            },
            dispatch
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)
