import React, { Component } from 'react';
import * as ContactsAPI from './utils/ContactsAPI';
import ListContacts from './components/ListContacts';
import CreateContact from './components/CreateContact';

class App extends Component {
  state = {
    contacts: [],
    screen: 'list'
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
    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
        {this.state.screen === 'list' &&(
          <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
          onNavigate={() => {
            this.setState(() => ({
              screen: 'create'
            }))
          }}
        />
        )};
        {this.state.screen === 'create' &&(
          <CreateContact />
        )}
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
