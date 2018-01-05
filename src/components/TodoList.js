import React, { Component } from 'react';
import { Container, Header, Title, Content, InputGroup, Input, List, Button,
  Body, Icon } from 'native-base';
import { View, Text, Dimensions, Alert } from 'react-native';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


export default class TodoList extends Component {
  static navigationOptions = () => ({
    header: (
      <Header>
        <Body>
          <Title>Log</Title>
        </Body>
      </Header>
    )
  });

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
      this.props.addTodo(values)
    }else{
      this.props.updateTodo(values.id, values)
    }
    this.props.navigation.goBack(null)
  }

  edit(item, id) {
    subjects = this.props.subjects
    if (id < 0){
      this.props.navigation.navigate(
        'Edit',
        {initialValues: {...item, id}, id, subjects, onSubmit: this.update});
    }else{
      this.props.navigation.navigate(
        'Edit',
        {initialValues: {...item, id}, id, subjects, onSubmit: this.update});
    }
  }
  
  detail(item) {
    this.props.navigation.navigate('Detail', {item});
  }

  renderTodoList() {
    return this.props.todos.map((item, index) =>
      <TodoItem
        edit={() => this.edit(item, index)}
        detail={() => this.detail(item)}
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
