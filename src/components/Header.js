import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {startLogout} from '../action/auth';

const Header = (props) => (
  <header>
    <h1>ExpenseHub</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/add" activeClassName="is-active">Add Expense</NavLink>
    <button onClick={props.startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
