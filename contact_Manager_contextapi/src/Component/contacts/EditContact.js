import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup'
//import uuid from 'uuid';
import axios from 'axios';
class EditContact extends Component {
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
    const UpdateContact = {
      // id: uuid(),
      name: name,
      email: email,
      phone: phone
    }
    const { id } = this.props.match.params;
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, UpdateContact)
      .then(res => dispatch({ type: 'UpdateContact', payload: res.data }));

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

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id)
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => this.setState({
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone
      }));
  }
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <h2 className="card-header"><span className="text-danger">Edit</span> Contact</h2>
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
                    type="text"
                    placeholder="Enter Number ..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input type="submit"
                    className="btn btn-danger btn-block"
                    value="Update Contact" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
export default EditContact;