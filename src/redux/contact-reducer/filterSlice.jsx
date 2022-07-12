import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      console.log(payload);
      state.filter = payload;
    },
  },
});

export const getContacts = (state) => state.contacts;
export const filterValue = (state) => state.filter;

export const filterAction = filterSlice.actions;

export const onFilterChange = (state) => state.filter.filter;

export default filterSlice.reducer;
