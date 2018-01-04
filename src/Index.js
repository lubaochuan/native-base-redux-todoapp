import React, { Component } from 'react';
import { createStore,  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'

//import AppContainer from './AppContainer';
import MainScreenNavigator from './components/index';

import reducer from './reducer';

const logger = createLogger()
const store = createStore(reducer, applyMiddleware(logger))

export default class Index extends Component { // eslint-disable-line
  render() { // eslint-disable-line
    return (
      <Provider store={store} >
        <MainScreenNavigator />
      </Provider>
    );
  }
}
