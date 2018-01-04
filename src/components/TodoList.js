import React, { Component } from 'react';
import { Container, Header, Title, Content, InputGroup, Input, List, Button, Icon } from 'native-base';
import { View, Text, Dimensions, Alert } from 'react-native';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const { width } = Dimensions.get('window');

export default class TodoList extends Component {

  static propTypes = {
    removeTodo: PropTypes.func,
    setVisibilityFilter: PropTypes.func,
    toggleTodo: PropTypes.func,
    todos: PropTypes.array,
    displayType: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = { inputText: '', displayType: 'all' };
  }
  
  onOpenItem=(rowData, rowID) => {
    this.props.navigation.navigate(
      'Edit',
      {item: rowData, id: rowID, update: this.updateItem});
  }

  remove(id) {
    this.props.removeTodo(id);
  }

  toggle(id) {
    this.props.toggleTodo(id);
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
        <Content contentContainerStyle={{ justifyContent: 'space-between' }} >
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
