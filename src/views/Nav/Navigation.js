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
          <NavLink to="/example" activeClassName="active">
            {" "}
            Example
          </NavLink>
          <NavLink exact={true} to="/user" activeClassName="active">
            User
          </NavLink>
        </div>
      </div>
    );
  }
}
