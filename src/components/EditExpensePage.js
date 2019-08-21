import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {startEditExpense, startRemoveExpense} from '../action/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => (
  <div>
    <h1>Edit Expense</h1>
    { props.expense ?
      <div>
        <ExpenseForm expense={props.expense} onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense));
          props.history.push('/');
        }} />
        <button onClick={() => {
          props.dispatch(startRemoveExpense(props.expense.id));
          props.history.push('/');
        }}>Remove</button>
      </div> :
      <Redirect to="/" />
    }
  </div>
);

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);
