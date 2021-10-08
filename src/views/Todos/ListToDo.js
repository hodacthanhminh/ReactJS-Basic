import React, { Component } from "react";
import "./ListToDo.scss";
import ShowToDo from "./components/ShowToDo.js";
import AddToDo from "./components/AddToDo.js";
import { toast } from "react-toastify";

export default class ListToDo extends Component {
  state = {
    arrToDo: [{ id: 1, title: "playing game" }],
  };

  showToast = (message, type) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  addNewToDoItem = (itemToDo) => {
    this.setState({
      arrToDo: [...this.state.arrToDo, itemToDo],
    });
    this.showToast("Added", "success");
  };

  deleteToDoItem = (itemToDo) => {
    this.setState({
      arrToDo: this.state.arrToDo.filter((item) => {
        return item.id !== itemToDo.id;
      }),
    });
    this.showToast("Delete", "success");
  };

  updateToDoItem = (itemToDo) => {
    console.log(itemToDo);
    let list = [...this.state.arrToDo];
    let objIndex = list.findIndex((item) => item.id === itemToDo.id);

    if (list[objIndex].title !== itemToDo.title) {
      list[objIndex] = itemToDo;
      this.setState({
        arrToDo: list,
      });
      this.showToast("Update complete", "info");
    }
  };

  render() {
    return (
      <div className="todo-container">
        <AddToDo addNewToDoItem={this.addNewToDoItem} />
        <ShowToDo
          arrToDo={this.state.arrToDo}
          updateToDoItem={this.updateToDoItem}
          deleteToDoItem={this.deleteToDoItem}
        />
      </div>
    );
  }
}
