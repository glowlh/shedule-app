import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTeacher } from '../redux/actions';

class TeacherItem extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  handleClickBtn = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <div className="list-item">
        <div className="list-item__info info">
          <div className="text info__text">
            Teacher '{this.props.name}'
          </div>
          <div className="text info__text">
            Description: <i>{this.props.description}</i>
          </div>
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
  { onDelete: deleteTeacher }
)(TeacherItem);
