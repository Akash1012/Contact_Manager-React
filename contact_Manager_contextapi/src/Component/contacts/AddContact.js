import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup'
//import uuid from 'uuid';
import axios from 'axios';
class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {} //Object
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }
  onSubmit = async (dispatch, e) => {
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
    const newContact = {
      // id: uuid(),
      name: name,
      email: email,
      phone: phone
    }
    console.log("Hello...........")

    // axios.post('https://jsonplaceholder.typicode.com/users', newContact)
    //   .then(res => dispatch({ type: 'ADD_CONTACT', payload: res.data }));

    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    //Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })
    // Redirect To Home....
    this.props.history.push('/');

  }
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>


                  <TextInputGroup
                    label="Name"
                    id="name"
                    placeholder="Enter Name ..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />


                  <TextInputGroup
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="Enter Email ..."
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label="Phone Number"
                    id="phone"
                    type="number"
                    placeholder="Enter Number ..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input type="submit"
                    className="btn btn-primary btn-block"
                    value="Add Contact" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
export default AddContact;