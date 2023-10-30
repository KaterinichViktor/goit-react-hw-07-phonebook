import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
  filter: '', // Add filter to the initial state
};

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  const response = await fetch('https://653f88eb9e8bd3be29e0c133.mockapi.io/contacts');
  const data = await response.json();
  return data;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.data.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.data = state.data.filter((contact) => contact.id !== action.payload);
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addContact, deleteContact, updateFilter } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.data;
export const selectFilter = (state) => state.contacts.filter;

export default contactsSlice.reducer;
