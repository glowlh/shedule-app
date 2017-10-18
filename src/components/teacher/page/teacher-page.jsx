import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormAddTeacher from '../form-add';
import TeacherItem from '../item';

class TeacherPage extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    const teachersList = this.props.items &&
      this.props.items.map((it) =>
        <TeacherItem
          key={it.id}
          id={it.id}
          name={it.name}
          description={it.description}
        />
      );

    return (
      <main>
        <h2>Teachers</h2>
        <FormAddTeacher />
        { teachersList }
      </main>
    );
  }
}

export default connect(
  (state) => ({
    items: state.teachers,
  }),
)(TeacherPage);
