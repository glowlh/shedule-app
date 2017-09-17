import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteClassroom } from '../actions';

class ClassroomItem extends Component {

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
          <div className="text info__text">Classroom '{this.props.name}'</div>
          <div className="text info__text">have {this.props.count} seats</div>
          <div className="text info__text">Description: {this.props.description}</div>
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

ClassroomItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  description: React.PropTypes.string,
};

export default connect(
  null,
  { onDelete: deleteClassroom }
)(ClassroomItem);
