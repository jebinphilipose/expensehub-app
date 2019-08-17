import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/add" component={AddExpensePage} exact={true} />
      <Route path="/edit/:id" component={EditExpensePage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
