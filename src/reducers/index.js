import { combineReducers } from 'redux'
import { todos as main } from './todos'
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
  main,
  form: formReducer
})

export default allReducers;
