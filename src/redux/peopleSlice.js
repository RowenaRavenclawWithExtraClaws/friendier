import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    people: [
      {
        firstName: "Bobby",
        lastName: "Fischer",
        email: "bobby.fish@yahoo.com",
        friends: [1, 2],
      },
      {
        firstName: "Vishwanathan",
        lastName: "Anand",
        email: "vishy.anand@gmail.com",
        friends: [0],
      },
      {
        firstName: "Paul",
        lastName: "Morphy",
        email: "paul.kinggambit@yahoo.com",
        friends: [0],
      },
    ],
  },
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setPeople: (state, action) => {
      state.value.people = action.payload;
    },
  },
});

export const { setPeople } = peopleSlice.actions;

export const selectPeople = (state) => state.people.value.people;

export default peopleSlice.reducer;
