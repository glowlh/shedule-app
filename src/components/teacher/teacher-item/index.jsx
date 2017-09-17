import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTeacher } from '../actions';

class TeacherItem extends Component {

  componentWillMount() {
    this.handleClickBtn = this.handleClickBtn.bind(this);
  }

  handleClickBtn() {
    this.props.onDelete(this.props.id);
  }

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

TeacherItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  onDelete: React.PropTypes.func.isRequired,
};

export default connect(
  null,
  { onDelete: deleteTeacher }
)(TeacherItem);
