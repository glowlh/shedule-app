import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormAddSchool from './school/form-add-school/index';
import SchoolItem from './school/school-item/index';
import './ui-components.css';
import  './style.css';

class App extends Component {

  componentWillReceiveProps(nextProps) {
    console.dir(nextProps);
  }

  render() {
    const schoolList = this.props.schools &&
      this.props.schools.map((it) =>
        <SchoolItem
          key={it.id}
          id={it.id}
          name={it.name}
          count={parseInt(it.count, 10)}
        />
      );

    return (
      <div className={'app wrapper'}>
        <h2>Schools</h2>
        <FormAddSchool />
        { schoolList }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    schools: state.schools,
  }
};

export default connect(
  mapStateToProps,
)(App);
