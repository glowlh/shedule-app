import React, { Component } from 'react';
import FormAddSchool from './school/form-add-school/index';
import { connect } from 'react-redux';
import FormAddClassroom from './classroom/form-add-classroom/index';
import SchoolItem from './school/school-item/index';
import ClassroomItem from './classroom/classroom-item/index';
import './ui-components.css';
import  './style.css';

class App extends Component {

  componentWillReceiveProps(nextProps) {
    console.dir(nextProps);
  }

  render() {
    const schoolList = this.props.schools &&
      this.props.schools.map((it) =>
        <SchoolItem
          key={it.id}
          id={it.id}
          name={it.name}
          count={parseInt(it.count, 10)}
        />
      );

    const classroomsList = this.props.classrooms &&
        this.props.classrooms.map((it) =>
          <ClassroomItem
            key={it.id}
            id={it.id}
            name={it.name}
            count={parseInt(it.count, 10)}
            description={it.description}
          />
        );

    return (
      <div className={'app wrapper'}>
        <h2>Schools</h2>
        <FormAddSchool />
        { schoolList }
        <hr />
        <h2>Classrooms</h2>
        <FormAddClassroom />
        { classroomsList }
      </div>
    )
  }
}

App.propTypes = {
  schools: React.PropTypes.array.isRequired,
  classrooms: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    schools: state.schools,
    classrooms: state.classrooms,
  }
};

export default connect(
  mapStateToProps,
)(App);
