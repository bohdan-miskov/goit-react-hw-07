import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://683884d22c55e01d184d95cf.mockapi.io";

export const getContacts = createAsyncThunk("contacts/getAll", async () => {
  const response = await axios.get("/contacts");
  return response.data;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact) => {
    const response = await axios.post("/contacts", newContact);
    return response.data;
  }
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id) => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data.id;
  }
);
