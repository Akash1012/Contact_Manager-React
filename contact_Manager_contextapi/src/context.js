import React, { Component } from 'react';
import axios from 'axios'
const Context = React.createContext();

const reducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact =>
          contact.id !== action.payload)
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload,]
      }
    case 'UpdateContact':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? (contact = action.payload) : contact)
      }
    default:
      return state;
  }
}
export class ProviderClass extends Component {
  state = {
    contacts: [],
    dispatch: (action) => {
      //console.log(action)
      this.setState(state => reducer(state, action),
        () => console.log(this.state));
    }
  };
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(res => this.setState({ contacts: res.data }))
  // }
  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({ contacts: res.data });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;