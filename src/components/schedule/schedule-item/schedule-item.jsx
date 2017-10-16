import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ScheduleItem extends Component {

  static propTypes = {
    classroom: PropTypes.string.isRequired,
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    schools: PropTypes.array.isRequired,
    teacher: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    wrapperClass: PropTypes.string,
  };

  handleClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    const schoolItems = this.props.schools.map((it, id) => {
      return (
        <div className="plate__value" key={id}>{it}</div>
      );
    });

    return (
      <div className={`schedule__plate plate ${this.props.wrapperClass}`} onClick={this.handleClick}>
        <div className="plate__row">
          <div className="plate__title">Time duration</div>
          <div className="plate__value">{this.props.dateFrom} - {this.props.dateTo}</div>
        </div>
        <div className="plate__inline">
          <div className="plate__left">
            <div className="plate__row">
              <div className="plate__title">Name</div>
              <div className="plate__value">{this.props.name}</div>
            </div>
            <div className="plate__row">
              <div className="plate__title">Schools</div>
              {schoolItems}
            </div>
          </div>
          <div className="plate__right">
            <div className="plate__row">
              <div className="plate__title">Teacher</div>
              <div className="plate__value">{this.props.teacher}</div>
            </div>
            <div className="plate__row">
              <div className="plate__title">Classroom</div>
              <div className="plate__value">{this.props.classroom}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleItem;
