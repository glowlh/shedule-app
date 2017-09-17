import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSchool } from '../actions';

class FormAddSchool extends Component {

  componentWillMount() {
    this.state = {
      name: '',
      count: '',
    };

    this.handleClickAddBtn = this.handleClickAddBtn.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCount = this.handleChangeCount.bind(this);
  }

  handleClickAddBtn() {
    this.props.onAdd({
      name: this.state.name,
      count: this.state.count,
    });
  }

  handleChangeName(event) {
    const target = event.target;
    this.setState({name: target.value});
  }

  handleChangeCount(event) {
    const target = event.target;
    this.setState({count: target.value});
  }

  render() {
    return (
      <div className={'form container--inline'}>
        <input
          className={'field form__field'}
          type={'text'}
          placeholder={'name'}
          value={this.state.name}
          onChange={this.handleChangeName}
        />
        <input
          className={'field form__field field--count'}
          type={'text'}
          value={this.state.count}
          placeholder={'count'}
          onChange={this.handleChangeCount}
        />
        <button
          className={'button'}
          onClick={this.handleClickAddBtn}
        >
          add
        </button>
      </div>
    );
  }
}

FormAddSchool.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
};

export default connect(
  null,
  { onAdd: addSchool },
)(FormAddSchool);
