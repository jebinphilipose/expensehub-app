import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
// import your app here
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is ExpenseDashboardPage component
  </div>
);

const CreateExpensePage = () => (
  <div>
    This is CreateExpensePage component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is EditExpensePage component
  </div>
);

const HelpPage = () => (
  <div>
    This is HelpPage component
  </div>
);

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go back</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>ExpenseHub</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

const routes = (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={CreateExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
);

// render your app here
ReactDOM.render(routes, document.getElementById('app'));
