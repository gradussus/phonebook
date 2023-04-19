import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch {
      window.alert('Something wrong');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch {
      window.alert('Something wrong');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch {
      window.alert('Something wrong');
    }
  }
);
//  Додати редагування!!!
