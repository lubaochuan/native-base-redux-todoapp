import React from "react";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text, Item, Input, Label, Picker } from "native-base";
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-native-datepicker'
import moment from 'moment'

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
  
  renderSubjectPicker = ({ input: { onChange, value, ...inputProps }, label, children, ...pickerProps }) => (
    <Item inlineLabel>
      <Label>Subject</Label>
    <Picker
      placeholder="Select Subject"
      selectedValue={ value }
      onValueChange={ value => onChange(value) }
      { ...inputProps }
      { ...pickerProps }
    >
      { children }
    </Picker>
    </Item>
  );
  
  renderDatePicker = ({ input: { onChange, value, ...inputProps } }) => (
    <Item inlineLabel>
      <Label>Date</Label>
      <DatePicker
        date={value == undefined? new moment().format("MM/DD/YYYY"):value}
        format={"MM/DD/YYYY"}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => onChange(moment(new Date(date)).format("MM/DD/YYYY"))}/>
    </Item>
  );

  render() {
    const { handleSubmit, subjects } = this.props;

    return (
      <Container>
        <Content padder>
          <Field name="text" label="Title" component={this.renderInput} />
          <Field
            name="subject"
            component={ this.renderSubjectPicker }
            iosHeader="Select one"
            mode="dropdown">
            {subjects.map((subject, index) =>
              <Item label={subject} value={subject} key={index}/>)}
          </Field>
          <Field name="date" component={this.renderDatePicker}/>
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
