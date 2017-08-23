import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/app';

class App extends Component {

  componentWillMount() {
    store.dispatch({type: 'INIT', payload: 'react-redux'});
  }

  render() {
    return (
      <div className={'app'}>
        Hi, {this.props.text}!
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
