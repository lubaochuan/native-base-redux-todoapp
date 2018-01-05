import { connect } from 'react-redux';
import { addTodo, updateTodo, toggleTodo, removeTodo, setVisibilityFilter } from './actions';
import TodoList from './components/TodoList';


function mapStateToProps(state) {
  return {
    todos: state.main.todos,
    subjects: state.main.subjects,
    displayType: state.main.displayType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: payload => dispatch(addTodo(payload)),
    updateTodo: (index, payload) => dispatch(updateTodo(index, payload)),
    removeTodo: index => dispatch(removeTodo(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
