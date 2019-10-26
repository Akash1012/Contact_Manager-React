import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
    state = {
        showContactInfo: false
    };
    //For Toggle Not Using right now
    onShowClick = e => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    };
    onDeleteClick = () => {
        this.props.deleteClickHandler();
    };
    render() {
        const { name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        // const { contact } = this.props;
        // if we use this then in "li" we have to write contact.name

        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}{" "}
                    <i
                        onClick={() =>
                            this.setState({
                                showContactInfo: !this.state.showContactInfo
                            })
                        }
                        className="fas fa-sort-down"
                        style={{ cursor: "pointer" }}
                    />
                    <i
                        className="fas fa-times"
                        style={{ cursor: "pointer", float: "right", color: "red" }}
                        onClick={this.onDeleteClick}
                    />
                </h4>
                {showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email :{email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                ) : null}
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
};
export default Contact;
