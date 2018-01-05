import React, { Component } from 'react';
import { createStore,  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import allReducers from './reducers/index';
import MainScreenNavigator from './components/index';


// configue redux-persist
const config = {
  key: 'root',
  blacklist: ['form'],
  storage,
}

const reducer = persistCombineReducers(config, allReducers)
const logger = createLogger()
const store = createStore(allReducers, applyMiddleware(logger))
persistStore(store)

export default class Index extends Component { // eslint-disable-line
  render() { // eslint-disable-line
    return (
      <Provider store={store} >
        <MainScreenNavigator />
      </Provider>
    );
  }
}
