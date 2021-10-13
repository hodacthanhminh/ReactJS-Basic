import React, { Component } from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";

export default withRouter(
  class ListUser extends Component {
    state = {
      listUser: {},
    };
    async componentDidMount() {
      let res = await axios.get("https://reqres.in/api/users?page=1");
      this.setState({
        listUser: res && res?.data && res.data?.data ? res.data.data : [],
      });
    }

    handleViewDetailUser = (user) => {
      this.props.history.push(`user/${user.id}`);
    };

    render() {
      let { listUser } = this.state;

      return (
        <div className="list-user">
          <h3 className="list-user-heading">
            {" "}
            This page showing the list of users that have in the api{" "}
          </h3>
          {listUser.length > 0 ? (
            <div className="list-user__container">
              <br />
              {listUser.map((user, index) => {
                return (
                  <div
                    key={user.id}
                    className="user__item"
                    onClick={() => this.handleViewDetailUser(user)}
                  >
                    <p className="user__item-name">
                      <strong>
                        {user.first_name} {user.last_name}
                      </strong>
                    </p>
                    <p className="user__item-email">{user.email}</p>
                    <img
                      className="user__item-img"
                      key={user.avatar}
                      src={user.avatar}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="list-user--empty">Empty user</div>
          )}
        </div>
      );
    }
  }
);
