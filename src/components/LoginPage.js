import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../action/auth';

const LoginPage = (props) => (
  <div>
    <button onClick={props.startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
