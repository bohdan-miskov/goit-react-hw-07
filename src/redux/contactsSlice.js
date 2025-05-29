import { createSlice } from "@reduxjs/toolkit";
import baseContacts from "../contacts.json";

const initialState = {
  items: baseContacts,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContactItems(state, action) {
      state.items.push(action.payload);
    },
    deleteContactItems(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id != action.payload
      );
    },
  },
});

export default contactsSlice.reducer;
export const { addContactItems, deleteContactItems } = contactsSlice.actions;
