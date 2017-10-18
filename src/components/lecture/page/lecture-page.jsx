import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormAddLecture from '../form-add';
import LectureItem from '../item';

class LecturePage extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    canAddLecture: PropTypes.bool,
  };

  render() {
    const lecturesList = this.props.items &&
      this.props.items.map((it, id) =>
        <LectureItem
          key={id}
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
      <main>
        {this.props.canAddLecture &&
        <section>
          <h2>Lectures</h2>
          <FormAddLecture />
          { lecturesList }
        </section>
        }
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  const canAddLecture = !!(state.schools.length &&
    state.teachers.length &&
    state.classrooms.length);

  return {
    items: state.lectures,
    canAddLecture,
  }
};

export default connect(
  mapStateToProps
)(LecturePage);
