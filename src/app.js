import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
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

const routes = (
    <BrowserRouter>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={CreateExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </BrowserRouter>
);

// render your app here
ReactDOM.render(routes, document.getElementById('app'));
