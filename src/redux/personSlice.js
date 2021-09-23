import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    person: {},
  },
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPerson: (state, action) => {
      state.value.person = action.payload;
    },
  },
});

export const { setPerson } = personSlice.actions;

export const selectPerson = (state) => state.person.value.person;

export default personSlice.reducer;
