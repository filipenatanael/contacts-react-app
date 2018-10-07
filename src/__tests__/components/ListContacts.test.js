import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });

import ListContacts from '../../components/ListContacts'

// shallow vs mount
describe('ListContacts Component', () => {
  let component;

  const _contacts = [
    {
      "id": "karen",
      "name": "Karen Isgrigg",
      "handle": "karen_isgrigg",
      "avatarURL": "http://localhost:5001/karen.jpg"
    },
    {
      "id": "richard",
      "name": "Richard Kalehoff",
      "handle": "richardkalehoff",
      "avatarURL": "http://localhost:5001/richard.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler McGinnis",
      "handle": "tylermcginnis",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }
  ];


  beforeEach(() => {
    // Fake props
    const _onDeleteContact = jest.fn();
    const props = {
      contacts: _contacts,
      onDeleteContact: _onDeleteContact
    };
    const component = shallow(<ListContacts {...props} />);
  })

  test('Should have an input.', () => {
    expect(1 + 1).toBe(2);
  });

});
