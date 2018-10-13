import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as ContactsAPI from './utils/ContactsAPI';
import ListContacts from './components/ListContacts';
import CreateContact from './components/CreateContact';

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
    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact} />
        )} />

        <Route path='/create' component={CreateContact} />
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
