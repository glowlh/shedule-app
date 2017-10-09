import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteLecture } from '../actions';

class LectureItem extends Component {

  componentWillMount() {
    this.handleClickBtn = this.handleClickBtn.bind(this);
  }

  handleClickBtn() {
    this.props.onDelete(this.props.id);
  }

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

LectureItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  dateFrom: React.PropTypes.string.isRequired,
  dateTo: React.PropTypes.string.isRequired,
  schools: React.PropTypes.array.isRequired,
  teacher: React.PropTypes.string.isRequired,
  classroom: React.PropTypes.string.isRequired,
  onDelete: React.PropTypes.func.isRequired,
};

export default connect(
  null,
  { onDelete: deleteLecture }
)(LectureItem);
