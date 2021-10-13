import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addUser,
  deleteUser,
  updateUser,
} from "../../reduxstore/actions/userCRUD";
import ChildComponents from "./ChildComponents";
import FormComponents from "./FormComponents";

import "./example.scss";
class MyComponents extends Component {
  handleDeleteUser = (user) => {
    this.props.deleteUser(user);
  };

  render() {
    let { users } = this.props;
    return (
      <div className="userCRUD__container">
        <h3 className="userCRUD__title"> CRUD user using Redux store</h3>
        <FormComponents
          className="userCRUD__form"
          addNewUser={this.props.addUser}
        />
        <ChildComponents
          className="userCRUD__content"
          arrUser={users}
          deleteUser={this.props.deleteUser}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userCRUD.users,
});

export default connect(mapStateToProps, { addUser, deleteUser, updateUser })(
  MyComponents
);
