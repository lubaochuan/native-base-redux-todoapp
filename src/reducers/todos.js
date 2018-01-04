const initialState = {
  todos: [{text: 'read a book', completed: false}, {text: 'go run', completed: false}], // Array of objects of type {text: 'my task', completed: false}
  displayType: 'all', // expected values: 'all', 'completed', 'active'
}

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(
          (todo, index) => {
            console.log("index:"+index)
            if(action.index === index){
              return action.payload;
            }else{
              return todo;
            }
          })
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: [...state.todos.slice(0, action.index), ...state.todos.slice(action.index + 1)],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state, displayType: action.displayType,
      };
    default:
  }
  return state;
}
