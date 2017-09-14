import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormAddSchool from './form-add-school/index';
import SchoolItem from './school-item/index';
import { toggleDeleteSchool } from './form-add-school/actions';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.onDeleteSchool = this.onDeleteSchool.bind(this);
  }

  onDeleteSchool(id) {
    this.props.onDeleteSchool(id);
  }

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
          count={it.count}
          onDelete={this.onDeleteSchool}
        />
      );

    return (
      <div className={'app wrapper'}>
        <h2>Schools</h2>
        <FormAddSchool />
        {schoolList}
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
  { onDeleteSchool: toggleDeleteSchool },
)(App);
