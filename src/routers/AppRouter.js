import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true} />
      <PrivateRoute path="/add" component={AddExpensePage} exact={true} />
      <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
