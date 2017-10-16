import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routerLinks from '../services/router-links';
import ClassroomPage from './classroom/classroom-page';
import SchoolPage from './school/school-page';
import TeacherPage from './teacher/teacher-page';
import LecturePage from './lecture/lecture-page';
import Header from './header';
import './ui-components.css';
import  './style.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <main className="wrapper">
          <Route exact={true} path={routerLinks.school} component={SchoolPage} />
          <Route exact={true} path={routerLinks.classroom} component={ClassroomPage} />
          <Route exact={true} path={routerLinks.teacher} component={TeacherPage} />
          <Route exact={true} path={routerLinks.lecture} component={LecturePage} />
        </main>
      </div>
    )
  }
}

export default App;
