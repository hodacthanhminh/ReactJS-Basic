import React, { Component } from "react";
// import { withRouter } from "react-router";
import "./Home.scss";
import logo from "../../assets/images/hoidanit.png";
class HomeComponents extends Component {
  render() {
    return (
      <div className="home__wrapper">
        <h1 className="home__title">Welcome to main home page</h1>
        <p className="home__content">
          This website is my first learning ReactJS!!
          <br />
          If you want to learn more about React and other programming languages
          you can follow
          <br />
          Youtube channel{" "}
          <a
            className="home__content-link"
            href="https://www.youtube.com/channel/UCVkBcokjObNZiXavfAE1-fA"
          >
            Hỏi dân it
          </a>{" "}
          <br />
          <img className="home__logo" src={logo} alt="logo-hoidanit" />
        </p>
      </div>
    );
  }
}

// export default withRouter(HomeComponents);
export default HomeComponents;
