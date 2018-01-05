import React from "react"
import { Container, Header, Body, Content, List, ListItem, Text, Title,
  Icon, Left, Right } from "native-base"

export default class Settings extends React.Component {
  static navigationOptions = () => ({
    header: (
      <Header>
        <Body>
          <Title>Settings</Title>
        </Body>
      </Header>
    )
  })

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem icon>
              <Left><Icon name="person" /></Left>
              <Body>
                <Text>Students</Text>
              </Body>
              <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
            <ListItem>
              <Left><Icon name="book" /></Left>
              <Body>
                <Text>Subjects</Text>
              </Body>
              <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
