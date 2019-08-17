import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
    error: ''
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };

  onCalendarFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    };
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Description" value={this.state.description} onChange={this.onDescriptionChange} autoFocus />
          <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onCalendarFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false} readOnly />
          <textarea placeholder="Add a note for your expense (optional)" value={this.state.note} onChange={this.onNoteChange} />
          <button>Create Expense</button>
        </form>
      </div>
    );
  }
}
