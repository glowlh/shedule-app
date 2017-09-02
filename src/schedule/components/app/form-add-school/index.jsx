import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormAddSchool extends Component {

  render() {
    return (
      <div className={'form form--inline'}>
        <input
          className={'field form__field'}
          type={'text'}
          placeholder={'name'}
        />
        <input
          className={'field form__field field--count'}
          type={'text'}
          placeholder={'count'}
        />
        <button
          className={'button'}
        >
          add
        </button>
      </div>
    );
  }
}

export default FormAddSchool;
