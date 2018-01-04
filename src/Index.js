import React, { Component } from 'react';
import { createStore,  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'

//import AppContainer from './AppContainer';
import MainScreenNavigator from './components/index';

import allReducers from './reducers/index';

const logger = createLogger()
const store = createStore(allReducers, applyMiddleware(logger))

export default class Index extends Component { // eslint-disable-line
  render() { // eslint-disable-line
    return (
      <Provider store={store} >
        <MainScreenNavigator />
      </Provider>
    );
  }
}
