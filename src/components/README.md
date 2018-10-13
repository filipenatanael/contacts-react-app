## Component Class vs Stateless Component

```JavaScript
class ListContacts extends Component {
  ...
  this.props.name
}
```

```JavaScript
function ListContacts(props) {
  ...
  props.name
}
```

## React Stateless Functional Components

```JavaScript
import React from 'react'
import PropTypes from 'prop-types'

function ListContacts(props) {
  return (
    <ol className='contact-list'>
      {props.contacts.map((contact) => (
        <li key={contact.id} className='contact-list-item'>
          <div
            className='contact-avatar'
            style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}>
          </div>

          <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
          </div>

          <button
            onClick={() => props.onDeleteContact(contact)}
            className='contact-remove'> Remove
          </button>
        </li>
      ))}
    </ol>
  )
}

ListContacts.PropTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts
```

## Render Without Roter Example

```JavaScript
import React, { Component } from 'react';
import * as ContactsAPI from './utils/ContactsAPI';
import ListContacts from './components/ListContacts';
import CreateContact from './components/CreateContact';

class App extends Component {
  state = {
    screen: 'list'
  }
  render() {
    return (
      <div>
        {this.state.screen === 'list' &&(
          <ListContacts
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
```

## Called the method

```JavaScript
  render() {
    const { onNavigate } = this.props

    return (
      <div className='list-contacts'>
          <a
            href='#create'
            className='add-contact'
            onClick={() => onNavigate()}
            >Add Contact</a> */}
      </div>
    }
```
