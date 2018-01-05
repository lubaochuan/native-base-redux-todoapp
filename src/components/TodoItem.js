import React from 'react';
import { Alert } from 'react-native';
import { Text, Icon, ListItem, Body, Right } from 'native-base';
import PropTypes from 'prop-types';

const TodoItem = ({ edit, remove, item }) => (
  <ListItem button onLongPress={() =>
    Alert.alert(
      'Quick Menu',
      null,
      [
        {text: 'Delete', onPress: remove},
        {text: 'Edit', onPress: edit},
        {text: 'Cancel'}
      ],
      { cancelable: false }
    )}>
    <Body>
        <Text>{item.subject}</Text>
        <Text note>{item.text}</Text>
    </Body>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
);

TodoItem.propTypes = {
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired, //eslint-disable-line
};

export default TodoItem;
