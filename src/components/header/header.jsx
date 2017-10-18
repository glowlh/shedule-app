import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routerLinks from '../../routes/path';
import './style.css';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <nav className="header__menu menu">
          <NavLink
            to={routerLinks.schedule}
            exact={true}
            className="menu__item"
            activeClassName="menu__item--active"
          >
            Schedule
          </NavLink>
          <NavLink
            to={routerLinks.school}
            exact={true}
            className="menu__item"
            activeClassName="menu__item--active"
          >
            Schools
          </NavLink>
          <NavLink
            to={routerLinks.teacher}
            exact={true}
            className="menu__item"
            activeClassName="menu__item--active"
          >
            Teachers
          </NavLink>
          <NavLink
            to={routerLinks.classroom}
            exact={true}
            className="menu__item"
            activeClassName="menu__item--active"
          >
            Classrooms
          </NavLink>
          <NavLink
            to={routerLinks.lecture}
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
