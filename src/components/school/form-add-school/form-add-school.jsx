import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSchool } from '../services';

class FormAddSchool extends Component {

  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    validationError: PropTypes.object,
  };

  componentWillMount() {
    this.state = {
      name: '',
      count: '',
    };
  }

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
    return (
      <div className={`form container--inline ${errorClassName}`}>
        <input
          className="field form__field"
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChangeName}
        />
        <input
          className="field form__field field--count"
          type="text"
          value={this.state.count}
          placeholder="count"
          onChange={this.handleChangeCount}
        />
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
