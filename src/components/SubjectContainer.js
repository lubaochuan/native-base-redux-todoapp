import { connect } from 'react-redux';
import { addSubject, removeSubject } from '../actions';
import SubjectList from './SubjectList';


function mapStateToProps(state) {
  return {
    subjects: state.main.subjects,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addSubject: payload => dispatch(addSubject(payload)),
    removeSubject: index => dispatch(removeSubject(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectList)
