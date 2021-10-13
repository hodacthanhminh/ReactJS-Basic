import React, { Component } from "react";

export default class ChildComponents extends Component {
  state = {
    showUser: false,
  };

  handleButtonClick = () => {
    this.setState({
      showUser: !this.state.showUser,
    });
  };

  render() {
    let { arrUser } = this.props;
    let { showUser } = this.state;

    return (
      <>
        {!showUser ? (
          <div>
            <button
              className="btn-show"
              onClick={() => this.handleButtonClick()}
            >
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="userCRUD__item">
              {arrUser.map((item, index) => {
                return (
                  <div key={item.id} className="user-item">
                    {item.name} - {item.email}
                    <button
                      className="userCRUD__user-button--delete"
                      onClick={() => this.props.deleteUser(item)}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleButtonClick()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
