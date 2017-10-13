import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormAddClassroom from '../form-add-classroom';
import ClassroomItem from '../classroom-item';

class ClassroomPage extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    const classroomsList = this.props.classrooms &&
      this.props.items.map((it) =>
        <ClassroomItem
          key={it.id}
          id={it.id}
          name={it.name}
          count={parseInt(it.count, 10)}
          description={it.description}
        />
      );

    return (
      <main>
        <h2>Classrooms</h2>
        <FormAddClassroom />
        { classroomsList }
      </main>
    );
  }
}

export default connect(
  (state) => ({
    items: state.classrooms,
  }),
)(ClassroomPage);
