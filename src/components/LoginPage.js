import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../action/auth';

const LoginPage = (props) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">ExpenseHub</h1>
      <p>It's time to get your expenses under control.</p>
      <button className="button" onClick={props.startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
