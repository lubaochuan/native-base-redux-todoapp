import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo, setVisibilityFilter } from './actions';
import TodoList from './components/TodoList';


function mapStateToProps(state) {
  return {
    todos: state.todos,
    displayType: state.displayType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: payload => dispatch(addTodo(payload)),
    updateTodo: payload => dispatch(updateTodo(payload)),
    removeTodo: index => dispatch(removeTodo(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
