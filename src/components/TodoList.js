import React, { Component } from 'react';
import { Container, Header, Title, Content, InputGroup, Input, List, Button, Icon } from 'native-base';
import { View, Text, Dimensions, Alert } from 'react-native';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


export default class TodoList extends Component {

  static propTypes = {
    removeTodo: PropTypes.func,
    setVisibilityFilter: PropTypes.func,
    toggleTodo: PropTypes.func,
    todos: PropTypes.array,
    displayType: PropTypes.string,
  }

  remove(id) {
    this.props.removeTodo(id);
  }

  update = (values) => {
    console.log('Submitted!', JSON.stringify(values))
    if(values.id < 0){
      this.props.addTodo(values.text)
    }else{
      this.props.updateTodo(values.id, values)
    }
    this.props.navigation.goBack(null)
  }

  edit(item, id) {
    if (id < 0){
      this.props.navigation.navigate(
        'Edit',
        {initialValues: {...item, id}, id, onSubmit: this.update});
    }else{
      this.props.navigation.navigate(
        'Edit',
        {initialValues: {...item, id}, id, onSubmit: this.update});
    }
  }

  renderTodoList() {
    return this.props.todos.map((item, index) =>
      <TodoItem
        edit={() => this.edit(item, index)}
        remove={() => this.remove(index)}
        item={item}
        key={index}
      />
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.renderTodoList()}
          </List>
        </Content>

        <Button block onPress={() => this.edit({}, -1)}>
          <Text><Icon name="add"/></Text>
        </Button>
      </Container>
    );
  }
}
