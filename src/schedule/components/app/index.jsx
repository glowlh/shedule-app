import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../services/store';
import FormAddSchool from './form-add-school';
import SchoolItem from './school-item';
import './index.css';

class App extends Component {

  componentWillMount() {
    store.dispatch({type: 'INIT', payload: 'react-redux'});
  }

  render() {
    return (
      <div className={'app wrapper'}>
        <h2>Schools</h2>
        <FormAddSchool />
        <SchoolItem name={'Test'} count={'45'}/>
        <SchoolItem name={'Test1'} count={'95'}/>
        <SchoolItem name={'Test2'} count={'75'}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text,
  }
};

export default connect(mapStateToProps)(App);
