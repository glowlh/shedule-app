import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormAddSchool from '../form-add-school';
import SchoolItem from '../school-item';

class SchoolPage extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    const schoolList = this.props.items &&
      this.props.items.map((it) =>
        <SchoolItem
          key={it.id}
          id={it.id}
          name={it.name}
          count={parseInt(it.count, 10)}
        />
      );

    return (
      <main>
        <h2>Schools</h2>
        <FormAddSchool />
        { schoolList }
      </main>
    );
  }
}

export default connect(
  (state) => ({
    items: state.schools,
  }),
)(SchoolPage);
