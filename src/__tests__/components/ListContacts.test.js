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

    component = shallow(<ListContacts {...props} />);

  });

  test('Should have an input.', () => {
    expect(component.find('input').length).toBe(1);
  });

  test('Should have a text on input.', () => {
    expect(component.find('input').prop('type')).toBe('text');
  });

  test('Should have a className.', () => {
    expect(component.find('input').prop('className')).toBe('search-contacts');
  });

  test('Query is empty!', () => {
    expect(component.find('input').prop('value')).toBe('');
  });

  test('Should have 9 nodes', () => {
    expect(component.find('div').children().length).toBe(9);
  });

  test('Should have a input after of first div', () => {
    expect(component.find('div').children().at(3).name()).toBe('input');
  });

  // test('Should have a children', () => {
  //    expect(component.find('div').children().first().text()).toBe('input');
  //    expect(component.find('div').children().first().html()).toBe('input');
  // });

  // test('Defined value `Richard`, () => {
  //   expect(component.find('input').prop('value')).toBeDefined('Richard');
  // });

  test('Defined query to search `Tyler`', () => {
    // Assign value to state.query
    const input = component.find('input').first()
    input.simulate('change', {
      target: { value: 'Tyler' }
    });
    // Check if state.query is equal `Tyler`
    expect(component.state().query).toEqual('Tyler');
  });






});
