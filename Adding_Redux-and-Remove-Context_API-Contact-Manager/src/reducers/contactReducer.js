import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, UPDATE_CONTACT, GET_CONTACT } from '../action/types';

const initialState = {
  contacts: [],
  contact: {}

};

export default function (state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => (
          contact.id !== action.payload
        ))
      }
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      }
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => (
          contact.id === action.payload.id ? (contact = action.payload) : contact
        ))
        //contacts: [...state.contacts, action.payload]
      }
    default:
      return state;
  }
}