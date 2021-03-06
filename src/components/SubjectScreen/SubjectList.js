import React, { Component } from 'react'
import { Container, Header, Title, Content, InputGroup, Input, List, ListItem,
  Button, Body, Icon, Fab, Footer, Left, Right } from 'native-base'
import { View, Text, Dimensions, Alert } from 'react-native'
import PropTypes from 'prop-types'


export default class SubjectList extends Component {
  static propTypes = {
    addSubject: PropTypes.func,
    removeSubject: PropTypes.func,
    subjects: PropTypes.array,
  }
  
  constructor(props) {
    super(props)
    this.state = { inputText: '' }
  }


  add() {
    // only submit if subject is not blank
    subject = this.state.inputText
    if(subject.replace(/^\s+|\s+$/gm,'').length != 0){
      this.props.addSubject(subject)
      // clear input field
      this.setState({ inputText:'' })
    }
  }

  remove(id) {
    this.props.removeSubject(id);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Subjects</Title>
          </Body>
          <Right />
        </Header>
        <Content >
          <List>
            {this.props.subjects.map((item, index) =>
              <ListItem button
                onLongPress={() =>
                  Alert.alert(
                    'Quick Menu',
                    null,
                    [
                      {text: 'Delete', onPress: () => this.remove(index)},
                      {text: 'Cancel'}
                    ],
                    { cancelable: false }
                  )}>
                <Body>
                    <Text>{item}</Text>
                </Body>
              </ListItem>)}
          </List>
        </Content>
        <Footer>
          <Input
            placeholder="New Subject"
            value={this.state.inputText}
            onChangeText={inputText => this.setState({ inputText })}/>
          <Fab
             containerStyle={{ marginRight: 0,width:20 }}
             position="bottomRight"
             onPress={() => this.add()}>
            <Icon name="md-add" /></Fab>
        </Footer>
      </Container>
    );
  }
}
