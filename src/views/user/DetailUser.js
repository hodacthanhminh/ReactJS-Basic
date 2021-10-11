import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

export default withRouter(
  class DetailUser extends Component {
    state = {
      userInfo: {},
    };

    async componentDidMount() {
      if (this.props.match && this.props.match.params) {
        let id = this.props.match.params.id;

        let res = await axios.get(`https://reqres.in/api/users/${id}`);

        this.setState({
          userInfo: res?.data && res?.data?.data ? res.data.data : {},
        });
      }
    }
    render() {
      console.log(this.props);
      let { userInfo } = this.state;
      let isEmptyObj = Object.keys(userInfo).length === 0;
      return (
        <>
          {isEmptyObj === false ? (
            <div key={userInfo.id} className="user__item">
              <p className="user__item-name">
                <strong>
                  {userInfo.first_name} {userInfo.last_name}
                </strong>
              </p>
              <p className="user__item-email">{userInfo.email}</p>
              <img
                className="user__item-img"
                key={userInfo.avatar}
                src={userInfo.avatar}
                alt="avartar"
              />
            </div>
          ) : (
            <div> Not found </div>
          )}
        </>
      );
    }
  }
);
