import React, { Component } from 'react';
import ListContacts from './components/ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    // setState from remote server
    ContactsAPI.getAll()
    .then((response) => {
      this.setState(() => ({
        contacts: response
      }))
    });
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
    // Remove from database
    console.log(contact);
    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    )
  }
}

export default App;

// contacts: [
//   {
//     "id": "karen",
//     "name": "Karen Isgrigg",
//     "handle": "karen_isgrigg",
//     "avatarURL": "http://localhost:5001/karen.jpg"
//   },
//   {
//     "id": "richard",
//     "name": "Richard Kalehoff",
//     "handle": "richardkalehoff",
//     "avatarURL": "http://localhost:5001/richard.jpg"
//   },
//   {
//     "id": "tyler",
//     "name": "Tyler McGinnis",
//     "handle": "tylermcginnis",
//     "avatarURL": "http://localhost:5001/tyler.jpg"
//   }
// ]
