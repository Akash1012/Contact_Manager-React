import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, UPDATE_CONTACT, GET_CONTACT } from './types';
import axios from 'axios';


export const getContacts = () => dispatch => {
  console.log("GET_CALL");
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => dispatch({ type: GET_CONTACTS, payload: res.data }))
}

// export const getContacts = () => async dispatch => {
//   console.log("GET_CALL");
//   const res = await axios.get('https://jsonplaceholder.typicode.com/users');
//   dispatch({ type: 'GET_CONTACTS', payload: res.data });
// }

// For Edit Contact

export const getContact = (id) => dispatch => {
  console.log("GET_CALL");
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => dispatch({ type: GET_CONTACT, payload: res.data }))
}


export const deleteContacts = (id) => dispatch => {
  console.log('DELETE__CALL')
  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => dispatch({ type: DELETE_CONTACT, payload: id }))
}


// export const deleteContacts = id => async dispatch => {
//   await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
//   dispatch({
//     type: DELETE_CONTACT,
//     payload: id
//   });
// };







export const addContacts = (newContact) => dispatch => {
  console.log("ADDCONTACT_CALL");
  axios.post('https://jsonplaceholder.typicode.com/users', newContact)
    .then(res => dispatch({ type: ADD_CONTACT, payload: res.data }));
}



export const updContact = (updContact) => dispatch => {
  console.log("ADDCONTACT_CALL");
  axios.put(`https://jsonplaceholder.typicode.com/users/${updContact.id}`, updContact)
    .then(res => dispatch({ type: UPDATE_CONTACT, payload: res.data }));
}

