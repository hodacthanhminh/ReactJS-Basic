import React, { Component } from "react";
import { toast } from "react-toastify";

export default class ShowToDo extends Component {
  state = {
    editToDo: {},
  };

  editToDoItem = (item) => {
    this.setState({ editToDo: item });
  };

  handleEditInput = (event) => {
    let editToDoCopy = this.state.editToDo;
    editToDoCopy.title = event.target.value;
    this.setState({ editToDo: editToDoCopy });
  };

  handleupdateToDoItem = () => {
    // this.props.updateToDoItem(this.state.editToDo);
    this.setState({ editToDo: "" });
  };

  render() {
    let isEmptyObj = Object.keys(this.state.editToDo).length === 0;
    let { editToDo } = this.state;
    let { arrToDo } = this.props;

    return (
      <div className="todo-content">
        {arrToDo.length > 0 ? (
          <div className="todo-list-item">
            {arrToDo.map((item, index) => {
              return (
                <div key={item.id} className="todo-item">
                  {isEmptyObj === true || editToDo?.id !== item.id ? (
                    <>
                      {" "}
                      <p className="todo-text">
                        {index + 1} - {item.title}
                      </p>{" "}
                      <button
                        className="todo-btn--edit"
                        onClick={() =>
                          this.editToDoItem({ id: item.id, title: item.title })
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="todo-btn--delete"
                        onClick={() => this.props.deleteToDoItem(item)}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="todo-text">
                        {index + 1} -{" "}
                        <input
                          type="text"
                          className="todo-text--edit"
                          value={editToDo.title}
                          onChange={(event) => this.handleEditInput(event)}
                        />
                      </p>
                      <button
                        className="todo-btn--save"
                        onClick={() => this.handleupdateToDoItem()}
                      >
                        Save
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="todo-list-empty">List is empty</div>
        )}
      </div>
    );
  }
}
