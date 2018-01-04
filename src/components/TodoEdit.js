import React from "react";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text, Item, Input } from "native-base";
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const error = {};
  error.text = '';
  var text = values.text;
  if(values.text === undefined){
    text = '';
  }
  if(text.replace(/^\s+|\s+$/gm,'').length == 0){
    error.text = 'required';
  }
  return error;
};

class TodoEdit extends React.Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = ({ navigation, item, id }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{id < 0? "New":"Edit"}</Title>
        </Body>
        <Right />
      </Header>
    )
  });

  renderInput = ({ input, label, type, meta: { touched, error, warning } })=>{
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return(
      <Item error= {hasError}>
        <Input {...input}/>
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container>
        <Content padder>
          <Field name="text" component={this.renderInput} />
          <Button block primary onPress={handleSubmit}>
            <Text>Save</Text>
          </Button>
          <Button block bordered primary onPress={()=>this.props.navigation.goBack(null)}>
            <Text>Cancel</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'test',
  validate
})(TodoEdit)
