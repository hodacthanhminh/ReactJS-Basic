import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <NavLink exact={true} to="/" activeClassName="active">
            {" "}
            Home
          </NavLink>
          <NavLink to="/todo" activeClassName="active">
            {" "}
            To do
          </NavLink>
          <NavLink to="/user-crud" activeClassName="active">
            {" "}
            CRUD user
          </NavLink>
          <NavLink exact={true} to="/user" activeClassName="active">
            User
          </NavLink>
        </div>
      </div>
    );
  }
}
