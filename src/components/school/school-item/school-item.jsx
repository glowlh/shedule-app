import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteSchool } from '../actions';

class SchoolItem extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  handleClickBtn = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <div className="list-item">
        <div className="list-item__info info">
          <div className="text info__text">School '{this.props.name}'</div>
          <div className="text info__text">have {this.props.count} pupils</div>
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
  { onDelete: deleteSchool }
)(SchoolItem);
