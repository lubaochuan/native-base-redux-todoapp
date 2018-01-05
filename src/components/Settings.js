import React from "react";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Button, Icon,
  Title, Text } from "native-base";

export default class Settings extends React.Component {
  static navigationOptions = () => ({
    header: (
      <Header>
        <Body>
          <Title>Settings</Title>
        </Body>
      </Header>
    )
  });

  render() {
    const { item } = this.props;
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Hello world!
                </Text>
              </Body>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
