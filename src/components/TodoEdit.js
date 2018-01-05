import React from "react";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text, Item, Input, Label, Picker } from "native-base";
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const error = {};
  error.text = '';
  error.subject = '';
  
  var text = values.text;
  if(values.text === undefined){
    text = '';
  }
  if(text.replace(/^\s+|\s+$/gm,'').length == 0){
    error.text = 'required';
  }
  
  var subject = values.subject;
  if(values.subject === undefined){
    subject = '';
  }
  if(subject.replace(/^\s+|\s+$/gm,'').length == 0){
    error.subject = 'required';
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
      <Item inlineLabel error= {hasError}>
        <Label>{label}</Label>
        <Input {...input}/>
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }
  
  renderPicker = ({ input: { onChange, value, ...inputProps }, label, children, ...pickerProps }) => (
    <Picker
      placeholder="Select Subject"
      selectedValue={ value }
      onValueChange={ value => onChange(value) }
      { ...inputProps }
      { ...pickerProps }
    >
      { children }
    </Picker>
  );
  
  formatLoanTerm = value => value.toString();
  parseLoanTerm = value => parseInt(value);

  render() {
    const { handleSubmit, subjects } = this.props;

    return (
      <Container>
        <Content padder>
          <Field name="text" label="Title" component={this.renderInput} />
          <Field
            name="subject"
            label="Subject"
            component={ this.renderPicker }
            iosHeader="Select one"
            mode="dropdown">
            {subjects.map((subject, index) =>
              <Item label={subject} value={subject} />)}
          </Field>

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
