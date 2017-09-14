import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SchoolItem extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.handleClickBtn = this.handleClickBtn.bind(this);
  }

  handleClickBtn() {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <div className={'school-item'}>
        <div className={'school-item__info info'}>
          <div className={'text info__text'}>School '{this.props.name}'</div>
          <div className={'text info__text'}>have {this.props.count} pupils</div>
        </div>

        <button
          className={'button button--delete'}
          onClick={this.handleClickBtn}
        >
          delete
        </button>
      </div>
    );
  }
}

export default SchoolItem;
