import React, { Component } from 'react';

class SchoolItem extends Component {

  constructor(props) {
    super(props);

    this.props = {
      onDelete: () => {},
    };

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
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
          onClick={this.onClickBtn}
        >
          delete
        </button>
      </div>
    );
  }
}

export default SchoolItem;
