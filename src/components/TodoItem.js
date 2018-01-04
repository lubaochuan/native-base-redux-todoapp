import React from 'react';
import { Text, Icon, ListItem, CheckBox } from 'native-base';
import PropTypes from 'prop-types';

const TodoItem = ({ edit, remove, item }) => (
  <ListItem>
    <Text onLongPress={edit}>
      {item.text}
    </Text>
  </ListItem>
);

TodoItem.propTypes = {
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired, //eslint-disable-line
};

export default TodoItem;
