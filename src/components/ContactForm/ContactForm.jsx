import { useState } from 'react';
import { AddContactForm, Button, Input } from './ContactForm.styled';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = () => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);

  const newContact = (name, number) => {
    const includeName = contacts.find(
      e => e.name.toLowerCase() === name.toLowerCase()
    );
    const includeNumber = contacts.find(e => e.number === number);

    if (includeName) {
      return alert(`${name} is already in contacts`);
    }
    if (includeNumber) {
      return alert(`${number} is already in contacts`);
    }
    dispatch(addContact({ name: name, number: number }));
  };

  const handleChange = e => {
    const event = e.target;
    if (event.type === 'text') {
      setContactName(event.value);
    }
    if (event.type === 'tel') {
      setContactNumber(event.value);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    newContact(contactName, contactNumber);
    setContactName('');
    setContactNumber('');
  };

  return (
    <AddContactForm onSubmit={onSubmit} autoComplete="off">
      <label>
        <p>Name</p>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={contactName}
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Number</p>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          value={contactNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <Button type="submit">Add contact</Button>
    </AddContactForm>
  );
};
