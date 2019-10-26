import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getContacts } from '../../action/contactAction';

class Contacts extends Component {
  componentDidMount() {
    console.log("ComponentDidMount ...")
    this.props.getContacts();
  }
  render() {
    const { Test } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {Test.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  Test: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  return {
    Test: state.akash.contacts
  }
};


export default connect(mapStateToProps, { getContacts })(Contacts);
