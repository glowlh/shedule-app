import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScheduleItem from '../item';
import { addSelected } from '../../lecture/redux/actions';
import './style.css';

class SchedulePage extends Component {

  static propTypes = {
    lectures: PropTypes.array,
    onAddSelected: PropTypes.func,
    selected: PropTypes.array,
  };

  state = {
    selected: new Set(),
  };

  formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }

  handleSelectLecture = (id) => {
    this.toggleSelected(id);
  };

  handleClickAddFavoriteBtn = () => {
    this.props.onAddSelected([...this.state.selected]);
  };

  toggleSelected(id) {
    const selected = new Set(this.state.selected);
    if (selected.has(id)) {
      selected.delete(id);
    } else {
      selected.add(id);
    }

    this.setState({ selected });
  }

  render() {
    const scheduleList = this.props.lectures.map((it) => {
      const dateFrom = this.formatDate(new Date(it.dateFrom));
      const dateTo = this.formatDate(new Date(it.dateTo));
      let className = '';
      const selected = [...this.state.selected];
      const favorite = this.props.selected;
      selected.some((p) => {
        if (p === it.id) {
          className = 'plate--selected';
          return true;
        }

        return false;
      });
      favorite.some((p) => {
        if (p === it.id) {
          className += ' plate--favorite';
          return true;
        }

        return false;
      });

      return (
        <div key={it.id} className="schedule__list">
          <ScheduleItem
            classroom={it.classroom}
            dateFrom={dateFrom}
            dateTo={dateTo}
            name={it.name}
            schools={it.schools}
            teacher={it.teacher}
            onClick={this.handleSelectLecture}
            id={it.id}
            wrapperClass={className}
          />
        </div>
      );
    });

    return (
      <div className="schedule">
        {scheduleList}
        <button
          className="button button--unicorn"
          onClick={this.handleClickAddFavoriteBtn}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    lectures: state.lectures.items,
    selected: state.lectures.selected,
  }),
  { onAddSelected: addSelected },
)(SchedulePage);
