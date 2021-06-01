import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateAddress from "./components/create-addressbook.component";
import EditAddress from "./components/edit-addressbook.component";
import MyAddressBook from "./components/myAddressBook";

 import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">My Address Book</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Address Book</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Address</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={MyAddressBook} />
          <Route path="/edit/:id" component={EditAddress} />
          <Route path="/create" component={CreateAddress} />
        </div>
      </Router>
    );
  }
}

export default App;