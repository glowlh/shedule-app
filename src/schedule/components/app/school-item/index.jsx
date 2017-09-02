import React, { Component } from 'react';

class SchoolItem extends Component {

  render() {
    return (
      <div className={'school-item'}>
        <div className={'school-item__info info'}>
          <div className={'text info__text'}>School '{this.props.name}'</div>
          <div className={'text info__text'}>have {this.props.count} pupils</div>
        </div>

        <button
          className={'button button--delete'}
        >
          delete
        </button>
      </div>
    );
  }
}

export default SchoolItem;
