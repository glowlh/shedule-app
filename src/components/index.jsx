import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormAddSchool from './school/form-add-school/index';
import FormAddClassroom from './classroom/form-add-classroom/index';
import FormAddTeacher from './teacher/form-add-teacher/index';
import FormAddLecture from './lecture/form-add-lecture/index';
import SchoolItem from './school/school-item/index';
import ClassroomItem from './classroom/classroom-item/index';
import TeacherItem from './teacher/teacher-item/index';
import LectureItem from './lecture/lecture-item/index';
import './ui-components.css';
import  './style.css';

class App extends Component {

  static propTypes = {
    classrooms: PropTypes.array.isRequired,
    schools: PropTypes.array.isRequired,
    teachers: PropTypes.array.isRequired,
    lectures: PropTypes.array.isRequired,
  };

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

    const lecturesList = this.props.lectures &&
        this.props.lectures.map((it) =>
          <LectureItem
            key={it.id}
            id={it.id}
            name={it.name}
            dateFrom={it.dateFrom}
            dateTo={it.dateTo}
            schools={it.schools}
            teacher={it.teacher}
            classroom={it.classroom}
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
        {this.props.canAddLecture &&
          <section>
            <hr />
            <h2>Lectures</h2>
            <FormAddLecture />
            { lecturesList }
          </section>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const canAddLecture = state.schools.length &&
    state.teachers.length &&
    state.classrooms.length;

  return {
    schools: state.schools,
    classrooms: state.classrooms,
    teachers: state.teachers,
    lectures: state.lectures,
    canAddLecture,
  }
};

export default connect(
  mapStateToProps,
)(App);
