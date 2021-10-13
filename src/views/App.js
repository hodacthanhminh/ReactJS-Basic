import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponents.js";
import ListToDo from "./Todos/ListToDo.js";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Navigation from "./Nav/Navigation.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./home/HomeComponents";
import DetailUser from "./user/DetailUser";
import ListUser from "./user/ListUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/user-crud" exact>
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
