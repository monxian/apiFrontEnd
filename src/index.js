import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

import App from './components/app';
import reduxThunk from 'redux-thunk';


//Sign in section
import Signin from './components/auth/signin';

// Activities section
import ActivityIndex from './components/activity_index';
import ActivityNew from './components/activity_new';
import ActivityShow from './components/activity_show';

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <App />
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/activity/new" component={ActivityNew} />
          <Route path="/activity/:id" component={ActivityShow} />
          <Route path="/" component={ActivityIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
