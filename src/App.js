import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default App;


// import React, { Component } from 'react';
//
// class ContactList extends Component {
//   render() {
//     const people = this.props.contacts
//
//     return <ol>
//       {people.map((person) => (
//         <li key={person.name}>{ person.name }</li>
//       ))}
//     </ol>
//   }
// }
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <ContactList contacts={[
//           { name: 'Steve Rogers' },
//           { name: 'Maria Hill' },
//           { name: 'Nick Fury' }
//         ]}
//         />
//
//         <ContactList contacts={[
//           { name: 'Maria Hill' },
//           { name: 'Adaga' },
//           { name: 'Elektra' }
//         ]}
//         />
//       </div>
//     );
//   }
// }
//
// export default App;
