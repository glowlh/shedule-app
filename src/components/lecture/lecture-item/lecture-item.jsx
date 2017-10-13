import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLecture } from '../actions';

class LectureItem extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired,
    schools: PropTypes.array.isRequired,
    teacher: PropTypes.string.isRequired,
    classroom: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  handleClickBtn = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <div className="list-item">
        <div className="info">
          <div className="text info__text">Lecture '{this.props.name}'</div>
          <div className="text info__text">{this.props.dateFrom} - {this.props.dateTo}</div>
          <div className="text info__text">Schools <i>'{this.props.schools.map(it => it)}'</i></div>
          <div className="text info__text">Teacher '{this.props.teacher}'</div>
          <div className="text info__text">Classroom '{this.props.classroom}'</div>
        </div>

        <button
          className="button button--delete"
          onClick={this.handleClickBtn}
        >
          delete
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { onDelete: deleteLecture }
)(LectureItem);
