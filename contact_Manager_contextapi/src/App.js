import React, { Component } from "react";
import Contacts from "./Component/contacts/Contacts";
import Header from "./Component/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from './Component/contacts/AddContact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ProviderClass } from './context';
import About from './Component/pages/About';
import NotFound from './Component/pages/NotFound';
import EditContact from './Component/contacts/EditContact';

class App extends Component {
  render() {
    return (
      <ProviderClass>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about/:id" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </ProviderClass>
    );
  }
}

export default App;
