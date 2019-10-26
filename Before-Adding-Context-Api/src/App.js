import React, { Component } from "react";
import Contacts from "./Component/Contacts";
import Header from "./Component/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
