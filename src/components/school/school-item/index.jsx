import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSchool } from '../actions';

class SchoolItem extends Component {

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

SchoolItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  onDelete: React.PropTypes.func.isRequired,
};

export default connect(
  null,
  { onDelete: deleteSchool }
)(SchoolItem);
