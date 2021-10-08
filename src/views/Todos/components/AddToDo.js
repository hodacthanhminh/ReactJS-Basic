import React, { Component } from "react";
import { toast } from "react-toastify";

export default class AddToDo extends Component {
  state = {
    title: "",
  };

  handleOnChange = (event) => {
    event.preventDefault();
    this.setState({
      title: event.target.value,
    });
  };

  handleAddToDo = (event) => {
    event.preventDefault();
    if (!this.state.title) {
      toast.error("Text blank");
      return;
    }
    this.props.addNewToDoItem({
      id: Math.floor(Math.random() * 111),
      title: this.state.title,
    });

    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <div className="todo-add">
        <input
          type="text"
          value={this.state.title}
          className="todo-input"
          placeholder="What to do?"
          onChange={(event) => this.handleOnChange(event)}
        />
        <button
          className="todo-btn--add"
          onClick={(event) => this.handleAddToDo(event)}
        >
          Add
        </button>
      </div>
    );
  }
}
