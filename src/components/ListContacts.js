import React, { Component } from 'react'

class ListContacts extends Component{
  render() {
    const people = this.props.contacts
    return (
      <ol className='contact-list'>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ol>
    )
  }
}


export default ListContacts
