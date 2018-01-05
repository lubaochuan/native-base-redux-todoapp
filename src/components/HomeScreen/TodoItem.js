import React from 'react'
import { Alert } from 'react-native'
import { Text, Icon, ListItem, Body, Right } from 'native-base'
import PropTypes from 'prop-types'
import moment from 'moment'

function dayOfWeek(dateString){
  return moment(dateString, 'MM/DD/YYYY').format('dddd MM/DD/YYYY');
}

const TodoItem = ({ edit, detail, remove, item }) => (
  <ListItem button
    onPress={detail}
    onLongPress={() =>
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
        <Text note>{dayOfWeek(item.date)} {"\n"}{item.duration} minutes</Text>
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
