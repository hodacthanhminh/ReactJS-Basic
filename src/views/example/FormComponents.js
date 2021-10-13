import React, { Component } from "react";

export default class FormComponents extends Component {
  state = {
    name: "",
    email: "",
  };

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.name || !this.state.email) {
      alert("Please enter full!");
      return;
    }
    this.props.addNewUser({
      id: Math.floor(Math.random() * 111),
      name: this.state.name,
      email: this.state.email,
    });
  };

  render() {
    return (
      <>
        <div className="userCRUD__form-control">
          <label className="userCRUD__form-label"> name</label>
          <input
            className="userCRUD__form-input"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={(event) => this.handleChangeName(event)}
          />
        </div>
        <div className="userCRUD__form-control">
          <label className="userCRUD__form-label"> email</label>
          <input
            className="userCRUD__form-input"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={(event) => this.handleChangeEmail(event)}
          />
        </div>
        <button
          className="btn userCRUD__form-button"
          onClick={(event) => this.handleSubmit(event)}
        >
          Submit
        </button>
      </>
    );
  }
}
