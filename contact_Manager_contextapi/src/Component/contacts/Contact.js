import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Consumer } from '../../context'

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  // onDeleteClick = (id, dispatch) => {
  //   axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }))
  // };
  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    // const { contact } = this.props;
    // if we use this then in "li" we have to write contact.name

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  } primary
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <Link to={`contact/edit/${id}`}>
                  <i className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: "right",
                      color: "black",
                      marginLeft: "16px"
                    }} />
                </Link>
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email :{email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          )
        }}
      </Consumer>
    );

  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
