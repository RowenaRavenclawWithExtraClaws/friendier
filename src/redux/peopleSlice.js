import { createSlice } from "@reduxjs/toolkit";
import { findPersonIndxByEmail } from "../utility/helpers";

const initialState = {
  value: {
    people: [
      {
        firstName: "Bobby",
        lastName: "Fischer",
        email: "bobby",
        friends: [1],
      },
      {
        firstName: "Vishwanathan",
        lastName: "Anand",
        email: "vishy",
        friends: [0, 2],
      },
      {
        firstName: "Paul",
        lastName: "Morphy",
        email: "paul",
        friends: [1],
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
    addPerson: (state, action) => {
      const tempPeople = state.value.people;

      tempPeople.push(action.payload);

      state.value.people = tempPeople;
    },
    connectPeople: (state, action) => {
      const tempPeople = state.value.people;

      const personIndx1 = findPersonIndxByEmail(
        tempPeople,
        action.payload.email1
      );

      const personIndx2 = findPersonIndxByEmail(
        tempPeople,
        action.payload.email2
      );

      if (personIndx1 !== -1 && personIndx2 !== -1) {
        if (tempPeople[personIndx1].friends.indexOf(personIndx2) === -1) {
          tempPeople[personIndx1].friends.push(personIndx2);
          tempPeople[personIndx2].friends.push(personIndx1);
        }
      }

      state.value.people = tempPeople;
    },
  },
});

export const { setPeople, addPerson, connectPeople } = peopleSlice.actions;

export const selectPeople = (state) => state.people.value.people;

export default peopleSlice.reducer;
