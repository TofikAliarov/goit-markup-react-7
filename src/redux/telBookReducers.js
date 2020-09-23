import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

export const telBookReducers = createSlice({
  name: "@contacts",
  initialState: initialState,
  reducers: {
    getContacts: (state, { type, payload }) => ({
      contacts: {
        ...state.contacts,
        items: payload,
      },
    }),
    addContacts: (state, { type, payload }) => ({
      contacts: {
        ...state.contacts,
        items: [...state.contacts.items, payload],
      },
    }),
    deleteContacts: (state, { type, payload }) => ({
      contacts: {
        ...state.contacts,
        items: state.contacts.items.filter((el) => el.id !== payload),
      },
    }),
    filterContacts: (state, { type, payload }) => ({
      contacts: {
        ...state.contacts,
        filter: payload,
      },
    }),
    addRequest: (state) => ({
      ...state,
      loading: true,
    }),
    addSuccess: (state) => ({
      ...state,
      loading: false,
    }),
    addError: (state) => ({
      ...state,
      loading: false,
    }),
  },
});
