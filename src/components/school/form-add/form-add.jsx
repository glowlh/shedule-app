import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSchool } from '../redux/services';

class FormAddSchool extends Component {

  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    validationError: PropTypes.object,
  };

  state = {
    name: '',
    count: '',
    validationError: null,
  };

  handleClickAddBtn = () => {
    const count = parseInt(this.state.count, 10);
    this.setState({validationError: null});
    this.props.onAdd({
      name: this.state.name,
      count,
    }).catch((err) => {
      this.setState({validationError: err});
    });
  };

  handleChangeName = (event) => {
    const target = event.target;
    this.setState({name: target.value});
  };

  handleChangeCount = (event) => {
    const target = event.target;
    this.setState({count: target.value});
  };

  render() {
    const errorClassName = this.state.validationError ? 'form--invalid' : '';
    const inputNameError = this.state.validationError &&
      this.state.validationError.errors &&
      this.state.validationError.errors.name ||
      null;
    const inputCountError = this.state.validationError &&
      this.state.validationError.errors &&
      this.state.validationError.errors.count ||
      null;

    return (
      <div className={`form container--inline ${errorClassName}`}>
        <div className="container--column">
          <input
            className="field form__field"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <div className="form__error">{inputNameError}</div>
        </div>
        <div className="container--column">
          <input
            className="field form__field field--count"
            type="text"
            value={this.state.count}
            placeholder="count"
            onChange={this.handleChangeCount}
          />
          <div className="form__error">{inputCountError}</div>
        </div>
        <button
          className="button"
          onClick={this.handleClickAddBtn}
        >
          add
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (payload) => dispatch(addSchool(payload)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(FormAddSchool);
