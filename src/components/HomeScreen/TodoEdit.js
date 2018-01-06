import React from "react";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text, Item, Input, Label, Picker } from "native-base";
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-native-datepicker'
import moment from 'moment'

function isNormalInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}

const validate = values => {
  const error = {};
  error.duration = '';
  error.subject = '';
  
  var duration = values.duration;
  if(values.duration === undefined){
    duration = '';
  }

  if(!isNormalInteger(duration)){
    error.duration = 'must be integer';
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
      <Item stackedLabel error= {hasError}>
        <Label>{label}</Label>
        <Input {...input}/>
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }
  
  renderSubjectPicker = ({ input: { onChange, value, ...inputProps }, label, children, ...pickerProps }) => (
    <Item stackedLabel>
      <Label>{label}</Label>
    <Picker
      placeholder="Select One"
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
    <Item stackedLabel>
      <Label>Date</Label>
      <DatePicker
        date={value == undefined? new moment().format("MM/DD/YYYY"):value}
        format={"MM/DD/YYYY"}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
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
          <Field
            name="subject"
            label="Subject"
            component={ this.renderSubjectPicker }
            iosHeader="Select one"
            mode="dropdown">
            {subjects.map((subject, index) =>
              <Item label={subject} value={subject} key={index}/>)}
          </Field>
          <Field name="date" component={this.renderDatePicker}/>
          <Field name="duration" label="Duration (minutes)" component={this.renderInput} />
          <Field name="text" label="Note" placeholder="Write a note" component={this.renderInput} />
          <Button block rounded primary onPress={handleSubmit}>
            <Text>Save</Text>
          </Button>
          <Button block rounded bordered primary onPress={()=>this.props.navigation.goBack(null)}>
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
