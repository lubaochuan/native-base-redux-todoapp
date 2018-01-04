import React from "react";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text } from "native-base";

export default class TodoEdit extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{navigation.state.params.item.text}</Title>
        </Body>
        <Right />
      </Header>
    )
  });

  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>{item.text}</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Main")}>
            <Text>Goto EditScreenTwo</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
