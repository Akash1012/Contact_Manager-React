import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: "John Doe",
                    email: "john@gmail.com",
                    phone: "555 - 555 - 5555"
                },
                {
                    id: 2,
                    name: "Akash",
                    email: "akash@gmail.com",
                    phone: "555 - 555 - 5555"
                },
                {
                    id: 3,
                    name: "Rahul",
                    email: "rahul@gmail.com",
                    phone: "555 - 555 - 5555"
                }
            ]
        };
    }
    deleteContact = id => {
        const { contacts } = this.state;
        const newContacts = contacts.filter(contact => contact.id !== id);
        this.setState({
            contacts: newContacts
        });
    };
    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                        deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                    />
                ))}
            </React.Fragment>
        );
    }
}
export default Contacts;
