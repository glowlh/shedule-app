import React, { Component } from 'react';
import Header from './header';
import Routes from '../routes/routes';
import './ui-components.css';
import  './style.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <main className="wrapper">
          {Routes}
        </main>
      </div>
    );
  }
}

export default App;
