import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormAddSchool extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      count: '',
    };

    this.onClickAddBtn = this.onClickAddBtn.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCount = this.onChangeCount.bind(this);
  }

  onClickAddBtn() {
    this.props.onAdd({
      name: this.state.name,
      count: this.state.count,
    });
  }

  onChangeName(event) {
    const target = event.target;
    this.setState({name: target.value});
  }

  onChangeCount(event) {
    const target = event.target;
    this.setState({count: target.value});
  }

  render() {
    return (
      <div className={'form form--inline'}>
        <input
          className={'field form__field'}
          type={'text'}
          placeholder={'name'}
          value={this.state.name}
          onChange={this.onChangeName}
        />
        <input
          className={'field form__field field--count'}
          type={'text'}
          value={this.state.count}
          placeholder={'count'}
          onChange={this.onChangeCount}
        />
        <button
          className={'button'}
          onClick={this.onClickAddBtn}
        >
          add
        </button>
      </div>
    );
  }
}

const toggleAddSchool = (payload) => ({
  type: 'ADD_SCHOOL',
  payload,
});

export default connect(
  null,
  { onAdd: toggleAddSchool },
)(FormAddSchool);
