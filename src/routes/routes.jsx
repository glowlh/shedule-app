import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RoutePath from './path';
import ClassroomPage from '../components/classroom/page';
import SchoolPage from '../components/school/page';
import TeacherPage from '../components/teacher/page';
import LecturePage from '../components/lecture/page';
import Schedule from '../components/schedule/page';

const Routes = (
  <Switch>
    <Route exact={true} path={RoutePath.SCHEDULE} component={Schedule} />
    <Route path={RoutePath.SCHOOL} component={SchoolPage} />
    <Route path={RoutePath.CLASSROOM} component={ClassroomPage} />
    <Route path={RoutePath.TEACHER} component={TeacherPage} />
    <Route path={RoutePath.LECTURE} component={LecturePage} />
  </Switch>
);

export default Routes;
