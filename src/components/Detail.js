import React from "react";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Button, Icon,
  Title, Text } from "native-base"
import MyDatePicker from './MyDatePicker'

export default class Detail extends React.Component {
  static navigationOptions = ({ navigation, item, id }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title><Text>Details</Text></Title>
        </Body>
        <Right />
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
                  Subject: {item.subject}
                </Text>
                <Text>
                  Date: {item.date}
                </Text>
                <Text>
                  Duration: {item.duration} minutes
                </Text>
                <Text>
                  Note: {item.text}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button block bordered rounded primary onPress={()=>this.props.navigation.goBack(null)}>
                <Text>Close</Text>
              </Button>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
