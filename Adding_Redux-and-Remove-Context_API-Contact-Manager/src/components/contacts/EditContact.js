import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import { getContact } from '../../action/contactAction';
import { updContact } from '../../action/contactAction';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) { // To Print Data in input field
    const { name, email, phone } = nextProps.contact;
    this.setState({
      name: name,
      email: email,
      phone: phone
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }
    const { id } = this.props.match.params;
    const updContact = {
      id: id,
      name: name,
      email: email,
      phone: phone
    };


    //// UPDATE CONTACT ////
    this.props.updContact(updContact);

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  // We can also do this method

  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => this.setState({
  //       name: res.data.name,
  //       email: res.data.email,
  //       phone: res.data.phone
  //     }))
  // }

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
EditContact.propTypes = {
  getContact: PropTypes.func.isRequired,
  // contact: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  contact: state.akash.contact
});

console.log("Akash", mapStateToProps)


export default connect(mapStateToProps, { getContact, updContact })(EditContact);
