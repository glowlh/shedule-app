import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RoutePath from '../../routes/path';
import './style.css';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <nav className="header__menu menu">
          <NavLink
            to={RoutePath.SCHEDULE}
            exact={true}
            className="menu__item"
            activeClassName="menu__item--active"
          >
            Schedule
          </NavLink>
          <NavLink
            to={RoutePath.SCHOOL}
            exact={true}
            className="menu__item"
            activeClassName="menu__item--active"
          >
            Schools
          </NavLink>
          <NavLink
            to={RoutePath.TEACHER}
            exact={true}
            className="menu__item"
            activeClassName="menu__item--active"
          >
            Teachers
          </NavLink>
          <NavLink
            to={RoutePath.CLASSROOM}
            exact={true}
            className="menu__item"
            activeClassName="menu__item--active"
          >
            Classrooms
          </NavLink>
          <NavLink
            to={RoutePath.LECTURE}
            exact={true}
            className="menu__item"
            activeClassName="menu__item--active"
          >
            Lectures
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
