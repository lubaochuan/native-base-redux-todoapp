import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'

export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date: new moment ().format("MM/DD/YYYY")}
  }

  render(){
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format={"MM/DD/YYYY"}
        minDate=""
        maxDate=""
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
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
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}
