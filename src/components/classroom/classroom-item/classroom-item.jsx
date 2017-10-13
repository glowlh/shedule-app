import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteClassroom } from '../actions';

class ClassroomItem extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    description: PropTypes.string,
  };

  handleClickBtn = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <div className="list-item">
        <div className="list-item__info info">
          <div className="text info__text">Classroom '{this.props.name}'</div>
          <div className="text info__text">have {this.props.count} seats</div>
          <div className="text info__text">Description: <i>{this.props.description}</i></div>
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
  { onDelete: deleteClassroom }
)(ClassroomItem);
