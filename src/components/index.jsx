import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormAddSchool from './school/form-add-school/index';
import FormAddClassroom from './classroom/form-add-classroom/index';
import FormAddTeacher from './teacher/form-add-teacher/index';
import SchoolItem from './school/school-item/index';
import ClassroomItem from './classroom/classroom-item/index';
import TeacherItem from './teacher/teacher-item/index';
import './ui-components.css';
import  './style.css';

class App extends Component {

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

    const teachersList = this.props.teachers &&
        this.props.teachers.map((it) =>
          <TeacherItem
            key={it.id}
            id={it.id}
            name={it.name}
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
        <hr />
        <h2>Teachers</h2>
        <FormAddTeacher />
        { teachersList }
      </div>
    )
  }
}

App.propTypes = {
  schools: React.PropTypes.array.isRequired,
  classrooms: React.PropTypes.array.isRequired,
  teachers: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    schools: state.schools,
    classrooms: state.classrooms,
    teachers: state.teachers,
  }
};

export default connect(
  mapStateToProps,
)(App);
